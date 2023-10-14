import { Component } from "react";
import { MagnifyingGlass } from  'react-loader-spinner'
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { serviceAPI } from "ServiceAPI/ServiceImgAPI";
import { Button } from "./Button/Button";



export class App extends Component{

  state ={
    images: [],
    query:'',
    page: 1,
    loading: false,
    loadMore: 0
  }

 

onInputValue = (value) =>{
  if (this.state.query === value) {
    return alert('The result has already been found')
    }
this.setState({
  query: value
})

}
clickButton = () =>{
this.setState({ page: this.state.page + 1})
}


async componentDidUpdate(prevProps, prevState){
  if (prevState.query !== this.state.query) {
    this.setState({
      images:[],
      page: 1
    })
  }

    if ( this.state.query !== prevState.query || prevState.page !== this.state.page) {
      this.setState({
        loading: true,
      })

      try{
       const servic = await serviceAPI(this.state.query, this.state.page)
       this.setState(prevState => ({
            images: this.state.page === 1 ? servic.data.hits : [...prevState.images, ...servic.data.hits],
            loadMore: this.state.page < Math.ceil(servic.data.totalHits / 12 )
          }))
      } catch{
        console.log();
      } finally{
        this.setState({
              loading: false,
            })
      }
    }
}


render(){
  const listImg = this.state.images
  return (
    <div>
      <Searchbar 
      onInputValue={this.onInputValue}
      />
      <MagnifyingGlass
      visible={this.state.loading}
      height="80"
      width="80"
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor = '#c0efff'
      color = '#e15b64'
    />

      {listImg.length >0 &&(
      <ImageGallery
       arrImg={listImg}
       />
       )}

      {listImg.length >0 && this.state.loadMore &&( //
        <Button 
        onClickButton={this.clickButton}
        />
      )}
      </div>
  )
} 
};
