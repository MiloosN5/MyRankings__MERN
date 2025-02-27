import { useParams } from 'react-router-dom';

// components
import FormPlayer from '../components/FormPlayer';

const PlayerEditPage = ({ playerGender }) => {

  const { id, slug } = useParams()

  return (
    <div className='player-edit'>
      <section className='form-section'>
        <div className='form-section__wrapper'>
          <h2 className='sr-only'>Player edit form</h2>
          <FormPlayer
            playerGender={playerGender}
            type='edit'
            id={id}
            slug={slug}
          />
        </div>
      </section>
    </div>
  );
};

export default PlayerEditPage;