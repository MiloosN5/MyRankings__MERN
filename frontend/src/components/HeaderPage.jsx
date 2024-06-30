import { forwardRef } from 'react'

// components
import NavPage from './NavPage'

const HeaderPage = forwardRef((props, pageWrapperRef) => {

    return (
        <header className='header'>
            <div className='header__wrapper'>
                <h3 className='sr-only'>Header of the page</h3>
                <NavPage pageWrapperRef={pageWrapperRef} />
            </div>
        </header>
    )

});

export default HeaderPage