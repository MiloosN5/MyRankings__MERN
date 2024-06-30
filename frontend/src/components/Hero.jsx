import { useContext } from 'react';

// contexts
import { ThemeContext } from '../Contexts/ThemeContext';

// components
import Categories from './Categories';

const Hero = () => {

  const { theme } = useContext(ThemeContext)

  return (
    <section className={`hero ${theme === 'light' ? 'light' : 'dark'}`}>
      <div className='hero__wrapper'>
        <h1 className='hero__title'>
          <span className='hero__title--accent'>my</span> rankings
        </h1>
        <Categories />
        <p className='hero__desc'>
          Make your own tennis ranking list for both men's and women's singles.
        </p>
      </div>
    </section>
  )
}

export default Hero