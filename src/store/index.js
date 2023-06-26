import { configureStore } from '@reduxjs/toolkit';

import themeSlice from './theme-slice';
import uiSlice from './ui-slice';

const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        ui: uiSlice.reducer
    }
})

export default store;