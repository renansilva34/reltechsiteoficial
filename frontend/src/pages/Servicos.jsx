import React from 'react';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/mock';

const Servicos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-32 rounded-2xl overflow-hidden mb-12">
            <img
              src="https://static.wixstatic.com/media/76751ad539344a41a9950d2ee585e350.jpg/v1/fill/w_1919,h_129,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/76751ad539344a41a9950d2ee585e350.jpg"
              alt="Serviços"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent flex items-center">
              <div className="px-8">
                <h1 className="text-5xl font-bold text-white">
                  Nossos Serviços
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Layout idêntico ao site original */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg text-center">{service.title}</h3>
                  </div>
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