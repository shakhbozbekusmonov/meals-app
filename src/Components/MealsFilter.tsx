import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
export interface MealsFilterProps {
    onSubmit: SubmitHandler<FieldValues>;
}

const MealsFilter = ({ onSubmit }: MealsFilterProps) => {
    const { register, handleSubmit } = useForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='d-flex'>
                <input
                    {...register("search")}
                    className='form-control me-2'
                    type='search'
                    name='search'
                    placeholder='🥗 Search favourite meals...'
                />
            </div>
        </form>
    );
};

export default MealsFilter;
