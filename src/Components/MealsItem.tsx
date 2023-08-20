import { Link } from "react-router-dom";

const MealsItem = ({
    idMeal,
    strMeal,
    strMealThumb,
}: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}) => {
    return (
        <li className='col-12 col-md-6 col-lg-3 col-xl-3 mb-3'>
            <div className='card h-100'>
                <img
                    className='card-img-top mx-auto'
                    src={strMealThumb}
                    width='300'
                    height='300'
                    alt={strMeal}
                />
                <div className='card-body'>
                    <Link to={`/meals/recipe/${idMeal}`}>
                        <h3 className='card-title h5'>{strMeal}</h3>
                    </Link>
                </div>
            </div>
        </li>
    );
};

export default MealsItem;
