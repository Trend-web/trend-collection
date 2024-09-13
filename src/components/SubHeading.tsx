interface subHeadingProp{
    label: string
}




export function SubHeading({label}:subHeadingProp){
    return <div className="text-5xl ">
        {label}
    </div>
} 