import React, { useState } from 'react';
import "../CSS/QrCode.css";

export const QrCode = () => {
  const [img, setImg] = useState('');
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState("");
  const [size, setSize] = useState("");

  async function generateQr() {
  //setImg("http://www.pngall.com/wp-content/uploads/2/QR-Code-PNG-Images.png")
    setLoading(true);
    try {
      const urlAPI = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qrData)}`;
      setImg(urlAPI);
    } catch(error) {
      console.log("Error fetching qr code in API: ",error);
    } finally {
      setLoading(false);
    }
  }

  const downloadQr = () => {
    fetch(img)
    .then((response)=>response.blob())
    .then((blob)=>{
        const link = document.createElement("a")
        link.href = URL.createObjectURL(blob)
        link.download = "qr-code.png"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    })
  }

  const handleQRChange = (e) => {
    setQrData(e.target.value);
  }

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  }

  return (
    <>
      <div className='app-container'>
        <h1>QR CODE GENERATOR</h1>
        {loading && <p>Please wait...</p>}
        {img && <img src={img} className='qr-code-image'/>}

        <div>
          <label htmlFor='dataInput' className='input-label'>
            Data for QR code:
          </label>
          <input type='text' id='dataInput' value={qrData} onChange={handleQRChange} placeholder='Enter data for QR code'/>

          <label htmlFor='sizeInput' className='input-label'>
            Image size (e.g., 150):
          </label>
          <input type='text' id='sizeInput' value={size} onChange={handleSizeChange} placeholder='Enter image size'/>

          <button className='gen-but' onClick={generateQr} disabled={loading}>Generate QR Code</button>
          <button className='down-but' onClick={downloadQr}>Download QR Code</button>
        </div>
        <p className='footer'>
          Designed by <a href='https://github.com/Sanjay-250502' target='blank'>SANJAY</a>
        </p>
      </div>
    </>
  );
}
