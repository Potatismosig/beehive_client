import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerFetch from "../components/authentication/registerFetch";
import '../styles/auth.scss';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerFetch(username, password);
            const data = await response.json();
            setError(response.ok);
            if (response.ok) {
                navigate("/", { state: { username } });
            }
            setMessage(data);
            return;

        } catch (error) {
            setError(false);
            setMessage(error.message)
            return;
        }
    };
    return (
        <div className="form-container sign-up-container">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>

                <label htmlFor="username" className="userInfoLabel">
                    <input type="text" id="username" className="userInfo" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                </label>

                <label htmlFor="password" className="userInfoLabel">
                    <input type="password" id="password" className="userInfo" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Min 3 charaters long" />
                </label>

                <button type="submit">Sign Up</button>
                
                <div className={error ? "regSuccess" : "regError"}>
                    <p>{message}</p>
                </div>
            </form>
        </div>

        
    );
}
