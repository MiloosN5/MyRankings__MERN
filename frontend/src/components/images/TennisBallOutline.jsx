import { useContext } from 'react';

// contexts
import { ThemeContext } from '../../Contexts/ThemeContext';

// images
import TennisBallGold from '../../assets/tennis__ball__3.png'
import TennisBallBlue from '../../assets/tennis__ball__4.png'

const TennisBallOutline = ({ isHovered }) => {

  const { theme } = useContext(ThemeContext)

  const tennisBallGold = <img className='iconimg' src={TennisBallGold} alt='golden tennis ball outline' />
  const tennisBallBlue = <img className='iconimg' src={TennisBallBlue} alt='blue tennis ball outline' />

  return (
    <div>
      {
        theme === 'light'
          ?
          isHovered
            ?
            (tennisBallGold)
            :
            (tennisBallBlue)
          :
          isHovered
            ?
            (tennisBallBlue)
            :
            (tennisBallGold)
      }
    </div>
  )
}

export default TennisBallOutline