import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../utils/slices/userSlice'

const Welcome = () => {
    const user = useSelector(selectUser)

    return (
        <div className='h-screen flex-1 flex flex-col justify-center items-center'>
            {user ?
                <div className="flex text-center flex-col space-y-2">
                    <h1 className='text-xl lg:text-2xl xl:text-4xl text-light-50 font-light'>Welcome, <span className='text-white font-semibold'>{user.username}</span> 🎉</h1>
                    <hr />
                    <h3 className='text-light-400 font-light'>Please select a chat to start messaging!</h3>
                </div> :
                <div className="">Loading...</div>
            }
        </div>
    )
}

export default Welcome