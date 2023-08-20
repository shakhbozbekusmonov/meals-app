import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMealsByID } from "../Services/getData";
import Button from "../Components/Button";
import useScrollTop from "../Hooks/useScrollTop";

// type MealType = {
//     idMeal: string;
//     strMeal: string;
//     strCategory: string;
//     strMealThumb: string;
//     strArea: string;
//     strTags: string;
//     strYoutube: string;
//     strSource: string;
// };

const Recipe = () => {
    useScrollTop();
    const { id } = useParams();
    const navigate = useNavigate();
    const [meal, setMeal] = useState<any[]>([]);
    const [showRecipe, setShowRecipe] = useState(false);

    useEffect(() => {
        getMealsByID(id).then((res) => setMeal(res.meals));
    }, []);

    return (
        <div className='container'>
            <div className={`row ${meal.length === 0 && "vh-100"}`}>
                <div className='col-12'>
                    {meal.length > 0 &&
                        meal.map((item) => (
                            <div className='row my-5' key={item.idMeal}>
                                <div className='col-12 col-md-6 col-lg-6 col-xl-6 mb-3 mb-md-0 h-100'>
                                    <div className='card h-100 shadow-lg'>
                                        <img
                                            className='rounded w-100'
                                            src={item.strMealThumb}
                                            alt={item.strCategory}
                                        />
                                    </div>
                                </div>
                                <div className='col-12 col-md-6 col-lg-6 col-xl-6 h-100'>
                                    <div
                                        className='card border-0 shadow-lg'
                                        style={{
                                            paddingTop: "13px",
                                            paddingBottom: "13px",
                                        }}
                                    >
                                        <div className='card-body'>
                                            <h1>{item.strMeal}</h1>
                                            <p className='mb-2'>
                                                <b>Category:</b>{" "}
                                                {item.strCategory}
                                            </p>
                                            <p className='mb-2'>
                                                <b>Area:</b> {item.strArea}
                                            </p>

                                            {item.strTags && (
                                                <div className='mb-4'>
                                                    <b>Tags:</b>{" "}
                                                    {item.strTags
                                                        .split(",")
                                                        .map((tag: string) => (
                                                            <div
                                                                className='badge bg-primary me-2'
                                                                key={tag}
                                                            >
                                                                {tag}
                                                            </div>
                                                        ))}
                                                </div>
                                            )}

                                            <iframe
                                                className='rounded w-100 mb-3'
                                                height='300'
                                                src={`https://www.youtube.com/embed/${item.strYoutube.slice(
                                                    -11
                                                )}`}
                                                title={item.strMeal}
                                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                            ></iframe>

                                            <Button
                                                text='Back'
                                                className='btn btn-outline-primary me-2'
                                                onClick={() => navigate(-1)}
                                            />
                                            <Button
                                                text='Show Recipe'
                                                className='btn btn-outline-primary'
                                                onClick={() =>
                                                    setShowRecipe(!showRecipe)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                {showRecipe && (
                                    <div className='col-12 my-3'>
                                        <table className='table table-hover table-striped table-bordered'>
                                            <thead>
                                                <tr>
                                                    <th>Ingredient</th>
                                                    <th>Measure</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Object.keys(item).map(
                                                    (key) => {
                                                        if (
                                                            key.includes(
                                                                "Ingredient"
                                                            ) &&
                                                            item[key]
                                                        ) {
                                                            return (
                                                                <tr key={key}>
                                                                    <td>
                                                                        {
                                                                            item[
                                                                                key
                                                                            ]
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            item[
                                                                                `strMeasure${key.slice(
                                                                                    13
                                                                                )}`
                                                                            ]
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                    }
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Recipe;
