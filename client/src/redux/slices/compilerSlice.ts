import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Definisikan tipe status untuk bagian slice (potongan) compiler
export interface CompilerSliceStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
  currentLanguage: "html" | "css" | "javascript"; // Tipe untuk bahasa kode yang sedang dipilih
  currentCode: string; // Kode yang sedang diedit saat ini
}

// Inisialisasi status awal untuk bagian slice (potongan) compiler
const initialState: CompilerSliceStateType = {
  fullCode: {
    html: "html",
    css: "css",
    javascript: "javascript",
  },
  currentLanguage: "javascript", // Bahasa kode awal yang dipilih
  currentCode: "", // Kode awal yang kosong
};

// Membuat slice (potongan) compiler menggunakan createSlice dari Redux Toolkit
const compilerSlice = createSlice({
  name: "compilerSlice", // Nama slice
  initialState, // Status awal
  reducers: {
    // Aksi untuk memperbarui bahasa kode yang dipilih
    updateCurrentLanguage: (
      state,
      action: PayloadAction<CompilerSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload; // Memperbarui nilai currentLanguage
    },
    // Aksi untuk memperbarui nilai kode dalam bahasa tertentu
    updateCodeValue: (
      state,
      action: PayloadAction<{
        language: CompilerSliceStateType["currentLanguage"];
        code: string;
      }>
    ) => {
      const { code, language } = action.payload;
      state.fullCode[language] = code; // Memperbarui nilai kode dalam fullCode berdasarkan bahasa yang dipilih
    },
  },
});

// Ekspor reducer dari slice compiler
export default compilerSlice.reducer;
// Ekspor aksi (actions) dari slice compiler, termasuk updateCurrentLanguage dan updateCodeValue
export const { updateCurrentLanguage, updateCodeValue } = compilerSlice.actions;
