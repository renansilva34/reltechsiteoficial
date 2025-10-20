import React from 'react';
import { Building2, CheckCircle } from 'lucide-react';
import { projects } from '../data/mock';

const Projetos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-32 rounded-2xl overflow-hidden mb-12">
            <img
              src="https://static.wixstatic.com/media/11062b_0031705ef65940a4b0a2eb10832435d5~mv2.jpg/v1/fill/w_1919,h_115,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_0031705ef65940a4b0a2eb10832435d5~mv2.jpg"
              alt="Projetos"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent flex items-center">
              <div className="px-8">
                <h1 className="text-5xl font-bold text-white">
                  Projetos Realizados
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid - Layout idêntico ao site original (lado a lado) */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="md:flex md:items-stretch">
                  {/* Image */}
                  <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-2/3 p-6 flex flex-col justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                    <h3 className="text-white font-bold text-xl mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-3 text-sm">{project.description}</p>
                    <div className="text-sm text-gray-400">
                      {project.equipment}
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