import { Navbar } from "../Navbar"
import { Sidebar } from "../sidebar"
import { useNotes } from "../../Context/notes_contex"
import { Notescard } from "../Notescard"
export const Bin = () => {
     const { bin } = useNotes()
     return (
          <div>
               <Navbar />
               <main className="flex gap-3">
                    <Sidebar />
                    <div className="p-4 flex-1 max-w-[1200px]">
                         {bin.length > 0 ? (
                              <div className="flex flex-wrap gap-6">
                                   {bin.map(({ id, title, description }) => (
                                        <Notescard
                                             key={id}
                                             id={id}
                                             title={title}
                                             description={description}
                                        />
                                   ))}
                              </div>
                         ) : (
                              <div className="text-center text-gray-500 mt-8">
                                   <p>No deleted notes found</p>
                              </div>
                         )}
                    </div>
               </main>
          </div>
     )
}
