import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HOME, RECIPE } from "../Pages";
import { HEADER, FOOTER, MEALS_LIST } from "../Components";

const Root = () => {
    return (
        <BrowserRouter>
            <HEADER />
            <main>
                <Routes>
                    <Route path='/home' element={<HOME />} />
                    <Route path='/meals/:category' element={<MEALS_LIST />} />
                    <Route path='/meals/recipe/:id' element={<RECIPE />} />
                    <Route path='/' element={<Navigate to='/home' />} />
                </Routes>
            </main>
            <FOOTER />
        </BrowserRouter>
    );
};

export default Root;
