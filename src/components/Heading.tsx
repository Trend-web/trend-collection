interface HeadingProp{
    label: string
}


export function Heading({label}: HeadingProp){
    return <div className="text-9xl text-fonnt font-bold">
        {label}
    </div>
}