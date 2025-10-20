import React from 'react';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { services } from '../data/mock';

const Servicos = () => {
  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent size={48} /> : <Icons.Settings size={48} />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-48 rounded-2xl overflow-hidden mb-12">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80"
              alt="Serviços"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent flex items-center">
              <div className="px-8">
                <h1 className="text-5xl font-bold text-white mb-4">
                  Nossos <span className="text-green-500">Serviços</span>
                </h1>
                <p className="text-gray-300 text-lg">Soluções completas de segurança eletrônica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-green-500/10 hover:border-green-500/30 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-8 space-y-4">
                  <div className="bg-green-500/10 w-20 h-20 rounded-lg flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-white font-bold text-xl">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="px-8 pb-8">
                  <a
                    href="https://api.whatsapp.com/send/?phone=5511971943263&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-500 font-semibold hover:text-green-400 transition-colors"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2" size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Pronto para Proteger o Que Importa?
          </h2>
          <p className="text-black/80 mb-8 text-lg">
            Entre em contato conosco e receba um orçamento personalizado
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5511971943263&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            Falar com Especialista
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Servicos;