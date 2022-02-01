import {useContext,createContext,useState} from 'react'
const ProfileContext =createContext();

export const ProfileProvider =({children})=>{
    const[isLogged,setIsLogged]=useState(false);
    const[savedCommentsId,setSavedCommentsId]=useState([1,6,7,8]);
    const[likedCommentsId,setLikedCommentsId]=useState([1]);
    const[unLikedCommentsId,setUnLikedCommentsId]=useState([2,3]);
    const[userCommentsId,setUserCommentsId]=useState([1,5]);
    const[user,setUser]=useState({name:'Hande',surname:'Işıklı',nickname:'hande1234',location:'Denizli, Turkey',commentCount:2,likeCount:1,about:'Ben 17 yaşındayım. Fen lisesinde okuyorum. Boyum uzun ve basketbol oynuyorum. Benim gözlerim mavi.',job:'Psikolog',age:21});
    const values={
        isLogged,
        setIsLogged,
        savedCommentsId,
        setSavedCommentsId,
        likedCommentsId,
        setLikedCommentsId,
        unLikedCommentsId,
        setUnLikedCommentsId,
        user,
        userCommentsId,
        setUserCommentsId,
        setUser
    }   
    return(
        <ProfileContext.Provider value={values}>{children}
        </ProfileContext.Provider>
    )
}
export const useProfile=()=>useContext(ProfileContext);
