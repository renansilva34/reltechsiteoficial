import React, { useState } from 'react';
import { Building2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/mock';

const Projetos = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

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

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="md:flex md:items-stretch">
                  {/* Image - Reduced size */}
                  <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {project.images.length > 1 && (
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                        +{project.images.length} fotos
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-2/3 p-6 flex flex-col justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                    <h3 className="text-white font-bold text-xl mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-3 text-sm">{project.description}</p>
                    <div className="text-sm text-gray-400">
                      {project.equipment}
                    </div>
                    <div className="mt-4 text-green-500 text-sm font-semibold">
                      Clique para ver detalhes
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-5xl w-full bg-gray-900 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Image Carousel */}
            <div className="relative">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={selectedProject.title}
                className="w-full h-[60vh] object-contain bg-black"
              />

              {/* Navigation Arrows */}
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                </>
              )}
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h2 className="text-white font-bold text-2xl mb-3">{selectedProject.title}</h2>
              <p className="text-gray-300 mb-3">{selectedProject.description}</p>
              <div className="text-sm text-gray-400">{selectedProject.equipment}</div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-black mb-2">100+</div>
                <div className="text-black/80 font-medium">Projetos Realizados</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-black mb-2">100+</div>
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