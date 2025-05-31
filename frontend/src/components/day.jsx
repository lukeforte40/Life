export default function Day({ date, children }){
    return(
        <div>
            {date}
            <div>
                {children}
            </div>
        </div>
    )
}