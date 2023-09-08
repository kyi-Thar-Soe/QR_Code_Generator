import { useContext } from "react"
import { InputContext } from "../Context/InputContext";


export default function InputField() {
    const {inputValue,setInputValue} = useContext(InputContext);
    const handleOnChange = (event) => {
        setInputValue({...inputValue, url: event.target.value})
    }
    return (
        <div>
            <label className="font-semibold text-md mb-2">Your URL</label>
            <input type="url" 
            placeholder="https://example.com" 
            className=" w-full border-2 py-1 px-3 text-gray-700 rounded-md"
            value={inputValue.url}
            onChange={handleOnChange}
           />
        </div>
    )
}