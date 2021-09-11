import React from "react";
import {useState} from "react";
import GetList from "../Components/Getlist";
import './Browsecss/brows.css'
function Browse(){
    const setvalue=()=>{
        setgen(document.getElementById("gens").value);
        setsort(document.getElementById("sort").value);
        setquery(document.getElementById("query").value);
        console.log(document.getElementById("query").value);
    }
    const [query, setquery] = useState([""])
    const [gen, setgen] = useState([]);
   
    const [sort, setsort] = useState([]);
    
    return(
        <div>
            <div className="SelectL">
                <div className="select">
                    <input type="text" placeholder="input query" id="query"></input>
                   
                

               
                <label>Genre:</label>
                <select name="Gen" id="gens">
                <option value="Action">Action</option>
                <option value="Animation">Animation</option>
                <option value="Adventure">Adventure</option>
                <option value="Biography">Biography</option>
                <option value="Comedy">Comedy</option>
                <option value="Crime">Crime</option>
                <option value="Drama">Drama</option>
                <option value="Documentary">Documentary</option>
                <option value="Family">Family</option>
                <option value="Fantacy">Fantacy</option>
                <option value="Film-Noir">Film-Noir</option>
                <option value="Game-Show">Game-Show</option>
                <option value="History">History</option>
                <option value="Horror">Horror</option>
                <option value="Music">Music</option>
                <option value="Musical">Musical</option>
                <option value="Mystery">Mystery</option>
                <option value="News">News</option>
                <option value="Romance">Romance</option>
                <option value="Sifi">Sifi</option>
                <option value="Sport">Sport</option>
                <option value="Thriller">Thriller</option>
                <option value="War">War</option>
                <option value="Western">Western</option>
                
                
                
                </select >
                <label>Sort By:</label>
                <select name="Sort" id="sort">
                <option value="rating">rating</option>
                <option value="year">year</option>
                <option value="seeds">seeds</option>
                <option value="download_count">download count</option>
                </select>
                <button onClick={setvalue}>Search</button>
                </div>
            </div>
        <GetList gen={gen} limit="24" sort={sort} query={query}/>
        </div>
    );
}
export default Browse;