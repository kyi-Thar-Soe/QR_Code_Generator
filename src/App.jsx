import "bootstrap/dist/js/bootstrap.bundle.min"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import InputForm from "./Components/InputForm"
import QrCode from "./Components/QrCode"
import { useState } from "react"
import { InputContext } from "./Context/InputContext"
import axios from 'axios'

function App() {
  const [inputValue,setInputValue] = useState({
    url : '',
    color : '',
  });
  const [response,setResponse] = useState('');
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);
//qrtiger.stoplight.com
//qrtiger.com--api key
  const config = {
    headers: { Authorization: 'Bearer 4629cf30-4d58-11ee-82c6-4b656d536951'}
  }
  const bodyParameters= {
    "colorDark": inputValue.color,
    "qrCategory": "url",
    "text": inputValue.url,
  };
  const getQrCode = async () => {
    try{
      setLoading(true);
      const res = await axios.post(
        'https://qrtiger.com/api/qr/static',
        bodyParameters,
        config,
      );
      setResponse(res.data.url);
    }catch(err){
      setError(err)
    }finally{
      setLoading(false);
    }
  };
  return (
    <div className="bg-gray-100 h-screen pt-36 px-2">
    <div className="container mx-auto max-w-4xl rounded-md shadow" style={{backgroundColor: "#ffc848"}}>
      <div className="md:grid md:grid-cols-3">
      <InputContext.Provider value={{inputValue,setInputValue,response,error,loading,getQrCode}}>
        <InputForm/>
        <QrCode/>
      </InputContext.Provider>
    </div>
    </div>
  </div>
  )
}

export default App
