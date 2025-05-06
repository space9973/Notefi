import { NavLink } from "react-router-dom"
import { useEffect } from "react"
import { useMenu } from "../../Context/menu_context"

export const Sidebar = () => {
     const { isMenuOpen } = useMenu();

     const getStyle = ({ isActive }) => {
          const style1 = "flex items-center gap-2 p-2 rounded-lg transform transition-all duration-300 hover:scale-105"
          const style2 = "hover:bg-indigo-600 hover:text-white w-full transition-all duration-300 hover:shadow-md animate-flipEntrance"
          const style3 = "bg-indigo-600 text-white w-full shadow-md animate-flipEntrance"
          return isActive
               ? `${style1} ${style3}`
               : `${style1} ${style2}`
     }

     return (
          <aside className={`
               fixed md:relative
               inset-y-0 left-0
               transform transition-transform duration-300 ease-in-out
               ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
               min-h-screen border-r border-solid border-gray-300 w-64 bg-white z-40
               shadow-lg md:shadow-none
          `}>
               <div className="flex flex-col gap-3 p-4">
                    <NavLink to="/" className={getStyle} style={{ animationDelay: '0.1s' }}>
                         <span className="material-symbols-rounded hover:animate-flip">
                              home
                         </span>
                         <span>Home</span>
                    </NavLink>
                    <NavLink to="/archive" className={getStyle} style={{ animationDelay: '0.2s' }}>
                         <span className="material-symbols-rounded hover:animate-flip">
                              archive
                         </span>
                         <span>Archive</span>
                    </NavLink>
                    <NavLink to="/important" className={getStyle} style={{ animationDelay: '0.3s' }}>
                         <span className="material-symbols-rounded hover:animate-flip">
                              label_important
                         </span>
                         <span>Important</span>
                    </NavLink>
                    <NavLink to="/bin" className={getStyle} style={{ animationDelay: '0.4s' }}>
                         <span className="material-symbols-rounded hover:animate-flip">
                              delete
                         </span>
                         <span>Bin</span>
                    </NavLink>
               </div>
          </aside>
     )
}
