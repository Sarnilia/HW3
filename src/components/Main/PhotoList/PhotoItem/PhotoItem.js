import { useContext } from "react"
import { PhotoListContext } from "../../../../contexts/PhotoListContext"

const PhotoItem = ({id, url, description, tag, title}) => {

    const {deletePhoto} = useContext(PhotoListContext)
    const deleteHandler = () => deletePhoto(id)

    return (
    <div className="card mb-3" style={{width: "300px"}} >
        <img src={url} className="card-img-top" alt={url}></img>
            <div className="card-body p-1 d-flex flex-column">
                <div className="card p-1" style={{textAlign: "left"}}>{title}</div>
                <div className="card p-1" style={{textAlign: "left"}}>{description}</div>
                <div className="card mb-2 p-1" style={{textAlign: "left"}}>#{tag}</div>
                <button onClick={deleteHandler} type="button" className="btn btn-danger">Delete</button>
            </div>  
     </div>
    )
}

export default PhotoItem