import { useContext } from 'react';

// contexts
import { ThemeContext } from '../Contexts/ThemeContext';

const ErrorInput = ({ message, status }) => {

  const { theme } = useContext(ThemeContext)

  return (
    <p className={`error--input ${theme === 'light' ? 'light' : 'dark'} ${status}`}>
      <span>Message</span>: {message}
    </p>
  )
}

export default ErrorInput