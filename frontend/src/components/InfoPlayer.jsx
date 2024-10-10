import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

// context
import { ThemeContext } from '../Contexts/ThemeContext';

// icons
import { PiGenderFemaleBold, PiGenderMaleBold } from 'react-icons/pi';
import { MdEmojiEvents } from 'react-icons/md';

//libraries
import axios from 'axios';

// components
import TennisBallOutline from './images/TennisBallOutline';
import Loading from './Loading';

const InfoPlayer = ({ playerGender, id, slug }) => {

  const [player, setPlayer] = useState()
  const { theme } = useContext(ThemeContext)
  const [isHovered, setIsHovered] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const navigate_back = () => {
    navigate(`/players/${playerGender}`);
  }

  useEffect(() => {
    const fetchPlayer = async () => {
      setIsLoading(true)
      await new Promise(resolve => setTimeout(resolve, 1000));
      await axios
        .get(`${import.meta.env.VITE_SERVER}/player/${playerGender}/${id}/${slug}`)
        .then((res) => {
          setIsLoading(false)
          setPlayer(res.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    fetchPlayer()
  }, [id, slug, playerGender])

  return (
    <article className={`info--player ${theme === 'light' ? 'light' : 'dark'}`}>
      <div className='info--player__wrapper'>
        <h4 className='sr-only'>Info</h4>
        {
          isLoading
            ?
            <Loading />
            :
            player != undefined
              ?
              (
                (() => {
                  const {
                    firstName,
                    lastName,
                    country,
                    photo,
                    myRanking,
                    rankings,
                    birthplace,
                    coach,
                    grandSlam,
                    height,
                    money,
                    pro,
                    residence,
                    titlesItf,
                    titlesWta,
                  } = player
                  return (
                    <div className='info--player__content'>
                      <section className='info--player__part--image'>
                        <h5 className='sr-only'>photo</h5>
                        <figure style={{ backgroundImage: `url(${photo['photoUrl']})` }}>
                          <figcaption>
                            <a href={photo['creditUrl']}>{photo['author']} ({photo['website']})</a>
                          </figcaption>
                        </figure>
                      </section>
                      <section
                        className={`info--player__part--basic ${isHovered ? 'hovered' : ''}`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        <h5 className='sr-only'>Basic info</h5>
                        <dl className='info--player__dl'>
                          <dt>
                            <span className='sr-only'>Name and surname</span>
                          </dt>
                          <dd>
                            <span>{firstName}</span>
                            <span>{lastName}</span>
                            <TennisBallOutline isHovered={isHovered} />
                          </dd>
                          <dt>
                            <span className='sr-only'>Ranking</span>
                          </dt>
                          <dd>
                            <span>{myRanking}</span>
                            <TennisBallOutline isHovered={isHovered} />
                          </dd>
                          <dt>
                            <span className='sr-only'>Country</span>
                          </dt>
                          <dd>
                            <span>{country[0] ?? 'n/a'}</span>
                          </dd>
                        </dl>
                      </section>
                      <section className='info--player__part--rankings'>
                        <h5>RANKINGS</h5>
                        <div>
                          <dl className='info--player__dl'>
                            <dt>
                              <span>
                                <PiGenderFemaleBold className='icon' />
                              </span>
                            </dt>
                            <dd>
                              <span>{rankings['singles'] ?? 'n/a'}</span>
                            </dd>
                          </dl>
                          <dl className='info--player__dl'>
                            <dt>
                              <span>
                                <PiGenderFemaleBold className='icon' />
                                <PiGenderFemaleBold className='icon' />
                              </span>
                            </dt>
                            <dd>
                              <span>{rankings['doubles'] ?? 'n/a'}</span>
                            </dd>
                          </dl>
                        </div>
                      </section>
                      <section className='info--player__part--titles-WTA'>
                        <h5>WTA TITLES</h5>
                        <div>
                          <dl className='info--player__dl'>
                            <dt>
                              <span>
                                <PiGenderFemaleBold className='icon' />
                              </span>
                            </dt>
                            <dd>
                              <span>{titlesWta['singles'] ?? 'n/a'}</span>
                            </dd>
                          </dl>
                          <dl className='info--player__dl'>
                            <dt>
                              <span>
                                <PiGenderFemaleBold className='icon' />
                                <PiGenderFemaleBold className='icon' />
                              </span>
                            </dt>
                            <dd>
                              <span>{titlesWta['doubles'] ?? 'n/a'}</span></dd>
                          </dl>
                          <dl className='info--player__dl'>
                            <dt>
                              <span>
                                <PiGenderMaleBold className='icon' />
                                <PiGenderFemaleBold className='icon' />
                              </span>
                            </dt>
                            <dd>
                              <span>{titlesWta['mixed'] ?? 'n/a'}</span>
                            </dd>
                          </dl>
                        </div>
                      </section>
                      <section className='info--player__part--titles-ITF'>
                        <h5>ITF TITLES</h5>
                        <div>
                          <dl className='info--player__dl'>
                            <dt>
                              <span>
                                <PiGenderFemaleBold className='icon' />
                              </span>
                            </dt>
                            <dd>
                              <span>{titlesItf['singles'] ?? 'n/a'}</span>
                            </dd>
                          </dl>
                          <dl className='info--player__dl'>
                            <dt>
                              <span>
                                <PiGenderFemaleBold className='icon' />
                                <PiGenderFemaleBold className='icon' />
                              </span>
                            </dt>
                            <dd>
                              <span>{titlesItf['doubles'] ?? 'n/a'}</span>
                            </dd>
                          </dl>
                        </div>
                      </section>
                      <section className='info--player__part--personal'>
                        <h5 className='sr-only'>BIRTHPLACE</h5>
                        <dl className='info--player__dl'>
                          <dt>
                            <span>Birthplace</span>
                          </dt>
                          <dd>
                            <span>{birthplace ?? 'n/a'}</span>
                          </dd>
                        </dl>
                      </section>
                      <section className='info--player__part--personal'>
                        <h5 className='sr-only'>RESIDENCE</h5>
                        <dl className='info--player__dl'>
                          <dt>
                            <span>RESIDENCE</span>
                          </dt>
                          <dd>
                            <span>{residence ?? 'n/a'}</span>
                          </dd>
                        </dl>
                      </section>
                      <section className='info--player__part--personal'>
                        <h5 className='sr-only'>HEIGHT</h5>
                        <dl className='info--player__dl'>
                          <dt>
                            <span>HEIGHT</span>
                          </dt>
                          <dd>
                            <span>{height ?? 'n/a'}</span>
                          </dd>
                        </dl>
                      </section>
                      <section className='info--player__part--personal'>
                        <h5 className='sr-only'>TURN PRO</h5>
                        <dl className='info--player__dl'>
                          <dt>
                            <span>TURN PRO</span>
                          </dt>
                          <dd>
                            <span>{pro ?? 'n/a'}</span>
                          </dd>
                        </dl>
                      </section>
                      <section className='info--player__part--personal'>
                        <h5 className='sr-only'>COACH</h5>
                        <dl className='info--player__dl'>
                          <dt>COACH</dt>
                          <dd>
                            <span>{coach ?? 'n/a'}</span>
                          </dd>
                        </dl>
                      </section>
                      <section className='info--player__part--personal'>
                        <h5 className='sr-only'>EARNED MONEY</h5>
                        <dl className='info--player__dl'>
                          <dt>EARNED MONEY</dt>
                          <dd>
                            <span>{money ?? 'n/a'}</span>
                          </dd>
                        </dl>
                      </section>
                      <section className='info--player__part--grandslams'>
                        <h5>BEST GRAND SLAM RESULTS</h5>
                        <div>
                          <dl className='info--player__dl'>
                            <dt>
                              <span>
                                <MdEmojiEvents className='icon' />
                              </span>
                            </dt>
                            <dd>
                              <span>{grandSlam['tournament'][0] ?? 'n/a'}</span>
                              <span>{grandSlam['tournament'][1] ?? 'n/a'}</span>
                              <span>{grandSlam['tournament'][2] ?? 'n/a'}</span>
                              <span>{grandSlam['tournament'][3] ?? 'n/a'}</span>
                            </dd>
                          </dl>
                          <dl className='info--player__dl'>
                            <dt>
                              <span>
                                <PiGenderFemaleBold className='icon' />
                              </span>
                            </dt>
                            <dd>
                              <span>{grandSlam['singles'][0] ?? 'n/a'}</span>
                              <span>{grandSlam['singles'][1] ?? 'n/a'}</span>
                              <span>{grandSlam['singles'][2] ?? 'n/a'}</span>
                              <span>{grandSlam['singles'][3] ?? 'n/a'}</span>
                            </dd>
                          </dl>
                          <dl className='info--player__dl'>
                            <dt>
                              <span>
                                <PiGenderFemaleBold className='icon' />
                                <PiGenderFemaleBold className='icon' />
                              </span>
                            </dt>
                            <dd>
                              <span>{grandSlam['doubles'][0] ?? 'n/a'}</span>
                              <span>{grandSlam['doubles'][1] ?? 'n/a'}</span>
                              <span>{grandSlam['doubles'][2] ?? 'n/a'}</span>
                              <span>{grandSlam['doubles'][3] ?? 'n/a'}</span>
                            </dd>
                          </dl>
                          <dl className='info--player__dl'>
                            <dt>
                              <span>
                                <PiGenderMaleBold className='icon' />
                                <PiGenderFemaleBold className='icon' />
                              </span>
                            </dt>
                            <dd>
                              <span>{grandSlam['mixed'][0] ?? 'n/a'}</span>
                              <span>{grandSlam['mixed'][1] ?? 'n/a'}</span>
                              <span>{grandSlam['mixed'][2] ?? 'n/a'}</span>
                              <span>{grandSlam['mixed'][3] ?? 'n/a'}</span>
                            </dd>
                          </dl>
                        </div>
                      </section>
                    </div>
                  )
                })()
              )
              :
              (
                <div className='info--player__noinfo'>
                  <p>There is no info about this player</p>
                  <p className={`warning ${theme === 'light' ? 'light' : 'dark'}`}>
                    ⚠️Since the website is hosted on a FREE plan, the server goes to sleep after periods of inactivity. This usually causes a delay of 1-2 minutes when fetching data
                  </p>
                  <button onClick={() => navigate_back()}>
                    Return back
                  </button>
                </div>
              )
        }
      </div>
    </article>
  )
}

export default InfoPlayer