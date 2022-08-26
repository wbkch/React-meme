import MemeCard from "../components/Card"
import { getAllMeme } from "../api/getAllMeme"
import { useEffect,useState } from "react"

const Home=()=>{

    const [data,setData] = useState([])
    useEffect(()=> {
        getAllMeme().then(meme=>setData(meme.data.memes)
         )
     }, [])

    return(
      
        <div className="row">
            {
                data.map((el)=>(
                    <MemeCard key={el.id} img={el.url} title={el.name}/>
                ))
            }
        </div>
        
    )
}

export default Home