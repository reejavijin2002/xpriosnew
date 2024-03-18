import React, { useState } from "react";
import QRCode from "qrcode.react";
import Qrcode from "../images/qrcode.jpg";

const QRCodePage = () => {
  const [text, setText] = useState("");
  const [qrCodeValue, setQRCodeValue] = useState("");

  const generateQRCode = () => {
    setQRCodeValue(text);
  };

  return (
    <div className="md:flex">
      <div className="bg-white min-h-auto md:p-5  md:h-screen lg:h-screen xl:h-screen ">
        <div className="bg-white p-8 rounded font-[poppins] h-screen  w-full md:w-full lg:w-full xl:w-full">
          <h2 className="xs:text-2xl md:text-4xl font-extrabold font-[poppins] mb-4">
            Generate QR Code For Your Survey
          </h2>

          <label className="block mb-2" htmlFor="qrCodeText">
            Text to Encode:
          </label>
          <input
            type="text"
            id="qrCodeText"
            className="w-full px-3 py-2 border rounded mb-4"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            className="bg-fuchsia-700 hover:bg-white hover:outline w-full hover:text-fuchsia-700 text-white py-2 px-4 rounded "
            onClick={generateQRCode}
          >
            Generate QR Code 
          </button>

          {qrCodeValue && (
            <div className="mt-4">
              <QRCode value={qrCodeValue} />
            </div>
          )}
        </div>
      </div>
      <div className="md:ml-10 md:mt-5 xs:mt-0 mb-20">
        <img src={Qrcode} alt="" height="500px" width="500px" />
      </div>
    </div>
  );
};

export default QRCodePage;
