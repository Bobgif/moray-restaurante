import React from 'react'
import { Navbar, Footer, NavLink } from './components';
function App() {
  return (
    <div className="hero-parallax min-h-screen bg-zinc-950 text-white font-sans">
      {/* NAVBAR */}
      <Navbar/>

      {/* SECCIÓN HERO (BIENVENIDA) */}
      <main  className="flex flex-col items-center justify-center text-center mt-20 px-4 py-12">
        <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">
          Experiencia Culinaria Única
        </span>
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
          SABORES QUE <br /> 
          <span className="text-orange-500 italic">INSPIRAN</span>
        </h1>
        <p className="max-w-xl text-zinc-400 text-lg mb-10">
          En Moray, fusionamos la tradición ancestral con técnicas modernas para crear platos que cuentan una historia en cada bocado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
       
          <NavLink href="https://drive.google.com/file/d/1E6Vk2I_dHHv4IZkQYqX45XpErw5VvCWO/view?usp=sharing" 
            external 
            className="border border-zinc-700 hover:bg-zinc-800 px-8 py-4 rounded-lg font-bold transition-all text-white inline-block text-center"
>
  Descargar la Carta
</NavLink>

          <NavLink 
href='https://drive.google.com/drive/folders/1ylmuCKaEOEsFUs01JlDF8aeeyKWkmi7I?usp=drive_link'  external 
  className="border border-zinc-700 hover:bg-zinc-800 px-8 py-4 rounded-lg font-bold transition-all text-white inline-block text-center"
>
  Descarga el Menú
</NavLink>
         
        </div>
      </main>

      {/* SECCIÓN: PLATOS DESTACADOS */}
      <section id='platos' className="px-8 py-24 bg-zinc-950 ">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-2">Nuestra Selección</h2>
              <p className="text-4xl font-black text-white italic">Platos Destacados</p>
            </div>
            <a href="#" className="text-zinc-500 hover:text-white text-sm uppercase tracking-widest transition-colors mt-4 md:mt-0">
              Ver carta completa →
            </a>
          </div>

          {/* Grid de Platos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plato 1 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl bg-zinc-900 aspect-square mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800" 
                  alt="Plato Moray" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Ceviche de la Casa</h3>
              <p className="text-zinc-500 text-sm mt-1 italic">Pesca del día, leche de tigre cremosa y ají limo.</p>
              <p className="text-orange-500 font-bold mt-2">$45.000</p>
            </div>

            {/* Plato 2 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl bg-zinc-900 aspect-square mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800" 
                  alt="Plato Moray" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Lomo Saltado Premium</h3>
              <p className="text-zinc-500 text-sm mt-1 italic">Cortes de lomo fino, cebollas caramelizadas y toque ahumado.</p>
              <p className="text-orange-500 font-bold mt-2">$58.000</p>
            </div>

            {/* Plato 3 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl bg-zinc-900 aspect-square mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" 
                  alt="Plato Moray" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Anticuchos de Autor</h3>
              <p className="text-zinc-500 text-sm mt-1 italic">Corazón de res marinado en ají panca y especias secretas.</p>
              <p className="text-orange-500 font-bold mt-2">$38.000</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: UBICACIÓN Y CONTACTO */}
      <section id="contacto" className="px-8 py-24 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            
            {/* Información de Contacto */}
            <div className="space-y-12">
              <div>
                <h2 className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-2">Gracias</h2>
                <p className="text-5xl font-black text-white leading-none">Por su visita <br /> <span className="text-orange-500 italic">En ANTOFAGASTA</span></p>
              </div>

              <div className="space-y-8">
                <div className="group">
                  <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest mb-1">Dirección</p>
                  <p className="text-xl text-white font-medium group-hover:text-orange-500 transition-colors">
                    Cap. Carlos Condell 2787, Antofagasta <br /> Antofagasta, Chile
                  </p>
                </div>

                <div className="group">
                  <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest mb-1">Horarios</p>
                  <p className="text-xl text-white font-medium">Lunes a Sábado</p>
                  <p className="text-zinc-400">10:00 AM — 6:00 PM</p>
                </div>

                <div className="group">
                  <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest mb-1">Reservas</p>
                  <p className="text-2xl text-orange-500 font-black tracking-tighter hover:scale-105 inline-block transition-transform cursor-pointer" alt="numero telefonico de Restaurante Moray">
                    +56 9 90208090
                  </p>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="flex gap-6 pt-6">
                <NavLink external href="https://www.instagram.com/moraycriollo/" className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-all">IG</NavLink>
                <NavLink external href="https://www.facebook.com/profile.php?id=61554033836833" className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-all">FB</NavLink>
                <NavLink external href="https://wa.me/56993697841?text=Hola%20Moray%2C%20quisiera%20hacer%20una%20reserva" className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-all">W</NavLink>

                
              </div>
            </div>

            {/* Mapa de Google Maps */}
            <div className="w-full h-[500px] rounded-3xl overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700 shadow-2xl border border-zinc-800">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.7923286132173!2d-70.3975149894093!3d-23.647607164677122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96afd5002c88f583%3A0xd792c4c5b23ac7ca!2sRestaurant%20Moray%20(Cocina%20Peruana)!5e0!3m2!1ses!2sus!4v1767718058352!5m2!1ses!2sus" 
              width="100%" 
              height="100%"
               style={{ border: 0 }}  allowfullscreen="" 
               loading="lazy" referrerpolicy="no-referrer-when-downgrade">

            </iframe>
            
            </div>

          </div>
        </div>
      </section>
      {/* FOOTER */}
      <Footer/>
    </div>
  )
}

export default App