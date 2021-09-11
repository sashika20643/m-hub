import React from "react";

import {useState,useEffect} from "react";
import axios from "axios";
import "./homeb/homeb.css";
function HomB(props){
    const movieclick=(id)=>{
        window.location.href =`/moviedetails/${id}`;
    }
    const [Mlist, setMlist] = useState([]);
    useEffect(()=>{
        
  
       
        axios.post(`https://yts.mx/api/v2/list_movies.json?genre=${props.gen}&limit=${props.limit}&sort_by=${props.sort}`).then((res)=>{
            setMlist(res.data.data.movies);
            
         
          
         
           
        }).catch((err)=>{
            alert("norelated movie");
        })
        
    
  
  },[props])

    return(
        <div className="Homeb">
        <ul>
{Mlist.map((item,index)=>{
      
      return(
        <li key={index} onClick={()=>{movieclick(item.id)}} value={item.id}  >
            <div className="bimg">
            <img src={item.medium_cover_image} alt={item.year} title={item.title_english}></img></div>
            <div className="bright">
                <div className="br">
            <h3>{item.title_english}</h3>
            
            
            <h4> IMDB: {item.rating}</h4>
            <h4> Year: {item.year}</h4>
            <h4> RT: {item.runtime}</h4>
            </div>
            <button >Download</button>
            </div>
            
        
        </li>
      );
  })}
  </ul>
  
    </div>

    );
}
export default HomB;