import React, { useContext } from "react";
import { Link, useHistory } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import images from '../utils/images';
import UserContext from '../utils/UserContext';

const Head = () => {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined,
        });
        localStorage.setItem("token", "");
        history.push("/signin");
    };

    return <div className='content-header'>
                <div className='header-logo'>
                    <LazyLoadImage
                        alt={images.logo.alt}
                        src={images.logo.src}
                    />
                </div>
                <div className='user-mode'>
                    <Link to={'/contact'} className='contact-us'>
                        Contact Us
                    </Link>
                    <div className='auth-link'>
                        <a onClick={logout}>
                            Logout
                        </a>
                    </div>
                </div>
            </div>;
}

const Foot = () => {
    return <div className='content-footer'>
                <div className="author">
                    <div>Disclaimer</div>
                    <div>Terms & Conditions</div>
                    <div>Privacy Policy</div>
                </div>
            </div>;
}

const Layout2 = ({ children }) => (
    <React.Fragment>
        {
            Head()
        }
        <div className="content">
            {children}
        </div>
        {
            Foot()
        }
    </React.Fragment>
);

export default Layout2;