import { createContext } from "react";
import usePhotos from "../hooks/usePhotos";

const PhotoListContext = createContext()

const PhotoListProvider = ({children}) => {

    const {photos, addNewPhoto, deletePhoto,} = usePhotos()

    return (
        <PhotoListContext.Provider value={{photos, addNewPhoto, deletePhoto}}>
            {
                children
            }
        </PhotoListContext.Provider>
    )
}

export default PhotoListProvider;

export {
    PhotoListContext,
}