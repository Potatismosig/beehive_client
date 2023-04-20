import { useState } from "react";
import loginFetch from "../components/authentication/loginFetch";
import { Link, useNavigate } from "react-router-dom";

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
        <form className="form" onSubmit={handleSubmit}>
            <h1>Sign In</h1>

            <label htmlFor="username" className="userInfoLabel">
                <span>Username</span>
                <input type="text" id="username" className="userInfo" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            </label>

            <label htmlFor="password" className="userInfoLabel">
                <span>Password</span>
                <input type="password" id="password" className="userInfo" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Min 3 charaters long" />
            </label>

            <button type="submit">Sign In</button>

            <Link className="linkTo" to="/register">Sign Up</Link>
            
            {!error ? 
                <div className="error">
                    <p>{message}</p>
                </div>
            :
                <></>
            }
        </form>
    );
}
