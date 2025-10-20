import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-md" style={{ transform: 'rotate(45deg)' }} />
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">rel-</span>
                <span className="text-green-500">tech</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Soluções eletrônicas completas de segurança. Inovação desde 2020.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Projetos
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Produtos
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Câmeras de Segurança</li>
              <li>Sistemas de Alarme</li>
              <li>Fechaduras Digitais</li>
              <li>Controle de Acesso</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone size={16} className="text-green-500" />
                <span>(11) 97194-3263</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail size={16} className="text-green-500" />
                <span>{contactInfo.email}</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin size={16} className="text-green-500" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-green-500/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Rel-Tech Tecnologia. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;