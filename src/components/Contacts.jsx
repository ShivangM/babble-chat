import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectContacts, selectUser, setUser } from '../utils/slices/userSlice'
import logo from '../assets/logo.svg'
import classNames from 'classnames'
import Cookies from 'js-cookie'
import { selectSelectedChat, setSelectedChat } from '../utils/slices/chatSlice'

const Contacts = () => {
    const contacts = useSelector(selectContacts)
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    if (!user) return
    const { username, avatarImage, email } = user

    const ContactCard = ({ contact }) => {
        const { username, avatarImage, email } = contact
        const handleChatSelect = () => {
            dispatch(setSelectedChat(contact))
        }

        const selectedChat = useSelector(selectSelectedChat)

        return (
            <div onClick={handleChatSelect} className={classNames("w-full bg-dark shadow-md cursor-pointer rounded-lg p-4", selectedChat?._id === contact._id ? 'border-2 border-white' : '')}>
                <div className="flex space-x-4 w-full">
                    <img className='bg-white rounded-full h-12' src={avatarImage} alt={`${username}'s Avatar`} />
                    <div className="flex w-full flex-col">
                        <h3 className='text-white truncate w-24 lg:w-36'>{username}</h3>
                        <h4 className='text-light-500 text-sm font-light truncate w-24 lg:w-36'>{email}</h4>
                    </div>
                </div>
            </div>
        )
    }

    const handleLogout = () => {
        Cookies.remove('user')
        dispatch(setUser(undefined))
    }

    return (
        <aside className={classNames('h-screen w-screen absolute z-50  transition-all ease-in-out duration-300 top-0 left-0 sm:translate-x-0 sm:w-60 md:w-72 lg:w-80 xl:w-96 flex flex-col items-center bg-dark-900 px-4 py-8 sm:relative', false ? 'translate-x-0' : '-translate-x-full')}>
            <div className="flex flex-col items-center">
                <img src={logo} alt="Babble! Logo" />
                <h1 className='text-light'>Babble!</h1>
            </div>

            <div className="self-start px-2 pt-10 pb-4 w-full">
                <h1 className='text-left pb-2 text-xl text-white'>Available Chats:</h1>
                <hr className='w-full opacity-40' />
            </div>


            <div className="flex w-full flex-col flex-1 overflow-scroll space-y-4 px-2 scrollbar-thin scrollbar-track-blue-500">
                {
                    contacts ?
                        contacts.map((contact) => {
                            return (
                                <ContactCard key={contact._id} contact={contact} />
                            )
                        })
                        :
                        <h1>No Contacts!</h1>
                }
            </div>

            <div className="w-full bg-dark p-4 absolute bottom-0 left-0 space-y-3">
                <div className="flex space-x-4 w-full">
                    <img className='bg-white rounded-full h-12' src={avatarImage} alt={`${username}'s Avatar`} />
                    <div className="flex w-full flex-col">
                        <h3 className='text-white truncate'>{username}</h3>
                        <h4 className='text-light-300 text-sm font-light truncate w-36 xl:w-64'>{email}</h4>
                    </div>
                </div>

                <button onClick={handleLogout} className='gradient__button w-full'>Logout</button>
            </div>
        </aside>
    )
}

export default Contacts