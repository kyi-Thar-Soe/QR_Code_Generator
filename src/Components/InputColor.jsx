import {useContext, useEffect, useState} from 'react'
import {ChromePicker} from 'react-color'
import { InputContext } from '../Context/InputContext';

export default function InputColor() {
    const [color,setColor] = useState("#054080");
    const [displayColor,setDisplayColor] = useState(false);
    const {inputValue,setInputValue} = useContext(InputContext);

    const handleChange =(color) => {
        setColor(color.hex)
    };
    useEffect(()=> {
        setInputValue({...inputValue, color: color})
    },[color]);

    return (
        <div>
            <label className="text-md font-semibold mb-2">Color</label>
            <div className='flex items-center gap-2'>
                <div className="w-10 h-8 rounded-md border-4 cursor-pointer" style={{background: color}} onClick={()=> setDisplayColor(!displayColor)}>
                </div>
                <span>{color}</span>
            </div>
        {displayColor && 
        <div className='absolute'>
             <ChromePicker color={color} onChange={handleChange}/>
        </div>}
        </div>
    )
}