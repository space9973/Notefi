export const Navbar = () => {
     return (
          <nav className="border-b-2 border-solid border-indigo-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
               <div className="pl-4 py-3 flex items-center">
                    <div className="text-xl font-semibold text-indigo-600 flex items-center gap-2 animate-flipEntrance">
                         <span className="material-symbols-rounded animate-float hover:animate-flip">note</span>
                         <span className="hover-flip inline-block">Notefi</span>
                    </div>
               </div>
          </nav>
     )
}