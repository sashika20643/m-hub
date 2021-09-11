import React from "react";
import HomB from "../Components/homrB/Homeb";
import TopCont from "../Components/topMcont/Topcont";
import "./Home.css";
function Home(){
    return (
        <div>
            <TopCont/>
            <div className="hb">
                <div>
            <h2>Animation Movies </h2>
            <HomB gen="animation" limit="5" sort="year"/>
            </div><div>
            <h2>Action Movies</h2>
            <HomB gen="action" limit="5" sort="year"/>
            </div>
            </div>

        </div>
    )
}
export default Home;