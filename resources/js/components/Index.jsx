import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {router} from './routes/Routes';
import { RouterProvider} from "react-router-dom";
import axios from 'axios'

function App() {
    

       
    return (
        <div>
           <RouterProvider router={router} />
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}
