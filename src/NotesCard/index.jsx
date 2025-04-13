import { useNotes } from "../Context/notes_contex"
export const Notescard = ({ id, title, description }) => {
     const { notesdispatch } = useNotes()
     const onpinnedClick = (id) => {
          isPinned ? notesdispatch({ type: "PIN", payload: id, isPinned }) :
               notesdispatch({ type: "UNPINE", payload: { id } })
     }

     return (
          <div key={id} className="border p-3 rounded-lg w-80 border-neutral-400 hover:shadow-md transition-shadow">
               <div className="flex justify-between mb-3">
                    <p className="font-medium">{title}</p>
                    <div>
                         <button onClick={() => onpinnedClick(id)}>
                              <span className={isPinned ? 'material-symbols-outlined' : 'material-symbols-outlined'}>
                                   push_pin
                              </span>
                         </button>
                    </div>
               </div>
               <div className="border-b border-neutral-200 mb-3"></div>
               <div className="flex justify-between">
                    <p className="text-neutral-600">{description}</p>
                    <div className="flex gap-2 ml-2">
                         <span className="material-symbols-rounded cursor-pointer">
                              bookmark
                         </span>
                         <span className="material-symbols-rounded cursor-pointer">
                              delete
                         </span>
                    </div>
               </div>
          </div>
     )
}
