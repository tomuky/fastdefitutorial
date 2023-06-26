import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        leftPaneShowing : false,
    },
    reducers: {
        togglePane(state){
            state.leftPaneShowing = !state.leftPaneShowing;
        },
        closePane(state){
            state.leftPaneShowing = false;
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;