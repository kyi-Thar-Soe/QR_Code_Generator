import { useContext } from "react";
import InputColor from "./InputColor";
import InputField from "./InputField";
import { InputContext } from "../Context/InputContext";

export default function InputForm() {
    const {getQrCode} = useContext(InputContext);
   
    return (
        <div className="col-span-2 grid p-6 gap-4">
           <InputField/>
           <InputColor/>
           <button className="bg-blue-400 max-w-xs ml-auto px-4 py-2 rounded-md text-white
           hover:bg-blue-500 disabled:bg-gray-300" onClick={getQrCode}>Generate QR Code</button>
        </div>
    )
}