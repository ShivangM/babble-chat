import React from 'react'
import { useSelector } from 'react-redux'
import { selectSelectedChat } from '../utils/slices/chatSlice'

const ChatWindow = () => {
    const selectedChat = useSelector(selectSelectedChat)

    return (
        <div>{selectedChat.username}</div>
    )
}

export default ChatWindow