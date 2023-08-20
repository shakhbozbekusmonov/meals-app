import { useState } from "react";
import { useVisibleMeals } from "../Hooks/useVisibleMeals";
import { MEALS_FILTER, CATEGORY_LIST, LOADER } from "../Components";

const Home = () => {
    const [isLoading, setLoading] = useState(true);
    const [visibleMeals, handleValue] = useVisibleMeals();

    return (
        <div className='container'>
            <div className={`my-3 ${isLoading && "vh-100"}`}>
                <div className='mb-3'>
                    <MEALS_FILTER onSubmit={handleValue} />
                </div>

                <CATEGORY_LIST
                    meals={visibleMeals}
                    isLoading={isLoading}
                    setLoading={setLoading}
                />
            </div>
        </div>
    );
};

export default Home;
