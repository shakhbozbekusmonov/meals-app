import { useState } from "react";
import { useVisibleMeals } from "../Hooks/useVisibleMeals";
import { MEALS_FILTER, CATEGORY_LIST, LOADER, BUTTON } from "../Components";
import useScrollTop from "../Hooks/useScrollTop";

const Home = () => {
    useScrollTop();
    const [isLoading, setLoading] = useState(true);
    const [visibleMeals, meals, handleSeeMoreClick, handleValue] =
        useVisibleMeals();

    return (
        <div className='container'>
            {isLoading && <LOADER />}
            <div className={`my-3 ${isLoading && "vh-100"}`}>
                <div className='mb-3'>
                    <MEALS_FILTER onSubmit={handleValue} />
                </div>
                <CATEGORY_LIST
                    meals={visibleMeals}
                    isLoading={isLoading}
                    setLoading={setLoading}
                />
                {visibleMeals.length < meals.length && (
                    <div className='d-flex justify-content-center'>
                        <BUTTON
                            text='See More'
                            onClick={handleSeeMoreClick}
                            className='btn btn-outline-primary mx-auto mb-5'
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
