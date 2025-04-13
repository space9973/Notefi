import { Navbar } from "../Navbar"
import { Sidebar } from "../sidebar"
import { useNotes } from "../../Context/notes_contex"
import { Notescard } from "../Notescard"

export const Important = () => {
     const { notes } = useNotes()
     const importantNotes = notes.filter(note => note.isImportant)

     return (
          <div>
               <Navbar />
               <main className="flex gap-3">
                    <Sidebar />
                    <div className="p-4 flex-1 max-w-[1200px]">
                         {importantNotes.length > 0 ? (
                              <div className="flex flex-wrap gap-6">
                                   {importantNotes.map(({ id, title, description, isPinned, isImportant }) => (
                                        <Notescard
                                             key={id}
                                             id={id}
                                             title={title}
                                             description={description}
                                             isPinned={isPinned}
                                             isImportant={isImportant}
                                        />
                                   ))}
                              </div>
                         ) : (
                              <div className="text-center text-gray-500 mt-8">
                                   <p>No important notes found</p>
                              </div>
                         )}
                    </div>
               </main>
          </div>
     )
}
