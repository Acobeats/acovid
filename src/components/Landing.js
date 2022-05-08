import logo from '../acopics/logo.png';
import { useNavigate } from 'react-router-dom';
import '../Styles/Landing.css';

const Landing = () => {
    const navigate = useNavigate()
    return(
        <header className="App-header">
            <img src={logo} className="App-logo"/>
            {/* <Button onClick={() => navigate('/home')} variant="dark" type="submit" className="Landing-button">
                INGRESAR
            </Button> */}
            <button className='cssbuttons-io-button' onClick={() => navigate('/home')}> Enter
                <div className="icon">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor">
                        </path>
                    </svg>
                </div>  
            </button>
        </header>
    )
};

export default Landing;
