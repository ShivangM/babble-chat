import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("FORM")
    }

    const handleChange = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form className='h-screen w-full flex justify-center items-center flex-col gap-1 bg-light dark:bg-dark' onSubmit={handleSubmit}>
                <div className="">
                    <img src={logo} alt="Babble! Logo" />
                    <h1>Babble!</h1>
                </div>
                <input type="text" name="username" id="username" placeholder='Username' onChange={handleChange} />
                <input type="email" name="email" id="email" placeholder='Email' onChange={handleChange} />
                <input type="password" name="password" id="password" placeholder='Password' onChange={handleChange} />
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' onChange={handleChange} />
                <button type='submit'>Create User</button>
                <p>Already have an account ? <span><Link to="/login">Login</Link></span></p>
            </form>
        </div>
    )
}

export default Register