import React from 'react';
import {Home} from './api/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
export const Routing=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}