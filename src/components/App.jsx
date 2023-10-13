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
  loading: true,
  query: value
})

}
clickButton = () =>{
this.setState({ page: this.state.page + 1})
}


componentDidUpdate(prevProps, prevState){
    if ( prevState.query !== this.state.query || prevState.page !== this.state.page) {
      if (this.state.page === 1 || prevState.query !== this.state.query) {

        serviceAPI(this.state.query, this.state.page)
    .then(data => {
      console.log(data);
      this.setState({
        page: 1,
        images: data.data.hits,
        loading: false,
        loadMore: this.state.page < Math.ceil(data.data.totalHits / 12 )
      })

    }).catch(err =>{
        console.log(err);
    })

      } else{
        serviceAPI(this.state.query, this.state.page)
        .then(data =>{
          this.setState(prevState => ({
            images: [...prevState.images, ...data.data.hits],
            loading: false,
            loadMore: this.state.page < Math.ceil(data.data.totalHits / 12 )
          }))
          console.log(this.state.page < Math.ceil(data.data.totalHits / 12 ))
        })
        .catch(err =>{
          console.log(err);
        })
      }
    
    }
}


render(){
  const listImg = this.state.images
  console.log(this.state.loadMore);
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
