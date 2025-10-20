import React from 'react';
import { clients } from '../data/mock';

const ClientsCarousel = () => {
  // Duplicar os clientes para criar loop infinito
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <div className="relative overflow-hidden">
      <div className="flex animate-scroll">
        {duplicatedClients.map((client, index) => (
          <div
            key={`${client.id}-${index}`}
            className="flex-shrink-0 mx-4 bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all duration-300 w-48 h-32 flex items-center justify-center"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsCarousel;