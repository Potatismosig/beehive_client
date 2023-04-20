import React from 'react';
import '../styles/auth.scss';

export default function Overlay({ onSignUpClick, onSignInClick }) {
    return (
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                <img src="https://cdn.discordapp.com/attachments/1074053506954186792/1098585647717027890/output_1.png" alt="" />
                    <h1>Welcome Back!</h1>
                    <p>
                        To keep connected with us please login with your personal
                        info
                    </p>
                    <button className="ghost" id="signIn" onClick={onSignInClick}>
                        Sign In
                    </button>
                </div>
                <div className="overlay-panel overlay-right">
                <img className='rightImg' src="https://cdn.discordapp.com/attachments/1074053506954186792/1098575736094343188/Lovepik_com-402425950-3d-cartoon-style-plush-yellow-flower-model-element.png" alt="" />
                    <h1>Hello, Friend!</h1>
                    <p>
                        Enter your personal details and start journey with us
                    </p>
                    <button className="ghost" id="signUp" onClick={onSignUpClick}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}
