import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../components/reducer/Reducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
     const initialState = {
          title: "",
          description: "",
          notes: [],
          archive: [],
          bin: [],
          isImportant: false
     }
     const [{ title, description, notes, archive, bin }, notesdispatch] = useReducer(notesReducer, initialState)
     return (
          <NotesContext.Provider value={{ title, description, notes, archive, bin, notesdispatch }}>
               {children}
          </NotesContext.Provider>
     )
}

const useNotes = () => useContext(NotesContext)
export { NotesProvider, useNotes }
