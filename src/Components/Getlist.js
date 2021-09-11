import React from "react";

import {useState,useEffect} from "react";
import axios from "axios";
import './nomovie.css';
function GetList(props){

    const [page, setpage] = useState([1]);
    const [tdata, settdata] = useState([]);
    const movieclick=(id)=>{
        window.location.href =`/moviedetails/${id}`;
    }

const [Mlist, setMlist] = useState([])
    useEffect(()=>{
        
  
       console.log(props.query);
        axios.post(`https://yts.mx/api/v2/list_movies.json?genre=${props.gen}&limit=${props.limit}&sort_by=${props.sort}&page=${page}&query_term=${props.query}`).then((res)=>{
        
        setMlist(res.data.data.movies);
            settdata(res.data.data);
         
          
         
           
        }).catch((err)=>{
            alert("norelated movie");
        })
        
    
  
  },[props,page])

if(Mlist){
    return(

        <div className="TopR">
            <ul>
    {Mlist.map((item,index)=>{
          
          return(
            <li key={index} onClick={()=>{movieclick(item.id)}} value={item.id}  >
                <img src={item.medium_cover_image} alt={item.year} title={item.title_english}></img>
                <h3>{item.title_english}
                <br/>
                <br/>
                
                <span>{item.rating}</span>
                </h3>
                
            
            </li>
          );
      })}
      </ul>
      <div className="pagination">
      <li id="back"  onClick={()=>{
          if(page/1>1)setpage((page/1)-1)}}>&laquo;</li>
    
      <li className="active"><span>{page}</span>/{Math.floor(tdata.movie_count/24)}</li>
     
      <li id="next" onClick={()=>{
          if(page/1<tdata.movie_count/24)setpage((page/1)+1)}}>&raquo;</li>
    </div>
        </div>
    );
    
}
else{
    return(
<h3 className="NoMovie">No movie found</h3>
    );
}

}
export default GetList;