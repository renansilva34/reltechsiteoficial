import React, { useState } from 'react';
import { ArrowRight, Filter } from 'lucide-react';
import { products } from '../data/mock';

const Produtos = () => {
  const [filter, setFilter] = useState('all');

  const allProducts = [
    ...products.cameras,
    ...products.alarms,
    ...products.locks,
    ...products.accessControl,
    ...products.recorders
  ];

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'Câmeras', name: 'Câmeras' },
    { id: 'Alarmes', name: 'Alarmes' },
    { id: 'Fechaduras', name: 'Fechaduras' },
    { id: 'Controle de Acesso', name: 'Controle de Acesso' },
    { id: 'Gravadores', name: 'Gravadores' }
  ];

  const filteredProducts = filter === 'all'
    ? allProducts
    : allProducts.filter(product => product.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Nossos <span className="text-green-500">Produtos</span>
            </h1>
            <p className="text-gray-300 text-lg">Equipamentos Intelbras de alta qualidade</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-green-500 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-green-500/10 hover:border-green-500/30 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden bg-gray-700">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-white font-bold text-xl">{product.name}</h3>
                  <p className="text-gray-400 text-sm">{product.description}</p>
                  <a
                    href="https://api.whatsapp.com/send/?phone=5511971943263&text=Gostaria%20de%20solicitar%20or%C3%A7amento%20para%20o%20produto&type=phone_number&app_absent=0"
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

      {/* CTA Banner */}
      <section className="px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Encontrou o Produto Ideal?
          </h2>
          <p className="text-black/80 mb-8 text-lg">
            Fale conosco e receba um orçamento personalizado com instalação incluída
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5511971943263&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            Solicitar Orçamento Completo
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Produtos;