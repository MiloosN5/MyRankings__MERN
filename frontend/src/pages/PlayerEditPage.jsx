import { useParams } from 'react-router-dom';

// components
import FormPlayer from '../components/FormPlayer';

const PlayerEditPage = ({ playerGender }) => {

  const { id, slug } = useParams()

  return (
    <section className='player-edit'>
      <div className='player-edit__wrapper'>
        <h2 className='sr-only'>Player edit route</h2>
        <section className='form-section'>
          <div className='form-section__wrapper'>
            <h3 className='sr-only'>Player edit form</h3>
            <FormPlayer
              playerGender={playerGender}
              type='edit'
              id={id}
              slug={slug}
            />
          </div>
        </section>
      </div>
    </section>
  )

}

export default PlayerEditPage