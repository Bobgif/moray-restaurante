{/*import React from 'react';
import NavLink from './NavLink';
const Navbar = () =>{
    return(
<nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl font-black tracking-tighter italic">
          MORAY<span className="text-orange-500">.</span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-zinc-400">
          <a href="#" className="hover:text-orange-500 transition-colors">La Carta</a>
          <a href="#platos" className="hover:text-orange-500 transition-colors">Platos</a>
          <a href="#contacto" className="hover:text-orange-500 transition-colors">Ubicación</a>
        </div>

        
        <NavLink href='https://www.google.com/search?q=https://wa.me/56993697841%3Ftext%3DHola,%2520vengo%2520de%2520su%2520pagina%2520web.' external className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full text-x font-bold uppercase transition-all transform hover:scale-105">+ 56 9 93697841</NavLink>
      </nav>
    );

};
export default Navbar;
*/}
import React, { useState } from 'react';
import NavLink from './NavLink';

const Navbar = () => {
  // Estado para abrir/cerrar el menú en celular
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
        
        {/* LOGO */}
        <div className="text-2xl font-black tracking-tighter italic text-white">
          MORAY<span className="text-orange-500">.</span>
        </div>
        
        {/* LINKS PARA ESCRITORIO (Se ocultan en móvil con 'hidden md:flex') */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="#">Carta</NavLink>
          <NavLink href="#platos">Platos</NavLink>
          <NavLink href="#contacto">Ubicación</NavLink>
        </div>

        {/* CONTENEDOR DE BOTÓN / ICONO WHATSAPP */}
        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/56993697841" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white rounded-full transition-all flex items-center justify-center
                       md:px-5 md:py-2 md:text-xs font-bold uppercase /* Estilo Desktop */
                       w-10 h-10 md:w-auto md:h-auto /* Estilo Móvil (Círculo) */"
          >
            {/* Texto en PC, Icono en Móvil */}
            <span className="hidden md:inline">+ 56 9 93697841</span>
            <span className="md:hidden text-xl">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
            </span>
          </a>

          {/* BOTÓN HAMBURGUESA (Solo visible en móvil) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
          >
            <div className="w-6 h-1 bg-white mb-1 transition-all"></div>
            <div className="w-6 h-1 bg-white mb-1 transition-all"></div>
            <div className="w-6 h-1 bg-white transition-all"></div>
          </button>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      <div className={`${isOpen ? 'flex' : 'hidden'} md:hidden flex-col bg-zinc-900 border-t border-zinc-800 px-6 py-4 space-y-4`}>
        <NavLink href="#" onClick={() => setIsOpen(false)}>Carta</NavLink>
        <NavLink href="#platos" onClick={() => setIsOpen(false)}>Platos</NavLink>
        <NavLink href="#contacto" onClick={() => setIsOpen(false)}>Ubicación</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;