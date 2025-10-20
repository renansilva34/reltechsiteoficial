import React from 'react';
import { Building2, CheckCircle } from 'lucide-react';
import { projects } from '../data/mock';

const Projetos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-48 rounded-2xl overflow-hidden mb-12">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
              alt="Projetos"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent flex items-center">
              <div className="px-8">
                <h1 className="text-5xl font-bold text-white mb-4">
                  Projetos <span className="text-green-500">Realizados</span>
                </h1>
                <p className="text-gray-300 text-lg">Confira nossos principais trabalhos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-green-500/10 hover:border-green-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-black px-4 py-2 rounded-full font-semibold text-sm">
                    Projeto #{index + 1}
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-start space-x-3">
                    <Building2 className="text-green-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-3">{project.description}</p>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>{project.equipment}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-black mb-2">500+</div>
                <div className="text-black/80 font-medium">Projetos Realizados</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-black mb-2">300+</div>
                <div className="text-black/80 font-medium">Clientes Satisfeitos</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-black mb-2">5+</div>
                <div className="text-black/80 font-medium">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-black mb-2">100%</div>
                <div className="text-black/80 font-medium">Compromisso</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projetos;