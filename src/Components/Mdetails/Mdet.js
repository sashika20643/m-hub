import {useState,useEffect} from "react";

import axios from "axios";

function Mdet(ids){
    const id=ids;
    const [mdet,setmdet]=useState([]);
useEffect((id)=>{
    function getlist(){
       
      axios.post(`https://yts.mx/api/v2/movie_details.json?id=${id}`).then((res)=>{
          setmdet(res.data.data.movies);
      }).catch((err)=>{
          alert(err.message);
      })
      
    }
    getlist();

},[])
return mdet;

 }
 export default Mdet;