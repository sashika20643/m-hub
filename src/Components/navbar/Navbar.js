import React from "react";
import './Navbar.css'
import { BiMenu } from "react-icons/bi" ;

function Navbar(){
var count=1;
  const search=()=>{
      var name=document.getElementById("stxt").value;
      window.location.href =`/search/${name}`;
  }
    const showmenue=()=>{
        if(count===1){
            document.getElementById("N-item").style.display="block";
            document.getElementById("search").style.display="block";
            count=0

        }
        else{
            count=1;
            document.getElementById("N-item").style.display="none";
            document.getElementById("search").style.display="none";
        }
    }


    return (
<nav>
    <div className='logo'>
      <div>  M-<span>HUB </span></div>
    
    <button className="Mico" onClick={showmenue}><BiMenu size ={30} /></button>
    </div>
    <div className="N-items" id="N-item">
        <ul>
            <a href="/"><li>Home</li></a>
            <a href="/trendings"> <li>Trending</li></a>
            <a href="/toprate"><li>Top Rated</li></a>
            <a href="/browse"><li>Browse Movie</li></a>

        </ul>
   
    <div className="search" id='search'>
        <input type="text" placeholder="Search" id="stxt"></input><button onClick={search}>search</button>
    </div>
    </div>
</nav>

    );
}
export default Navbar;