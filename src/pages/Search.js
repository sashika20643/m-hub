import React from "react";
import GetList from "../Components/Getlist";
import {useParams} from "react-router-dom";
import TopCont from "../Components/topMcont/Topcont";

function Search(){
    const {query}=useParams();
 
  
    console.log(query);

    return(
        <div>
        <GetList gen="all" limit="20" sort="date_added" query={String(query)}/>
        <TopCont/>
        </div>
    );
}
export default Search;