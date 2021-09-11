import React from "react";
import Mlist from "../movielist";
import './topcont.css';

function TopCont(){
    var Data=Mlist();
    console.log(Data);
    
    const movieclick=(id)=>{
        window.location.href =`/moviedetails/${id}`;
    }

    return (
        <ul className="movielist">
        {Data.map((item,index)=>{
        
              return(
                <li key={index} onClick={()=>{movieclick(item.id)}} value={item.id}  >
                    <img src={item.medium_cover_image} alt={item.year} title={item.title_english}></img>
                    
                
                </li>
              );
          })}
          
                  </ul>
    );
}
export default TopCont;