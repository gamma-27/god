import React, { useState }  from "react";
import { question } from "./questions";
import Myaccordian from './MyAccordian'
export default function Accordian(){
    const [data, setData] = useState(question);
    return(
        <>
        <section className="main-div">
             
        {
            data.map((curElem)=>{
                const {id}=curElem;
                return <Myaccordian key={id} {...curElem} />
            })
        }
        </section>
        </>

    )
}