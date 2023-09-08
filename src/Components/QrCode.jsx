import { useContext } from 'react';
import { InputContext } from '../Context/InputContext';
import { saveAs } from 'file-saver';
export default function QrCode() {
    const {response,loading,error} = useContext(InputContext);
    console.log(response);
    if(loading){
       return (
        <div className='animate-pluse flex flex-column items-center justify-center px-10 gap-3'>
            <div className='h-32 w-full bg-blue-300'></div>
            <div className='h-8 w-full bg-blue-300'></div>
            <div></div>
        </div>
       )
    }
    if(error){
        return <div className='text-red-400 flex justify-center items-center'>Sorry, Something went wrong</div>
    }
    const handleDownload = () => {
        saveAs(response, 'qrcode.png')
    };
    return (
        <div className="flex flex-col items-center justify-center">
            {response ? 
            <div>
                <img src={response} alt="qrcode" className='w-48'/>
                <button className='text-white bg-blue-500 mt-2 w-full px-4 py-1 rounded-md hover:bg-blue-700' 
                onClick={handleDownload}>Download</button>
            </div> :
            <div className='text-gray-500 mb-3'>
                Your QR Code will showing here...
            </div> 
            }
        </div>
    )
}