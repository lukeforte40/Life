import { useState } from "react";
import Day from "./day";

export default function Week({ startDate }){
    const today = new Date(startDate);
    const dayOfWeek = today.getDay();
    const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    const sunday = new Date(today.setDate(diff));
    const monday = new Date(today.setDate(today.getDate() + 1));
    const tuesday = new Date(today.setDate(today.getDate() + 1));
    const wednesday = new Date(today.setDate(today.getDate() + 1));
    const thursday = new Date(today.setDate(today.getDate() + 1));
    const friday = new Date(today.setDate(today.getDate() + 1));
    const saturday = new Date(today.setDate(today.getDate() + 1));

    return(
        <div>
            <Day date={sunday} day={"Sunday"}/>
            <Day date={monday} day={'Monday'}/>
            <Day date={tuesday} day={'Tuesday'}/>
            <Day date={wednesday} day={'Wednesday'}/>
            <Day date={thursday} day={'Thursday'}/>
            <Day date={friday} day={'Friday'}/>
            <Day date={saturday} day={'Saturday'}/>
        </div>
    )
}