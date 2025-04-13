export const findNotesinbin = (bin, id) => {
     return bin.some(note => note.id === id)
}