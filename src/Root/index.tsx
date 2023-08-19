import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HOME, MEALS_CATEGORY, MEALS_AREA } from "../Pages";
import { HEADER, FOOTER } from "../Components";

const Root = () => {
    return (
        <BrowserRouter>
            <HEADER />
            <main>
                <Routes>
                    <Route path='/home' element={<HOME />} />
                    <Route
                        path='/meals/category'
                        element={<MEALS_CATEGORY />}
                    />
                    <Route path='/meals/area' element={<MEALS_AREA />} />
                    <Route path='/' element={<Navigate to='/home' />} />
                </Routes>
            </main>
            <FOOTER />
        </BrowserRouter>
    );
};

export default Root;
