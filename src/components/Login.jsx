import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Import Firebase auth instance
import { useNavigate} from 'react-router-dom';
import '../styles/login.css'

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("success");
            navigate('/account-deletion');
        } catch (error) {
        setError(error.message);
        }
    };  
  return (
    <div>
        <h2>Login</h2>
        {error && <div className='error'>Username and password are incorrect</div>}
        <div className='container'> 

            <form onSubmit={handleLogin}>
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                </form>
            </div>
        

    </div>
  )
}

export default Login