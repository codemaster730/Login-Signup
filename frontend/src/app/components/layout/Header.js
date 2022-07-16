import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import images from '../../utils/images';

const Header = () => {
    return (
        <header>
            <div className='top-header'>
                <div className='header-logo'>
                    <LazyLoadImage
                        alt={images.logo.alt}
                        src={images.logo.src}
                    />
                </div>
                <div className='header-sub-logo'>
                    <LazyLoadImage
                        alt={images.sub_logo.alt}
                        src={images.sub_logo.src}
                    />
                </div>
                <div className='user-mode'>
                    <Link to={'/contact'} className='contact-us'>
                        Contact Us
                    </Link>
                    <div className='auth-link'>
                        <Link to={'/signin'}>
                            SignIn
                        </Link>
                        {'/'}
                        <Link to={'/signup'}>
                            SignUp
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
