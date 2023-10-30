import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { apiSlice } from "./api/index";
import authReducer from "./slices/authSlice";


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"],
};

const rootReducer = combineReducers({
     auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
}); 

const persistedReducer = persistReducer(persistConfig, rootReducer);

    
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(apiSlice.middleware),
});

export default store;

export const persistor = persistStore(store);