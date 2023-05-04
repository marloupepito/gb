import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoutes";
import { ChakraProvider } from "@chakra-ui/react";
function AppIndex() {
    return (
        <ChakraProvider >
           <RouterProvider router={router} />
        </ChakraProvider>
    );
}

export default AppIndex;

if (document.getElementById("app")) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));

    Index.render(
        <React.StrictMode>
            <AppIndex />
        </React.StrictMode>
    );
}
