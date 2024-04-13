import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react"


export const Home = () => {
    const [link, setLink] = useState("https://catfact.ninja/fact");
   
    const {data, isLoading, isError, error, refetch} = useQuery({
        queryKey: ["getData"],
        queryFn: () => {
            return axios.get(link)
                .then((res)=> res.data)
        }
    })    

    const showResult = () => {
        if (isError) return <div>
            {error.message}
        </div>
        else if (isLoading){
            return <h1>Is loading...</h1>
        } else return <div>
            {Object.keys(data).map((point, key) => {
                return <li key={key}>{point} : {data[point]}</li>
            })}
        </div>
    }

    return <div>
        <h1>Homepage</h1>
        <input onChange={(e) => {setLink(e.target.value)}} 
        placeholder="https://catfact.ninja/fact"/>
        <button onClick={refetch}>Get data</button>
        <h3>{showResult()}</h3>        
    </div>
}