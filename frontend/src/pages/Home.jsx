// components
import Hero from '../components/Hero';

const Home = () => {
  return (
    <section className='home'>
      <div className='home__wrapper'>
        <h2 className='sr-only'>Home route</h2>
        <Hero />
      </div>
    </section>
  )
}

export default Home