// components
import FormPlayer from '../components/FormPlayer'

const PlayerAddPage = ({ playerGender }) => {

  return (
    <div className='player-add'>
      <section className='form-section'>
        <div className='form-section__wrapper'>
          <h2 className='sr-only'>Player add form</h2>
          <FormPlayer
            playerGender={playerGender}
            type='add'
          />
        </div>
      </section>
    </div>
  );
};

export default PlayerAddPage;