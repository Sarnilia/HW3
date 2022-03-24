import { useContext, useState } from "react"
import { PhotoListContext } from "../../../contexts/PhotoListContext";

const Form = () => {

    const [title, setTitle] = useState('')

    const {addNewPhoto} = useContext(PhotoListContext)

    const changeHandlerTitle = (e) => {
        setTitle(e.target.value) 
    }
    const [url, setUrl] = useState('')

    const changeHandlerUrl = (e) => {
        setUrl(e.target.value)
    }

    const [description, setDescription] = useState('')

    const changeHandlerDescription = (e) => {
        setDescription(e.target.value)
    }

    const [tag, setTag] = useState('')

    const changeHandlerTag = (e) => {
        setTag(e.target.value) 
    }

    const submitHandler = (e) => {
        
        e.preventDefault()

        let newTitle = title.trim()
        let newDescription = description.trim()
        let newTag = tag.trim()
        let newUrl = url.trim() 
        if (newTitle && newDescription && newTag && newUrl) {
            addNewPhoto(title, description, tag, url)
            setUrl('')
            setDescription('')
            setTag('')
            setTitle('')
        }
    }

    return (
        <form onSubmit={submitHandler} className="d-flex flex-column align-items-center mt-3">
            <div className="mb-3">
                <input onChange={changeHandlerTitle} type="text" className="form-control" placeholder="Title" value={title}/> 
             </div>
            <div className="mb-3">
                 <input onChange={changeHandlerDescription} type="text" className="form-control" placeholder="Decription" value={description}/> 
            </div>
            <div className="mb-3">
                 <input onChange={changeHandlerTag} type="text" className="form-control" placeholder="Tag" value={tag}/> 
            </div>
            <div className="mb-3">
                 <input onChange={changeHandlerUrl} type="text" className="form-control" placeholder="Photo URL" value={url}/> 
            </div>
            <button type="submit" className="btn btn-primary">Add Photo</button>
        </form>
    )
}

export default Form;
