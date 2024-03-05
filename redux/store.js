import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { filesReduser } from "./files/filesSlice";

const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfig = {
  key: "files",
  storage,
};

const persistedReducer = persistReducer(persistConfig, filesReduser);

const store = configureStore({
  reducer: { files: persistedReducer },
  middleware,
});

let persistor = persistStore(store);
export { store, persistor };
