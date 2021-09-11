import React from "react";
import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import './Mdetcss/Mdet.css';

import axios from "axios";
import Gen from "../Components/byGen/Gen";

function Mdetails(){
    const [mdet,setmdet]=useState([]);
    const [gens, setgens] = useState([])
    const{ id}=useParams();
    
    
    useEffect(()=>{
        
    
       
          axios.post(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`).then((res)=>{
              setmdet(res.data.data.movie);
              setgens(res.data.data.movie.genres[0]);
              var i=0;
              while(res.data.data.movie.torrents[i]){
                document.getElementById("qulity").innerHTML+=`<th>${res.data.data.movie.torrents[i].quality}</th>`
                document.getElementById("type").innerHTML+=`<td>${res.data.data.movie.torrents[i].type}</td>`
                document.getElementById("size").innerHTML+=`<td>${res.data.data.movie.torrents[i].size}</td>`
                document.getElementById("Download").innerHTML+=`<td><a href=${res.data.data.movie.torrents[i].url}> <button>Download </button></a></td>`

                i++;
            }
              console.log(res.data);
          }).catch((err)=>{
              alert(err.message);
          })
          
      
    
    },[id])
   
 
    return(
     <div className="heroSection">
         <div className="hleft">
             <img src={mdet.large_cover_image} alt={mdet.title}></img>
             <br></br>
            
         </div>
         <div className="hright">
         <h2>{mdet.title} </h2>
         <div className="mdetail">
            
             <h3><span>Genres:</span>{mdet.genres}</h3>
             <h3><span>Year:</span>{mdet.year}</h3>
             <h3><span>Runtime:</span>{mdet.runtime}min</h3>

             </div>
             <p>{mdet.description_full}</p>
             <div id="table">
             <table>
             <tbody>
                 <tr id="qulity">
                   
                 </tr>
                 <tr id="type">
                   
                   </tr>
                   <tr id="size">
                   
                   </tr>
                   <tr id="Download">
                   
                   </tr>

                 </tbody>
                
             </table>
             </div>
         </div>
         <div className="genlist">
<Gen gen={gens}/>

</div>

     </div>
    );
}
export default Mdetails;