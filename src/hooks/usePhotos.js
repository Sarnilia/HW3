import { useEffect, useState } from "react"

const LSPhotosKey = 'photos'

const usePhotos = () => {
    const [photos, setPhotos] = useState([]) 

    const addNewPhoto = (title, description, tag, url) => {
        const newPhoto = {
            id: Date.now(),
            title,
            description,
            tag,
            url, 
        }

        setPhotos(prev => [...prev, newPhoto])
    }

    const deletePhoto = (id) => {
        setPhotos(prev => prev.filter(photo => photo.id !== id))
    }

    useEffect(() => {
        const dataFromLS = localStorage.getItem(LSPhotosKey)

        if (dataFromLS) {
        setPhotos(JSON.parse(dataFromLS))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(LSPhotosKey, JSON.stringify(photos))
    }, [photos])

    return {
        photos,
        addNewPhoto,
        deletePhoto,
    }
}

export default usePhotos