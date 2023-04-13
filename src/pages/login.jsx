import { useState } from "react";
import registerFetch from "../components/authentication/registerFetch";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerFetch(username, password);
            const data = await response.json();
            setError(response.ok);
            if (response.ok) {
                navigate("/Home", { state: { username } });
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
            
            {/* <div className={error ? "success" : "error"}>
                <p>{message}</p>
            </div> */}
        </form>
    );
}
