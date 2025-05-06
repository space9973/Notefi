import axios from "axios";
const API_URL = "http://localhost:3000/api/notes";

//get all notes
export const getNotes = () => axios.get(API_URL);

//create a note
export const createNote = (note) => axios.post(API_URL, note);

//update a note
export const updatedNote = (id, notes) => axios.put(`${API_URL}/${id}`, notes);

//delete a note
export const deleteNote = (id) => axios.delete(`${API_URL}/${id}`);

//get archive notes
export const getArchiveNotes = () => axios.get(`${API_URL}/archive`);

//get pinned notes
export const getPinnedNotes = () => axios.get(`${API_URL}/pinned`);

//get trashed notes
export const getTrashedNotes = () => axios.get(`${API_URL}/trashed`);



