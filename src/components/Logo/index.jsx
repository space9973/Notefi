import React from 'react';

export const Logo = () => {
     return (
          <div className="flex items-center gap-2 select-none">
               <div className="relative w-8 h-8 animate-float">
                    <div className="absolute inset-0 bg-gradient-shine rounded-lg animate-shine"></div>
                    <div className="absolute inset-0 bg-white/90 rounded-lg flex items-center justify-center">
                         <span className="material-symbols-rounded text-2xl text-indigo-600 animate-pulse">
                              edit_note
                         </span>
                    </div>
               </div>
               <h1 className="text-2xl font-bold bg-gradient-shine animate-shine bg-clip-text text-transparent">
                    Notefi
               </h1>
          </div>
     );
}; 