import { v4 as uuid } from 'uuid';
export const notesReducer = (state, action) => {
     switch (action.type) {
          case "title":
               return { ...state, title: action.payload }
          case "description":
               return { ...state, description: action.payload }
          case "Add_Note":
               return {
                    ...state,
                    notes: [...state.notes, {
                         description: state.description,
                         title: state.title,
                         id: uuid(),
                         isPinned: false,
                         isImportant: false
                    }]
               }
          case "CLEAR":
               return {
                    ...state,
                    title: "",
                    description: "",
               }
          case "PIN":
               return {
                    ...state,
                    notes: state.notes.map((note) =>
                         note.id === action.payload
                              ? { ...note, isPinned: !note.isPinned }
                              : note
                    )
               }
          case "ARCHIVE_NOTE":
               return {
                    ...state,
                    archive: [...state.archive, state.notes.find(note => note.id === action.payload)],
                    notes: state.notes.filter(note => note.id !== action.payload)
               }
          case "UNARCHIVE_NOTE":
               return {
                    ...state,
                    notes: [...state.notes, state.archive.find(note => note.id === action.payload)],
                    archive: state.archive.filter(note => note.id !== action.payload),

               }
          case "DELETE_NOTE":
               const noteToDelete = state.notes.find(note => note.id === action.payload) ||
                    state.archive.find(note => note.id === action.payload);
               if (!noteToDelete) return state;

               return {
                    ...state,
                    bin: [...state.bin, noteToDelete],
                    notes: state.notes.filter(note => note.id !== action.payload),
                    archive: state.archive.filter(note => note.id !== action.payload)
               }
          case "TOGGLE_IMPORTANT":
               return {
                    ...state,
                    notes: state.notes.map((note) =>
                         note.id === action.payload
                              ? { ...note, isImportant: !note.isImportant }
                              : note
                    )
               }
          default:
               return state
     }
} 
