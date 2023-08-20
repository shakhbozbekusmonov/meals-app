import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Button from "./Button";
import { useEffect } from "react";

const CategoryItem = ({
    strCategory,
    strCategoryThumb,
    isLoading,
    setLoading,
}: {
    strCategory: string;
    strCategoryThumb: string;
    isLoading: boolean;
    setLoading: (isLoading: boolean) => void;
}) => {
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <li className='col-12 col-md-6 col-lg-3 col-xl-3 mb-3'>
            <div className='card shadow-lg text-center'>
                {/* Use Skeleton for the image */}
                {isLoading ? (
                    <Skeleton className='w-100' height={300} />
                ) : (
                    <img
                        className='card-top-img mx-auto'
                        src={strCategoryThumb}
                        width='300'
                        height='300'
                        alt={strCategory}
                    />
                )}
                <div className='card-body'>
                    {/* Use Skeleton for the title */}
                    {isLoading ? (
                        <Skeleton width={100} height={20} />
                    ) : (
                        <h3 className='card-title'>{strCategory}</h3>
                    )}
                </div>
                <div className='card-footer'>
                    {/* Use Skeleton for the title */}
                    {isLoading ? (
                        <Skeleton className='w-100' height={30} />
                    ) : (
                        <Button
                            className='btn btn-outline-primary rounded-0 w-100'
                            text={`Watch ${strCategory}s`}
                            onClick={() =>
                                navigate(`/meals/${strCategory.toLowerCase()}`)
                            }
                        />
                    )}
                </div>
            </div>
        </li>
    );
};

export default CategoryItem;
