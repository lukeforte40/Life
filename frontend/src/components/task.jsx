import { useState } from "react";

export default function Task({ name, notes }){
    const [detailOpen, setDetailOpen] = useState(false)
    return(
        <div>
            <p>{name}</p>    
            <button>Done</button>
            <button onClick={() => setDetailOpen(!detailOpen)}>Details</button>
            <button>Edit</button>
            <button>Delete</button>
            {detailOpen && <p>{notes}</p>}
        </div>
    )
}