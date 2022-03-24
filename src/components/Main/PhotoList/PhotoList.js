import { useContext } from "react"
import { PhotoListContext } from "../../../contexts/PhotoListContext"
import PhotoItem from "./PhotoItem/PhotoItem"

const PhotoList = () => {

    const {photos} = useContext(PhotoListContext)
    
    return (
        <div className="d-flex flex-column-reverse align-items-center">
                 {
                photos.map((photo) => {
                    return (
                       <PhotoItem key={photo.id} id={photo.id} url={photo.url} description={photo.description} tag={photo.tag} title={photo.title}/> 
                    )
                })
            }
        </div>
    )
}

export default PhotoList