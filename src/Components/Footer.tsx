const Footer = () => {
    return (
        <footer className='site-footer bg-dark text-white py-4'>
            <div className='container'>
                <div className='site-footer d-flex justify-content-center'>
                    <span>
                        Copyright &copy; {new Date().getFullYear()} Miracle
                        Programmer
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
