import { LazyLoadImage } from 'react-lazy-load-image-component';
import images from '../../utils/images';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <LazyLoadImage
                    alt={images.footer_logo.alt}
                    src={images.footer_logo.src}
                />
            </div>
            <div className="author">
                <div>Disclaimer</div>
                <div>Terms & Conditions</div>
                <div>Privacy Policy</div>
            </div>
        </div>
    )
}

export default Footer;