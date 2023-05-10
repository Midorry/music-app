import React from 'react';
// import './Login.css';
import { accessUrl } from './spotify';

function Login() {
    return (
        <div className="login grid place-items-center h-screen bg-[#000]">
            <img
                className="w-full"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <a
                href={accessUrl}
                className="text-[#fff] bg-green p-5 rounded-[99px] font-semibold block"
            >
                LOGIN TO SPOTIFY
            </a>
        </div>
    );
}

export default Login;
