import Task from "../components/task";

export default function Day({ date, day }){
    const today = new Date(date);

    return(
        <div>
            <p>{day}, {today.toLocaleDateString()}</p>
            <div>
                <Task name={"Test"} notes={"test"}/>
                <Task name={"Test2"} notes={"test2"}/>
            </div>
        </div>
    )
}