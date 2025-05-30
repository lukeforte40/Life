import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ToDo from './pages/ToDo';

export default function Routing(){
    return(
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/Todo" element={<ToDo/>}/>
        </Routes>
    )
}