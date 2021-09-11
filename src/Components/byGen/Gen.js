import React from "react";
import './gencss/gen.css';
import {useState,useEffect} from "react";
import axios from "axios";
function Gen(props){


    const movieclick=(id)=>{
        window.location.href =`/moviedetails/${id}`;
    }

const [gmlist, setgmlist] = useState([])
    useEffect(()=>{
        
  
        const page=Math.floor(Math.random() * 10)+1; 
        axios.post(`https://yts.mx/api/v2/list_movies.json?genre=${props.gen}&limit=4&page=${page}`).then((res)=>{
            setgmlist(res.data.data.movies);
            console.log(res.data.data);
          
         
           
        }).catch((err)=>{
            alert(err.message);
        })
        
    
  
  },[props])


return (
    <div className="gen">
    <h3>Similer movies</h3>
  
<ul>
    {gmlist.map((item,index)=>{

        return(
            <li key={index} onClick={()=>{movieclick(item.id)}}>
            <img src={item.medium_cover_image} alt={item.id} title={item.title}></img>
            </li>
        );
    }



    )}
</ul>
</div>
);


}
export default Gen;