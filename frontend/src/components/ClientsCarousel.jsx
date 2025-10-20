import React from 'react';
import { clients } from '../data/mock';

const ClientsCarousel = () => {
  // Duplicar os clientes para criar loop infinito
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <div className="relative overflow-hidden py-4">
      <div className="flex animate-scroll">
        {duplicatedClients.map((client, index) => (
          <div
            key={`${client.id}-${index}`}
            className="flex-shrink-0 mx-6"
          >
            <div className="w-48 h-24 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 p-4 flex items-center justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsCarousel;