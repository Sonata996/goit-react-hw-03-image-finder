import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ListImg } from "./ImageGallery.styled"


export const ImageGallery = ({arrImg}) =>{
    return(
        <ListImg>
             {arrImg.map(elem => <ImageGalleryItem key={elem.id} img={elem}/>)}
        </ListImg>
    )
}