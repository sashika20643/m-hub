import {useState,useEffect} from "react";

import axios from "axios";

function Mlist(){

    const [movies,setmovies]=useState([]);
    useEffect(()=>{
        function getlist(){
            const limit=20;
            const page=1;
            const sort_by="year"
          axios.post(`https://yts.mx/api/v2/list_movies.json?page=${page}&limit=${limit}&sort_by=${sort_by}`).then((res)=>{
              setmovies(res.data.data.movies);
          }).catch((err)=>{
              alert(err.message);
          })
          
        }
        getlist();

    },[])
    return movies;
    
     }

     
export default Mlist;
