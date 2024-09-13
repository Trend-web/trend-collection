'use client';

interface ButtonProps {
    onClick: () => void;
    label: string;
}

export default function Button(props: ButtonProps){
    return <button onClick={props.onClick} className=' bg-darkBiege text-2xl font-bold p-3 text-fonnt'>
        {props.label}
    </button>
}