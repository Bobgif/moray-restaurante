import React from 'react';
import NavLink from './NavLink';
const Navbar = () =>{
    return(
<footer className="bg-black pt-20 pb-10 px-8 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Columna 1: Logo y Eslogan */}
            <div className="col-span-1 md:col-span-2">
              <div className="text-3xl font-black tracking-tighter italic mb-6">
                MORAY<span className="text-orange-500">.</span>
              </div>
              <p className="text-zinc-500 max-w-sm text-sm leading-relaxed">
                Redefiniendo la cocina de peruana desde Antofagasta, Chile. 
              </p>
            </div>

            {/* Columna 2: Enlaces */}
            <div>
              <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-6">Explorar</h4>
              <ul className="space-y-4 text-zinc-500 text-sm">
                <li><NavLink href="https://www.facebook.com/profile.php?id=61554033836833&sk=mentions" className="hover:text-orange-500 transition-colors">Menciones en Fb</NavLink></li>
                <li><NavLink href="https://www.facebook.com/profile.php?id=61554033836833&sk=reviews" className="hover:text-orange-500 transition-colors">Opiniones en Fb</NavLink></li>

              </ul>
            </div>

            
          </div>

          {/* Línea Final */}
          <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-[10px] uppercase tracking-widest">
              © 2026 MORAY RESTAURANTE. TODOS LOS DERECHOS RESERVADOS.
            </p>
            <div className="flex gap-8 text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
              <span>Diseñado por Bartolomé Sogo</span>
            </div>
          </div>
        </div>
      </footer>
    );

};
export default Navbar;
