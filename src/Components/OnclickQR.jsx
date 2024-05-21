import React from 'react'
import "../CSS/QrCode.css"
export const OnclickQR = () => {
    const generateQr = () => {
        alert("Hi")
    }
    const downloadQr = (name) => {
       alert("Mouse Welcome"+" "+name)
    }
  return (
    <>
    <div className='app-container'>
        <h1>QR CODE GENERATOR</h1>
        <img src='http://www.pngall.com/wp-content/uploads/2/QR-Code-PNG-Images.png' 
        className='qr-code-image'
        onMouseEnter={()=>downloadQr("Sanjay")}/>
        <div>
       <label htmlFor='dataInput' className='input-label'>
        Data for QR code:
       </label>
       <input type='text' id='dataInput' placeholder='Enter data for QR code'/>
       <label htmlFor='sizeInput' className='input-label'>
        Image size (e.g., 150):
       </label>
       <input type='text' id='sizeInput' placeholder='Enter image size'/>
       {/* <button className='gen-but' onClick={()=>alert("Hi")}>Generate QR Code</button> */}
       <button className='gen-but' onClick={generateQr}>Generate QR Code</button>

       <button className='down-but' onClick={()=>downloadQr("Sanjay")}>Download QR Code</button>
       </div>
       <p className='footer'>
        Designed by <a href='https://github.com/Sanjay-250502' target='blank'>SANJAY</a>
       </p>
    </div>
    </>
  )
}
