import { useParams } from 'react-router-dom';

// components
import InfoPlayer from '../components/InfoPlayer';

const PlayerDetailPage = ({ playerGender }) => {

  const { id, slug } = useParams();

  return (
    <div className='player-detail'>
      <section className='info-section'>
        <div className='info-section__wrapper'>
          <h2 className='sr-only'>Player detail info</h2>
          <InfoPlayer
            playerGender={playerGender}
            id={id}
            slug={slug}
          />
        </div>
      </section>
    </div>
  );
};

export default PlayerDetailPage;