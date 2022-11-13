import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ChatWindow from '../components/ChatWindow'
import Contacts from '../components/Contacts'
import Welcome from '../components/Welcome'
import { getAllUsersRoute } from '../utils/APIRoutes'
import { selectSelectedChat } from '../utils/slices/chatSlice'
import { selectUser, setContacts } from '../utils/slices/userSlice'

const Chat = () => {
    const navigate = useNavigate()
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const selectedChat = useSelector(selectSelectedChat)

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }

        if (!user.isAvatarImageSet) {
            navigate('/set-avatar')
        }

        axios.get(`${getAllUsersRoute}/${user._id}`).then(({ data }) => {
            dispatch(setContacts(data))
        })
    }, [navigate, user, dispatch])

    return (
        <main className='page__container'>
            <div className="flex w-full">
                <Contacts />
                {
                    selectedChat ?
                        <ChatWindow />
                        :
                        <Welcome />
                }
            </div>
        </main>
    )
}

export default Chat