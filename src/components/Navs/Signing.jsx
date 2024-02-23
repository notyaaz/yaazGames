import React, { useState } from "react";
import { signUp, signIn, googleSign } from "../Firebase/Auth.js";
import { addUser } from "../Firebase/Firestore.js";
import { auth } from "../../Firebase.js";
import { useNavigate } from "react-router-dom";

export default function Signing() {
    const [userData, setUserDate] = useState({ username: "", email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    function handleUsernameChange(e) {
        setUserDate((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    }

    async function handleSignUp() {
        const msg = await signUp(userData.email, userData.password, userData.username);
        if (msg.length == 0) {
            navigate("/");
            location.replace(location.href);
        } else {
            setErrorMessage(msg.slice(5));
        }
    }
    async function handleSignIn() {
        const msg = await signIn(userData.email, userData.password);
        if (msg.length == 0) {
            navigate("/");
            location.replace(location.href);
        } else {
            setErrorMessage(msg.slice(5));
        }
    }

    async function handleGoogleSign() {
        await googleSign();
        navigate("/");
        location.replace(location.href);
    }

    return (
        <div className="flex justify-center">
            <div className="border-[4px] flex flex-col justify-center items-center gap-6 max-w-[500px] w-full py-6">
                <div className="flex items-center justify-center gap-4">
                    <p>Sign in with:</p>
                    <button onClick={handleGoogleSign}>
                        <i className="fa-brands fa-google text-[2rem] hover:text-orange-700 transition-colors duration-200"></i>
                    </button>
                </div>
                <div className="font-bold text-[1.5rem]">OR:</div>
                <input
                    className="pl-2 py-2 focus:outline-none rounded-md border border-black"
                    placeholder="enter your username..."
                    name="username"
                    type="text"
                    autoComplete="off"
                    onChange={(e) => {
                        handleUsernameChange(e);
                    }}
                    value={userData.name}
                />

                <input
                    className="pl-2 py-2 focus:outline-none rounded-md border border-black"
                    placeholder="enter your email..."
                    name="email"
                    type="email"
                    autoComplete="off"
                    onChange={(e) => {
                        handleUsernameChange(e);
                    }}
                    value={userData.email}
                />

                <input
                    className="pl-2 py-2 focus:outline-none rounded-md border border-black"
                    placeholder="enter your password..."
                    name="password"
                    type="password"
                    onChange={(e) => {
                        handleUsernameChange(e);
                    }}
                    value={userData.password}
                />
                <div className="text-red-600">{errorMessage}</div>
                <div className="flex gap-20">
                    <button
                        className="cursor-pointer px-4 py-2 rounded-lg bg-accent hover:bg-accentHover"
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </button>
                    <button
                        className="cursor-pointer px-4 py-2 rounded-lg bg-accent hover:bg-accentHover"
                        onClick={handleSignIn}
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}
