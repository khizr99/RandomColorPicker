import { useState } from "react";
import "./ColorBox.css"

function colorPicker(arr){
    const idx = Math.floor(Math.random()*arr.length);
    return arr[idx];
}
export default function ColorBox({colors}){
    const [color, setColor] = useState(colorPicker(colors));
    const changeColor = () => {
       const randomColor =  colorPicker(colors);
        setColor(randomColor);
    };
    return (
        <div className="ColorBox" onClick={changeColor} style={{backgroundColor:color}}></div>
    );
}