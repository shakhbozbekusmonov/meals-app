

const MealsFilter = () => {
    return (
        <form>
            <div className='d-flex'>
                <input
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
