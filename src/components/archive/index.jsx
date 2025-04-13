import { Navbar } from "../Navbar"
import { Sidebar } from "../sidebar"
import { useNotes } from "../../Context/notes_contex"
import { Notescard } from "../Notescard"
export const Archive = () => {
     const { archive } = useNotes()
     return (
          <div>
               <Navbar />
               <main className="flex gap-3">
                    <Sidebar />
                    <div className="p-4 flex-1 max-w-[1200px]">
                         {archive.length > 0 ? (
                              <div className="flex flex-wrap gap-6">
                                   {archive.map(({ id, title, description, isPinned }) => (
                                        <Notescard
                                             key={id}
                                             id={id}
                                             title={title}
                                             description={description}
                                             isPinned={isPinned}
                                        />
                                   ))}
                              </div>
                         ) : (
                              <div className="text-center text-gray-500 mt-8">
                                   <p>No archived notes found</p>
                              </div>
                         )}
                    </div>
               </main>
          </div>
     )
}