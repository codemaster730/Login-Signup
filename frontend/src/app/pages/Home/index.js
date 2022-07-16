import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const Home = () => {
    const history = useHistory();

    useEffect(() => {
        let token = localStorage.getItem('token');
        if(!token) {
            history.push('/signin');
        }
    }, []);

    return (
        <div className="home-page">
            This is home page
        </div>
    );
}

export default Home;