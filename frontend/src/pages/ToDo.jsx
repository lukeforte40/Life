import { useState } from "react";
import Nav from "../components/nav";
import Week from "../components/week";

export default function ToDo(){
    const [startDate, setStartDate] =useState(Date.now())

    return(
        <div>
            <Nav/>
            <Week startDate={startDate}/>
        </div>
    )
}