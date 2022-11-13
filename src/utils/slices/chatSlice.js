import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedChat: undefined,
};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setSelectedChat: (state, action) => {
            state.selectedChat = action.payload;
        },
    },
});

export const selectSelectedChat = (state) => state.chat.selectedChat

export const { setSelectedChat } = chatSlice.actions;

export default chatSlice.reducer;
