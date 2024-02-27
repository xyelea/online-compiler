import { configureStore } from "@reduxjs/toolkit";
import compilerSlice from "./slices/compilerSlice";

// Konfigurasi dan pembuatan toko Redux menggunakan configureStore dari Redux Toolkit
export const store = configureStore({
  reducer: { compilerSlice }, // Reducer yang digunakan adalah compilerSlice
});
// Tipe RootState yang merupakan tipe status keseluruhan aplikasi, yang dihasilkan dari fungsi getState dari toko Redux
export type RootState = ReturnType<typeof store.getState>;
