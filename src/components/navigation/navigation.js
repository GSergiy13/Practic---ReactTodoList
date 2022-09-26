import './navigation.css';

const Navigation = () => {
    return (
        <nav className="menu">
            <div className="menu__item">
                <a href="jo" className="menu__item__link">
                    Home
                </a>

            </div>
                <div className="menu__item">
                <a href="jkln" className="menu__item__link">
                    Page 1
                </a>
                </div>
                
                <div className="menu__item">
                <a href="k;m" className="menu__item__link">
                    Page 2
                </a>
                </div>
        </nav>
    );
};

export default Navigation;