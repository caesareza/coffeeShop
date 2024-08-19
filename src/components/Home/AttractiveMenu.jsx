import CardMenu from './../Shared/CardMenu';
import attractiveMenu from '../../data/attractive-menu';
import './AttractiveMenu.css';

function AttractiveMenu() {
    return (
        <section className="home-menu">
            <div className="home-menu-title">
                <h2>Our Attractive</h2>
                <h2>Menu</h2>
            </div>
            <div className="home-menu-section">
                {attractiveMenu.map((item, index) =>{
                    return  (
                        <CardMenu key={index} {...item} />
                    )
                })}
            </div>
            <div className="home-menu-button">
                <a href="/"><span id="menuButton">Explore more menu</span></a>
            </div>
        </section>
    )
}

export default AttractiveMenu;