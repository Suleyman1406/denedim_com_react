import {useContext,createContext,useState} from 'react'
const CommentsContext =createContext();

const defaultArr=[
    {
        id:1,
        image:'images/phone.jpg',
        userName:'Fatih Orkun',
        productName:'Samsung Galaxy A52 128GB Siyah Cep Telefonu SM-A525FZKHTUR',
        comment:'Ürün güzel fakat size paket mührünün fotoğrafını yolluyorum. Kime gelse bu şekilde, huylanır. Açtım jelatinlerini kendim söktüm evet sıfır telefon ama dikkat edelim',
        likeNum:56,
        unlikeNum:8,
        isSaved:true,
    },
    {   
        id:2,
        image:'images/vacuumCleaner.jpg',
        userName:'Fatih Furkan',
        productName:'Mini el kuru ve ıslak kablosuz kablosuz elektrik süpürgesi',
        comment:'X Marka Elektrik Süpürgesi boyutu küçük ama çok kullanışlı. Cok az yer kaplıyor',
        likeNum:28,
        unlikeNum:2,
        isSaved:false,
    },
    {
        id:3,
        image:'images/phone.jpg',
        userName:'Emre Usta',
        productName:'Samsung Galaxy A52 128GB Siyah Cep Telefonu SM-A525FZKHTUR',
        comment:'Kamerası mükemmel  iki örnek  bırakıyorum aşağı. Sesi ve ekranida güzel şimdilik bir sıkıntı yok. Şu esneme  sorununa yok çok şükür.',
        likeNum:28,
        unlikeNum:3,
        isSaved:false,
    },
    {
        id:4,
        image:'images/vacuumCleaner.jpg',
        userName:'Anonim',
        productName:'Mini el kuru ve ıslak kablosuz kablosuz elektrik süpürgesi',
        comment:'X Marka Elektrik Süpürgesi boyutu küçük ama çok kullanışlı. Cok az yer kaplıyor',
        likeNum:29,
        unlikeNum:5,
        isSaved:false,
    },
    {
        id:5,
        image:'images/phone.jpg',
        userName:'Fatih Orkun',
        productName:'Samsung Galaxy A52 128GB Siyah Cep Telefonu SM-A525FZKHTUR',
        comment:'Ürün güzel fakat size paket mührünün fotoğrafını yolluyorum. Kime gelse bu şekilde, huylanır. Açtım jelatinlerini kendim söktüm evet sıfır telefon ama dikkat edelim',
        likeNum:56,
        unlikeNum:8,
        isSaved:true,
    },
    {
        id:6,
        image:'images/vacuumCleaner.jpg',
        userName:'Fatih Furkan',
        productName:'Mini el kuru ve ıslak kablosuz kablosuz elektrik süpürgesi',
        comment:'X Marka Elektrik Süpürgesi boyutu küçük ama çok kullanışlı. Cok az yer kaplıyor',
        likeNum:28,
        unlikeNum:2,
        isSaved:false,
    },
    {
        id:7,
        image:'images/phone.jpg',
        userName:'Emre Usta',
        productName:'Samsung Galaxy A52 128GB Siyah Cep Telefonu SM-A525FZKHTUR',
        comment:'Kamerası mükemmel  iki örnek  bırakıyorum aşağı. Sesi ve ekranida güzel şimdilik bir sıkıntı yok. Şu esneme  sorununa yok çok şükür.',
        likeNum:28,
        unlikeNum:3,
        isSaved:false,
    },
    {
        id:8,
        image:'images/vacuumCleaner.jpg',
        userName:'Anonim',
        productName:'Mini el kuru ve ıslak kablosuz kablosuz elektrik süpürgesi',
        comment:'X Marka Elektrik Süpürgesi boyutu küçük ama çok kullanışlı. Cok az yer kaplıyor',
        likeNum:29,
        unlikeNum:5,
        isSaved:false,
    }
]
export const CommentsProvider =({children})=>{
    const[comments,setComments]=useState(defaultArr);
    const values={
        comments,
        setComments
    }
    return(
        <CommentsContext.Provider value={values}>{children}
        </CommentsContext.Provider>
    )
}
export const useComments=()=>useContext(CommentsContext);
