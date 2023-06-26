import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: 'dark',
    reducers: {
        toggle(state){
            if(state==='dark') state='light';
            else state='dark';
        }
    }
});

export const themeActions = themeSlice.actions;
export default themeSlice;