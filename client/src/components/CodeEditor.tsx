import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { updateCodeValue } from "@/redux/slices/compilerSlice";

export default function CodeEditor() {
  // Mengambil status terkini dari toko Redux
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  // Mendapatkan fungsi dispatch untuk mengirimkan aksi ke toko Redux
  const dispatch = useDispatch();
  // Callback yang dipanggil saat kode berubah
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = React.useCallback((value: string) => {
    // Mengirimkan aksi untuk memperbarui nilai kode ke toko Redux
    dispatch(updateCodeValue({ language: currentLanguage, code: value }));
  }, []);
  return (
    <CodeMirror
      value={fullCode[currentLanguage]} // Nilai kode yang akan ditampilkan
      height="calc(100vh - 60px - 50px)" // Tinggi komponen
      extensions={[loadLanguage(currentLanguage)!]} // Ekstensi CodeMirror untuk bahasa yang dipilih
      onChange={onChange} // Fungsi yang dipanggil saat kode berubah
      theme={dracula} // Tema CodeMirror
    />
  );
}
