import React from "react";
import {useState,useEffect} from "react";
import axios from "axios";
import './toprate.css';
function TopR(props){
    const [page, setpage] = useState([1]);
    const [tdata, settdata] = useState([]);
    const movieclick=(id)=>{
        window.location.href =`/moviedetails/${id}`;
    }
    const [  topr, settopr] = useState([])
    useEffect(()=>{
        
   
        axios.post(`https://yts.mx/api/v2/list_movies.json?limit=${props.limit}&page=${page}&sort_by=rating`).then((res)=>{
            settopr(res.data.data.movies);
            settdata(res.data.data);
         
          
         
           
        }).catch((err)=>{
            alert(err.message);
        })
        
    
  
  },[page,props])
  return(
      <div className="TopR">
          <ul>
{topr.map((item,index)=>{
        
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
export default TopR;