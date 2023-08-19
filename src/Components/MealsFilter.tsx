import { useForm } from "../Hooks/useForm";

const initialState = {
    search: "",
};

const MealsFilter = () => {
    const [value, handleChange] = useForm(initialState);
    return (
        <form>
            <div className='d-flex'>
                <input
                    className='form-control me-2'
                    type='search'
                    name='search'
                    onChange={handleChange}
                    placeholder='🥗 Search favourite meals...'
                />
            </div>
        </form>
    );
};

export default MealsFilter;
