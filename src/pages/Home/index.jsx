import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/sidebar"
import { useNotes } from "../../Context/notes_contex"
import { Notescard } from "../../components/Notescard"
export const Home = () => {
     const { title, description, notes, notesdispatch, archive } = useNotes()

     const ontitleChange = (e) => {
          notesdispatch({ type: "title", payload: e.target.value })
     }
     const ondiscriptionchange = (e) => {
          notesdispatch({ type: "description", payload: e.target.value })
     }
     const addNotes = () => {
          notesdispatch({
               type: "Add_Note",
          })
          notesdispatch({
               type: "CLEAR"
          })
     }
     console.log(archive)

     const pinnedNotes = notes.filter(note => note.isPinned)
     const otherNotes = notes.filter(note => !note.isPinned)

     return (
          <div className="page-transition">
               <Navbar />
               <main className="flex flex-col md:flex-row gap-3">
                    <Sidebar />
                    <div className="p-4 flex-1 max-w-[1200px] mx-auto w-full animate-fadeIn">
                         <div className="flex flex-col gap-4 w-full md:w-[500px] animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                              <div className="group animate-float">
                                   <input
                                        value={title}
                                        onChange={ontitleChange}
                                        className="w-full border p-3 rounded-lg focus:outline-none focus:border-indigo-600 transition-all duration-300 
                                        bg-white group-hover:shadow-md group-hover:border-indigo-400 hover:scale-[1.02] focus:scale-[1.02]
                                        focus:shadow-lg focus:shadow-indigo-100 transform-gpu"
                                        type="text"
                                        placeholder="Enter title"
                                   />
                              </div>
                              <div className="relative group animate-float" style={{ animationDelay: '0.1s' }}>
                                   <textarea
                                        value={description}
                                        onChange={ondiscriptionchange}
                                        className="w-full h-32 border p-3 rounded-lg resize-none focus:outline-none focus:border-indigo-600 
                                        transition-all duration-300 bg-white group-hover:shadow-md group-hover:border-indigo-400
                                        hover:scale-[1.02] focus:scale-[1.02] focus:shadow-lg focus:shadow-indigo-100 transform-gpu"
                                        placeholder="Enter description"
                                   />
                                   <button
                                        disabled={!title || !description}
                                        onClick={addNotes}
                                        className="absolute bottom-3 right-3 bg-gradient-shine bg-[length:200%_100%] text-white w-10 h-10 
                                        rounded-full transition-all duration-500 flex items-center justify-center text-xl font-semibold 
                                        disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 animate-shine hover:shadow-lg
                                        hover:shadow-indigo-200 transform-gpu"
                                   >
                                        <span className="material-symbols-rounded">add</span>
                                   </button>
                              </div>
                         </div>

                         {pinnedNotes.length > 0 && (
                              <div className="mt-8 animate-fadeIn">
                                   <h3 className="text-lg font-medium mb-4 text-indigo-600">Pinned Notes</h3>
                                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {pinnedNotes.map(({ id, title, description, isPinned, isImportant }) => (
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
                              </div>
                         )}

                         {notes.length > 0 && (
                              <div className="mt-8 animate-fadeIn">
                                   <h3 className="text-lg font-medium mb-4 text-indigo-600">Other Notes</h3>
                                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {otherNotes.map(({ id, title, description, isPinned, isImportant }) => (
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
                              </div>
                         )}
                    </div>
               </main>
          </div>
     )
}
