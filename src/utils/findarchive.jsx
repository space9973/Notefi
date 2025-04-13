export const findNotesinarchive = (archive, id) => {
     return archive.some(note => note.id === id)
}