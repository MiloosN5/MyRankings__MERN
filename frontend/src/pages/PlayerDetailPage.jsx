import { useParams } from 'react-router-dom';

// components
import InfoPlayer from '../components/InfoPlayer';

const PlayerDetailPage = ({ playerGender }) => {

  const { id, slug } = useParams();

  return (
    <section className='player-detail'>
      <div className='player-detail__wrapper'>
        <h2 className='sr-only'>Player detail route</h2>
        <section className='info-section'>
          <div className='info-section__wrapper'>
            <h3 className='sr-only'>Player detail info</h3>
            <InfoPlayer
              playerGender={playerGender}
              id={id}
              slug={slug}
            />
          </div>
        </section>
      </div>
    </section>
  )
}

export default PlayerDetailPage