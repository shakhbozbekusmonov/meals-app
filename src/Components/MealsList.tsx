import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    getMealsByFilterArea,
    getMealsByFilterCategory,
} from "../Services/getData";
import MealsItem from "./MealsItem";
import Button from "./Button";
import useScrollTop from "../Hooks/useScrollTop";
import CategoryFilter from "./CategoryFilter";

export type MealsType = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
};

const MealsCategory = () => {
    useScrollTop();
    const { category } = useParams();
    const [showCategory, setShowCategory] = useState("");
    const [showArea, setShowArea] = useState("");
    const [meals, setMeals] = useState<MealsType[]>([]);
    const [displayedMeals, setDisplayedMeals] = useState<MealsType[]>([]);
    const [mealsToShow, setMealsToShow] = useState<number>(8);

    useEffect(() => {
        if (showCategory) {
            getMealsByFilterCategory(showCategory.toLowerCase()).then((res) =>
                setDisplayedMeals(res.meals)
            );
        }

        if (showArea) {
            getMealsByFilterArea(showArea.toLowerCase()).then((res) =>
                setDisplayedMeals(res.meals)
            );
        }

        getMealsByFilterCategory(category).then((res) => {
            setMeals(res.meals);
            setDisplayedMeals(res.meals.slice(0, mealsToShow));
        });
    }, [category, mealsToShow, showCategory, showArea]);

    const handleSeeMoreClick = () => {
        // Increment the number of meals to display when the "See More" button is clicked
        setMealsToShow(mealsToShow + 8);
        setDisplayedMeals(meals.slice(0, mealsToShow + 8));
    };

    return (
        <div className='container'>
            <CategoryFilter
                onHandleChange={setShowCategory}
                onHandleArea={setShowArea}
            />
            <ul className={`row my-3 ${meals.length === 0 && "vh-100"}`}>
                {displayedMeals.map((item) => (
                    <MealsItem key={item.idMeal} {...item} />
                ))}
            </ul>
            {displayedMeals.length < meals.length && (
                <div className='d-flex justify-content-center'>
                    <Button
                        text='See More'
                        onClick={handleSeeMoreClick}
                        className='btn btn-outline-primary mx-auto mb-5'
                    />
                </div>
            )}
        </div>
    );
};

export default MealsCategory;
