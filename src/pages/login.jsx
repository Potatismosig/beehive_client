import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginFetch from "../components/authentication/loginFetch";
import '../styles/auth.scss';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginFetch(username, password);
            const data = await response.json();
            setError(response.ok);
            if (response.ok) {
                navigate("/Home", { state: { username } });
            }
            setError(response.ok);
            setMessage(data);
            return;

        } catch (error) {
            setError(false);
            setMessage(error.message)
            return;
        }
    };
    return (
        <div className="form-container sign-in-container">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Sign In</h1>

                <label htmlFor="username" className="userInfoLabel">
                    <input type="text" id="username" className="userInfo" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                </label>

                <label htmlFor="password" className="userInfoLabel">
                    <input type="password" id="password" className="userInfo" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Min 3 charaters long" />
                </label>

                <button type="submit">Sign In</button>
                
                {!error ? 
                    <div className="error">
                        <p>{message}</p>
                    </div>
                :
                    <></>
                }
            </form>
        </div>
    );
}
