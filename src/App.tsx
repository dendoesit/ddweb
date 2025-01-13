import React from 'react';
import { Building2, Users, Briefcase, Trophy, Phone, Mail, MapPin, ChevronRight, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">DD WEB Software</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">Transformăm idei în soluții digitale inovatoare pentru viitorul afacerii tale</p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold transition-colors">
            Contactează-ne <ArrowRight size={20} />
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Serviciile Noastre</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Oferim soluții complete pentru transformarea digitală a afacerii tale</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <Building2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Dezvoltare Software</h3>
              <p className="text-gray-600">Aplicații web personalizate pentru nevoile specifice ale afacerii tale</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Consultanță IT</h3>
              <p className="text-gray-600">Expertiză tehnică și strategică pentru optimizarea proceselor digitale</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Suport Tehnic</h3>
              <p className="text-gray-600">Asistență tehnică 24/7 și mentenanță pentru sistemele implementate</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                alt="Echipa noastră" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Despre Companie</h2>
              <p className="text-gray-600 mb-6">
                Cu peste 10 ani de experiență în industria IT, DD Web Soft România este partenerul de încredere pentru 
                companiile care doresc să își accelereze creșterea prin intermediul tehnologiei.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Proiecte de Succes</h2>
          <p className="text-gray-600 text-center mb-12">Descoperă câteva dintre proiectele noastre reprezentative</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                alt="Proiect 1" 
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Website Web responsive</h3>
                  <p className="text-gray-200">Prin tehnicile de adaptare folosite, site-ul dumneavoastra se va redimensiona automat, incadrandu-se perfect pe dimensiunea ecranului dispozitivului folosit.</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80" 
                alt="Proiect 2" 
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Platformă E-commerce cu DotCMS</h3>
                  <p className="text-gray-200">Sistem complet de comerț electronic pentru un retailer național</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80" 
                alt="Proiect 3" 
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Design personalizat si optimizare SEO</h3>
                  <p className="text-gray-200">Designul personalizat și funcțiile cheie sunt importante pentru a crea o aplicație sau un site web care să fie atractiv și folositor pentru utilizatori. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Ce Spun Clienții Noștri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Trophy className="w-12 h-12 text-yellow-500 mb-4" />
              <p className="text-gray-600 mb-4">"Colaborarea cu DDWeb a transformat complet procesele noastre digitale. Echipa lor este extrem de profesionistă și dedicată."</p>
              <div className="font-bold">Maria Popescu</div>
              <div className="text-gray-500">Director General, Retail Plus</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Trophy className="w-12 h-12 text-yellow-500 mb-4" />
              <p className="text-gray-600 mb-4">"Soluțiile implementate ne-au ajutat să ne creștem eficiența cu peste 40%. Recomand cu încredere serviciile lor."</p>
              <div className="font-bold">Ioan Marinescu</div>
              <div className="text-gray-500">CTO, Tech Innovations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contactează-ne</h2>
              <p className="text-gray-600 mb-8">Suntem aici pentru a răspunde la toate întrebările tale despre serviciile noastre.</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <span>+40 751467562</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <span>contact@ddweb.ro</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <span>Strada Neagoe Voda nr. 55, Bacau</span>
                </div>
              </div>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nume Complet</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mesaj</label>
                <textarea 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none h-32"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Trimite Mesaj
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DD Web</h3>
              <p className="text-gray-400">Transformăm viitorul digital al afacerilor</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Servicii</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Dezvoltare Software</li>
                <li>Consultanță IT</li>
                <li>Suport Tehnic</li>
                <li>Cloud Computing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Companie</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Despre Noi</li>
                <li>Cariere</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Termeni și Condiții</li>
                <li>Politica de Confidențialitate</li>
                <li>GDPR</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 DD Web România. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;