import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// contexts
import { ThemeContext } from '../Contexts/ThemeContext';

// components
import Input from './Input';
import ErrorInput from './ErrorInput'
import Loading from './Loading';

// libraries
import axios from 'axios'

const FormPlayer = (
  {
    playerGender,
    type,
    id = 'n/a',
    slug = 'n/a'
  }
) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [ranking, setRanking] = useState('');
  const [country, setCountry] = useState('');
  const [birthyear, setBirthyear] = useState('');
  const [flag, setFlag] = useState('');

  const [errorFirstName, setErrorFirstName] = useState(false)
  const [errorLastName, setErrorLastName] = useState(false)
  const [errorBirthyear, setErrorBirthyear] = useState(false)

  const [showErrorFirstName, setShowErrorFirstName] = useState(false);
  const [showErrorLastName, setShowErrorLastName] = useState(false);
  const [showErrorBirthyear, setShowErrorBirthyear] = useState(false);

  const [isSubmit, setIsSubmit] = useState(false)
  const [isLoading, setIsLoading] = useState(() => {
    return type === 'add' ? false : true;
  })

  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext)

  const input_change = async (e) => {
    const input = e.target;
    switch (input.name) {
      case 'firstName':
        setErrorFirstName(false)
        setFirstName(e.target.value)
        if (e.target.value.length > 1) {
          setErrorFirstName(false)
        } else {
          setErrorFirstName(true)
        }
        break;
      case 'lastName':
        setErrorLastName(false)
        setLastName(e.target.value)
        if (e.target.value.length > 1) {
          setErrorLastName(false)
        } else {
          setErrorLastName(true)
        }
        break;
      case 'ranking':
        setRanking(e.target.value)
        break;
      case 'birthyear':
        setErrorBirthyear(false)
        setBirthyear(e.target.value)
        if ((e.target.value > 1800) && (e.target.value < 2024)) {
          setErrorBirthyear(false)
        } else {
          setErrorBirthyear(true)
        }
        break;
      case 'country':
        setCountry(e.target.value
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
        )
        let countryName = e.target.value
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join('_')
        setFlag(`./assets/${countryName}.png`)
        break;
    }
  }

  const isFilled = () => {
    return firstName && lastName && ranking && birthyear && country
  }

  const isValid = () => {
    return !(errorFirstName || errorLastName || errorBirthyear)
  }

  const form_submit = async (e) => {
    e.preventDefault();
    setIsSubmit(true)
    if (type === 'edit') {
      const data = {
        firstName,
        lastName,
        ranking,
        birthyear,
        country: [country.split(' ').join(''), 'all'],
        flag
      };
      if (Boolean(isFilled()) && Boolean(isValid())) {
        await axios
          .put(`${import.meta.env.VITE_SERVER}/players/${playerGender}/${id}`, data)
          .then((res) => {
            navigate(`/players/${playerGender}`);
            console.log('updated', res)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    } else if (type === 'add') {
      const playerNew = {
        firstName,
        lastName,
        ranking,
        birthyear,
        country,
        flag
      }
      if (Boolean(isFilled()) && Boolean(isValid())) {
        await axios
          .post(`${import.meta.env.VITE_SERVER}/players/${playerGender}`, playerNew)
          .catch(error => {
            console.error('Error:', error);
          });
        setFirstName('');
        setLastName('');
        setRanking('');
        setBirthyear('');
        setCountry('');
        setFlag('');
        setErrorFirstName(false)
        setErrorLastName(false)
        setErrorBirthyear(false)
        setIsSubmit(false)
      } else {
        console.log('Something is wrong here')
      }
    }
  }

  useEffect(() => {
    if (type === 'edit') {
      axios
        .get(`${import.meta.env.VITE_SERVER}/players/${playerGender}/${id}/${slug}`)
        .then((res) => {
          setIsLoading(false)
          setFirstName(res.data.firstName)
          setLastName(res.data.lastName)
          setRanking(res.data.ranking)
          setBirthyear(res.data.birthyear)
          setCountry(res.data.country[0])
          setFlag(res.data.flag)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [])

  useEffect(() => {
    if (isSubmit && errorFirstName) {
      setShowErrorFirstName(true);
    } else {
      const timer1 = setTimeout(() => setShowErrorFirstName(false), 500);
      return () => clearTimeout(timer1);
    }
  }, [isSubmit, errorFirstName]);

  useEffect(() => {
    if (isSubmit && errorLastName) {
      setShowErrorLastName(true);
    } else {
      const timer2 = setTimeout(() => setShowErrorLastName(false), 500);
      return () => clearTimeout(timer2);
    }
  }, [isSubmit, errorLastName]);

  useEffect(() => {
    if (isSubmit && errorBirthyear) {
      setShowErrorBirthyear(true);
    } else {
      const timer3 = setTimeout(() => setShowErrorBirthyear(false), 500);
      return () => clearTimeout(timer3);
    }
  }, [isSubmit, errorBirthyear]);


  return (
    <article className={`form--player ${theme === 'light' ? 'light' : 'dark'}`}>
      <div className='form--player__wrapper'>
        <h4 className='sr-only'>Form</h4>
        {
          isLoading
            ?
            <Loading />
            :
            <form className='form--player__form' onSubmit={(e) => form_submit(e)}>
              <div className={`form--player__fieldsets`}>
                <fieldset className='form--player__field'>
                  <Input
                    label='firstName'
                    type='text'
                    name='firstName'
                    value={firstName}
                    handleChange={(e) => input_change(e)}
                  />
                  {
                    showErrorFirstName &&
                    (
                      <ErrorInput status={errorFirstName ? 'fadeIn' : 'fadeOut'} message='Firstname should be longer than 1' />
                    )
                  }
                </fieldset>
                <fieldset className='form--player__field'>
                  <Input
                    label='lastName'
                    type='text'
                    name='lastName'
                    value={lastName}
                    handleChange={(e) => input_change(e)}
                  />
                  {
                    showErrorLastName &&
                    (
                      <ErrorInput status={errorLastName ? 'fadeIn' : 'fadeOut'} message='Lastname should be longer than 1' />
                    )
                  }
                </fieldset>
                <fieldset className='form--player__field'>
                  <Input
                    label='ranking'
                    type='number'
                    name='ranking'
                    value={ranking}
                    handleChange={(e) => input_change(e)}
                  />
                </fieldset>
                <fieldset className='form--player__field'>
                  <Input
                    label='birthyear'
                    type='number'
                    name='birthyear'
                    value={birthyear}
                    handleChange={(e) => input_change(e)}
                  />
                  {
                    showErrorBirthyear &&
                    (
                      <ErrorInput status={errorBirthyear ? 'fadeIn' : 'fadeOut'} message='Year should be between 1800 and 2024' />
                    )
                  }
                </fieldset>
                <fieldset className='form--player__field'>
                  <Input
                    label='country'
                    type='text'
                    name='country'
                    value={country}
                    handleChange={(e) => input_change(e)}
                  />
                </fieldset>
                <fieldset className='form--player__field'>
                  <Input
                    label='flag'
                    type='text'
                    name='flag'
                    value={flag}
                    handleChange={(e) => input_change(e)}
                    disabled={true}
                  />
                </fieldset>
                <button
                  type='submit'
                  className={
                    isFilled()
                      ? `form--player__button--clickable ${theme === 'light' ? 'dark' : 'light'}`
                      : 'form--player__button--disable'
                  }
                  disabled={!isFilled()}
                >
                  SAVE
                </button>
              </div>
            </form>
        }
      </div>
    </article>
  )
}

export default FormPlayer