import Day from "../components/day";
import Nav from "../components/nav";
import Task from "../components/task";

export default function ToDo(){
    return(
        <div>
            <Nav/>
            <Day date={"01-01-25"}>
                <Task name={"Test"} notes={"test"}/>
            </Day>
        </div>
    )
}