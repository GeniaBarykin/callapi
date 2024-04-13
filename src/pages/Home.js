import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react"
import logo from '../logo.svg';
import "./Home.css"

export const Home = () => {
    const [link, setLink] = useState("https://catfact.ninja/fact");
   
    const {data, isFetching, isError, error, refetch} = useQuery({
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
        else if (isFetching){
            return <img src={logo} className="App-logo" alt="logo" />
        } else return <div className="Home-data-div">
            {Object.keys(data).map((point, key) => {
                return <li className="Home-list-item" key={key}>{point} : {data[point]}</li>
            })}
        </div>
    }

    return <div>
        <h3>Incert a link for the get request, for example:</h3>
        <input onChange={(e) => {setLink(e.target.value)}} 
        placeholder="https://catfact.ninja/fact"/>
        <button onClick={refetch}>Get data</button>
        <div className="Home-result-div">{showResult()}  </div>     
    </div>
}