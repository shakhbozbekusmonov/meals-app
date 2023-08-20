import { useVisibleMeals } from "../Hooks/useVisibleMeals";
import { MEALS_FILTER, CATEGORY_LIST, LOADER } from "../Components";

const Home = () => {
    const [isLoading, visibleMeals, handleValue] = useVisibleMeals();

    return (
        <div className='container'>
            <div className='my-3'>
                <div className='mb-3'>
                    <MEALS_FILTER onSubmit={handleValue} />
                </div>
                {isLoading ? (
                    <LOADER />
                ) : (
                    <CATEGORY_LIST meals={visibleMeals} />
                )}
            </div>
        </div>
    );
};

export default Home;
