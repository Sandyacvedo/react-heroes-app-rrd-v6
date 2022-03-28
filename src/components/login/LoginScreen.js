import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { LOGIN } from '../../app/auth/actions';

export const LoginScreen = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    
    const { logged } = useSelector((state) => state.auth);

    const handleLogin = () => {
        dispatch({type: LOGIN })
        localStorage.setItem('logged', true)
        navigate('/marvel', {
            replace: true
        });
    }

    // console.log('state Name -->', logged);

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            {/* <input type='text' className='exampleFormControlInput1' />
            <br />
            <br /> */}
            <button 
                className="btn btn-primary"
                onClick={ handleLogin }
                >
                    Login
            </button>
        </div>
    )
}
