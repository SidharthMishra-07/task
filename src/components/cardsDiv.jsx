import Cards from "./Cards";
import React from "react";
import "./main.css"

const CardsDiv =({header,data})=>{
    {console.log(data)}
    return(
        <div className="cardsdiv">
            <h2>{header}</h2>
            <div className="cardsdivdiv">
            {
                data.map((m, index)=>(
                    <Cards key= {index} name={m.name} time={m.last_updated_at} location={m.location} gender={m.gender}/>
                ))
                
            }
            </div>
        </div>
    )
}

export default CardsDiv