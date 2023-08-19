import { useEffect, useState } from "react";
import MealsFilter from "../Components/MealsFilter";
import { getMealsAllByCategories } from "../Services/getData";
import Loader from "../Components/Loader";
import CategoryList from "../Components/CategoryList";

const Home = () => {
    const [isLoading, setLoading] = useState(false);
    const [filteredMeals, setFilteredMeals] = useState([]);
    const [meals, setMeals] = useState([]);

    const getMeals = async () => {
        const meals = await getMealsAllByCategories();
        setMeals(meals.categories);
    };

    useEffect(() => {
        setLoading(true);
        getMeals();
        setLoading(false);
    }, []);


    const visibleMeals = 
    return (
        <div className='container'>
            <div className='my-3'>
                <MealsFilter />
                {isLoading ? <Loader /> : <CategoryList />}
            </div>
        </div>
    );
};

export default Home;
