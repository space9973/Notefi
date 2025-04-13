import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
     return (
          <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
               <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center space-y-6">
                         <div
                              className="text-gray-600 text-sm text-center hover:text-indigo-600 transition-all duration-500 transform hover:scale-110 animate-float"
                         >
                              © {new Date().getFullYear()} Notefi App. All rights reserved.
                         </div>
                         <div className="flex items-center justify-center space-x-8">
                              <a
                                   href="https://github.com/space9973"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="group relative"
                              >
                                   <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                                   <div className="relative">
                                        <FaGithub
                                             size={24}
                                             className="text-gray-600 hover:text-indigo-600 transition-all duration-300 transform group-hover:scale-125 animate-bounce"
                                        />
                                   </div>
                              </a>
                              <a
                                   href="https://linkedin.com/in/yourusername"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="group relative"
                              >
                                   <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                                   <div className="relative">
                                        <FaLinkedin
                                             size={24}
                                             className="text-gray-600 hover:text-indigo-600 transition-all duration-300 transform group-hover:scale-125 animate-float"
                                        />
                                   </div>
                              </a>
                              <a
                                   href="https://twitter.com/yourusername"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="group relative"
                              >
                                   <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                                   <div className="relative">
                                        <FaTwitter
                                             size={24}
                                             className="text-gray-600 hover:text-indigo-600 transition-all duration-300 transform group-hover:scale-125 animate-glow"
                                        />
                                   </div>
                              </a>
                         </div>
                    </div>
               </div>
          </footer>
     )
} 