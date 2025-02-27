import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

// components
import TennisBall from './images/TennisBall';

const Categories = () => {

    const navigate = useNavigate();
    const [isHoveredMen, setIsHoveredMen] = useState(false);
    const [isHoveredWomen, setIsHoveredWomen] = useState(false);

    const handleFigureClick = (route) => {
        navigate(route);
    };

    return (
        <article className='categories'>
            <div className='categories__wrapper'>
                <h4 className='sr-only'>Categories</h4>
                <div className='categories__content'>
                    <section className='categories__category--men'
                        onMouseEnter={() => setIsHoveredMen(true)}
                        onMouseLeave={() => setIsHoveredMen(false)}
                    >
                        <h5>MEN</h5>
                        <figure 
                            className='categories__link--men' 
                            onClick={() => handleFigureClick('players/men')}
                        >
                            <figcaption>
                                <a href='https://commons.wikimedia.org/wiki/File:Djokovic_MCM23_(5)_(52883600048).jpg' onClick={(e) => e.stopPropagation()}>si.robi (Flickr)</a>
                                <a href='https://creativecommons.org/licenses/by-sa/2.0/deed.en'>CC BY-SA 2.0</a>
                            </figcaption>
                        </figure>
                    </section>
                    <div
                        className={`categories__separator ${isHoveredMen ? 'move--men' : isHoveredWomen ? 'move--women' : ''}`}>
                        <TennisBall />
                    </div>
                    <section className='categories__category--women'
                        onMouseEnter={() => setIsHoveredWomen(true)}
                        onMouseLeave={() => setIsHoveredWomen(false)}
                    >
                        <h5>WOMEN</h5>
                        <figure 
                            className='categories__link--women' 
                            onClick={() => handleFigureClick('players/women')}
                        >
                            <figcaption>
                                <a href='https://commons.wikimedia.org/wiki/File:Swiatek_RG19_(1)_(48199020336).jpg' onClick={(e) => e.stopPropagation()}>si.robi (Flickr)</a>
                                <a href='https://creativecommons.org/licenses/by-sa/2.0/deed.en'>CC BY-SA 2.0</a>
                            </figcaption>
                        </figure>
                    </section>
                </div>
            </div>
        </article>
    )
}

export default Categories