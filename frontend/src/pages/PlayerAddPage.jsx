// components
import FormPlayer from '../components/FormPlayer'

const PlayerAddPage = ({ playerGender }) => {

  return (
    <section className='player-add'>
      <div className='player-add__wrapper'>
        <h2 className='sr-only'>Player add route</h2>
        <section className='form-section'>
          <div className='form-section__wrapper'>
            <h3 className='sr-only'>Player add form</h3>
            <FormPlayer
              playerGender={playerGender}
              type='add'
            />
          </div>
        </section>
      </div>
    </section>
  )

}

export default PlayerAddPage