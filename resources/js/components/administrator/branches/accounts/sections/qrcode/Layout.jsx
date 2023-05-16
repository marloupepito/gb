import React, { useState, useEffect } from 'react';
import { GetEveryAccount } from '../../../../../api/Account';
import { useParams } from 'react-router-dom';
function QrcodeLayout() {
    const [password,setPassword] = useState('')
    let { accountid } = useParams();
    useEffect(() => {
        GetEveryAccount(accountid)
        .then(res=>{
            setPassword(res.data.status.password)
        })
    }, []);
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