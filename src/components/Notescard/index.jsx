import { useNotes } from "../../Context/notes_contex"
import { findNotesinarchive } from "../../utils/findarchive"
import { findNotesinbin } from "../../utils/finddelete"

export const Notescard = ({ id, title, description, isPinned, isImportant }) => {
     const { notesdispatch, archive, bin } = useNotes()
     const isNotesinarchive = findNotesinarchive(archive, id)
     const isNotesinbin = findNotesinbin(bin, id)

     const handlePin = () => {
          notesdispatch({ type: "PIN", payload: id })
     }

     const handleImportant = () => {
          notesdispatch({ type: "TOGGLE_IMPORTANT", payload: id })
     }

     const handleArchive = () => {
          !isNotesinarchive ? notesdispatch({
               type: "ARCHIVE_NOTE",
               payload: id
          }) : notesdispatch({
               type: "UNARCHIVE_NOTE",
               payload: id
          })
     }

     const handleDelete = () => {
          notesdispatch({
               type: "DELETE_NOTE",
               payload: id
          })
     }

     return (
          <div className="animate-flipInX perspective">
               <div className="relative border p-4 rounded-lg w-80 bg-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 group">
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-shine bg-[length:200%_100%] animate-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Content container */}
                    <div className="relative z-10">
                         <div className="flex justify-between mb-3">
                              <p className="font-medium text-lg group-hover:text-indigo-600 transition-all duration-300">
                                   {title}
                              </p>
                              <div className="flex gap-3">
                                   {!isNotesinarchive && !isNotesinbin ? (
                                        <>
                                             <button
                                                  onClick={handlePin}
                                                  className="transform hover:scale-125 hover:rotate-12 transition-all duration-300"
                                             >
                                                  <span className={`material-symbols-rounded cursor-pointer ${isPinned ? 'text-indigo-600' : 'text-gray-500'}`}
                                                       style={{ fontVariationSettings: isPinned ? "'FILL' 1" : "'FILL' 0" }}>
                                                       push_pin
                                                  </span>
                                             </button>
                                             <button
                                                  onClick={handleImportant}
                                                  className="transform hover:scale-125 hover:-rotate-12 transition-all duration-300"
                                             >
                                                  <span className={`material-symbols-rounded cursor-pointer ${isImportant ? 'text-indigo-600' : 'text-gray-500'}`}
                                                       style={{ fontVariationSettings: isImportant ? "'FILL' 1" : "'FILL' 0" }}>
                                                       label_important
                                                  </span>
                                             </button>
                                        </>
                                   ) : null}
                              </div>
                         </div>

                         <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                         <div className="mt-3 flex justify-between">
                              <p className="text-neutral-600 group-hover:text-neutral-800 transition-colors duration-300">
                                   {description}
                              </p>
                              <div className="flex gap-3 ml-2">
                                   {!isNotesinbin ? (
                                        <button
                                             onClick={handleArchive}
                                             className="transform hover:scale-125 transition-all duration-300 hover:animate-wiggle"
                                        >
                                             <span className={`material-symbols-rounded cursor-pointer ${isNotesinarchive ? 'text-indigo-600' : 'text-gray-500'}`}
                                                  style={{ fontVariationSettings: isNotesinarchive ? "'FILL' 1" : "'FILL' 0" }}>
                                                  archive
                                             </span>
                                        </button>
                                   ) : null}
                                   <button
                                        onClick={handleDelete}
                                        className="transform hover:scale-125 transition-all duration-300 hover:animate-wiggle"
                                   >
                                        <span className={`material-symbols-rounded cursor-pointer ${isNotesinbin ? 'text-indigo-600' : 'text-gray-500'}`}
                                             style={{ fontVariationSettings: isNotesinbin ? "'FILL' 1" : "'FILL' 0" }}>
                                             delete
                                        </span>
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}