import {useContext,createContext,useState} from 'react'
const ProfileContext =createContext();

export const ProfileProvider =({children})=>{
    const[isLogged,setIsLogged]=useState(true);
    const[savedCommentsId,setSavedCommentsId]=useState([]);
    const[likedCommentsId,setLikedCommentsId]=useState([1]);
    const[unLikedCommentsId,setUnLikedCommentsId]=useState([2,3]);
    const values={
        isLogged,
        setIsLogged,
        savedCommentsId,
        setSavedCommentsId,
        likedCommentsId,
        setLikedCommentsId,
        unLikedCommentsId,
        setUnLikedCommentsId
    }   
    return(
        <ProfileContext.Provider value={values}>{children}
        </ProfileContext.Provider>
    )
}
export const useProfile=()=>useContext(ProfileContext);
