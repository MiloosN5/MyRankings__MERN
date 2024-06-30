import React, { useRef } from 'react'
import { Outlet } from 'react-router-dom'

// components
import HeaderPage from '../components/HeaderPage'
import ColorTheme from '../components/ColorTheme'

// contexts
import SearchParamsProvider from '../components/SearchParamsProvider'

const PageLayout = () => {

  const pageWrapperRef = useRef(null)

  return (
    <SearchParamsProvider>
      <div className='page'>
        <div className='page__wrapper' ref={pageWrapperRef}>
          <HeaderPage ref={pageWrapperRef} />
          <main>
            <section className='toggleColors-section'>
              <div className='toggleColors-section__wrapper'>
                <h3 className='sr-only'>Toggle color theme</h3>
                <ColorTheme />
              </div>
            </section>
            <Outlet />
          </main>
        </div>
      </div>
    </SearchParamsProvider>
  )
}

export default PageLayout