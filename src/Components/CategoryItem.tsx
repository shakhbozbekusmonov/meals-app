import { useNavigate } from "react-router-dom";
import Button from "./Button";

const CategoryItem = ({
    strCategory,
    strCategoryThumb,
}: {
    strCategory: string;
    strCategoryThumb: string;
}) => {
    const navigate = useNavigate();
    return (
        <li className='col-12 col-md-6 col-lg-3 col-xl-3 mb-3'>
            <div className='card shadow-lg text-center'>
                <img
                    className='card-top-img mx-auto'
                    src={strCategoryThumb}
                    width='300'
                    height='300'
                    alt={strCategory}
                />
                <div className='card-body'>
                    <h3 className='card-title'>{strCategory}</h3>
                </div>
                <div className='card-footer'>
                    <Button
                        className='btn btn-outline-primary rounded-0 w-100'
                        text={`Watch ${strCategory}s`}
                        onClick={() =>
                            navigate(`/meals/${strCategory.toLowerCase()}`)
                        }
                    />
                </div>
            </div>
        </li>
    );
};

export default CategoryItem;
