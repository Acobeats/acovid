import { Button } from 'react-bootstrap';
import logo from '../logo.png';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate()
    return(
        <header className="App-header">
            <img src={logo} className="App-logo"/>
            <Button onClick={() => navigate('/home')} variant="dark" type="submit" className="Landing-button">
                INGRESAR
            </Button>
        </header>
    )
};

export default Landing;
