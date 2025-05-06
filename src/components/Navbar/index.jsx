import { useMenu } from "../../Context/menu_context"

export const Navbar = () => {
     const { isMenuOpen, toggleMenu } = useMenu();

     return (
          <nav className="border-b-2 border-solid border-indigo-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
               <div className="px-4 py-3 flex items-center justify-between">
                    <div className="text-xl font-semibold text-indigo-600 flex items-center gap-2 animate-flipEntrance">
                         <span className="material-symbols-rounded animate-float hover:animate-flip">note</span>
                         <span className="hover-flip inline-block">Notefi</span>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                         onClick={toggleMenu}
                         className="md:hidden p-2 rounded-lg hover:bg-indigo-100 transition-colors"
                    >
                         <span className="material-symbols-rounded">
                              {isMenuOpen ? 'close' : 'menu'}
                         </span>
                    </button>
               </div>
          </nav>
     )
}