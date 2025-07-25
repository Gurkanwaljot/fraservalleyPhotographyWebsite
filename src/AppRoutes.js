import React from "react";
import PopularPackages from "./components/mainContent/popularPackages"
import {  Routes, Route} from 'react-router-dom';

function AppRoutes(){
    return(
        <Routes>
            <Route path="/pricing" element={<PopularPackages />}></Route>
        </Routes>
    )
}

export default AppRoutes;