import React, { useState, useEffect } from 'react';

function QrcodeLayout() {
    const password = JSON.parse(localStorage.getItem("user")).password;
    return ( 
        <>
        {
            localStorage.getItem("user").username
        }
        <img src={"http://api.qrserver.com/v1/create-qr-code/?data=" +password} className="mb-5" alt="qrcode" />
        </>
     );
}

export default QrcodeLayout;