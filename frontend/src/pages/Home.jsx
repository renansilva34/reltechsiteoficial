import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Shield, Clock, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { services, testimonials, clients } from '../data/mock';
import * as Icons from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-green-500/10 text-green-500 px-4 py-2 rounded-full text-sm font-semibold border border-green-500/20">
                  Revenda Oficial Intelbras
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Identifique intrusos.
                <span className="text-green-500"> Evite furtos.</span>
              </h1>
              <p className="text-xl text-gray-300">
                Soluções eletrônicas completas de segurança em um só lugar. Monitore seus bens com tecnologia de ponta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://api.whatsapp.com/send/?phone=5511971943263&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Peça um Orçamento
                  <ArrowRight className="ml-2" size={20} />
                </a>
                <Link
                  to="/servicos"
                  className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 inline-flex items-center justify-center"
                >
                  Conheça Nossos Serviços
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-green-500">5+</div>
                  <div className="text-sm text-gray-400">Anos no Mercado</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-500">500+</div>
                  <div className="text-sm text-gray-400">Projetos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-500">100%</div>
                  <div className="text-sm text-gray-400">Satisfação</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80"
                alt="Sistema de Segurança"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-green-500/20">
                <div className="flex items-center space-x-3">
                  <Shield className="text-green-500" size={32} />
                  <div>
                    <div className="text-white font-semibold">Proteção 24/7</div>
                    <div className="text-gray-400 text-sm">Monitoramento contínuo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Revenda Intelbras', desc: 'Produtos originais e certificados' },
              { icon: Award, title: 'Equipe Especializada', desc: 'Profissionais qualificados' },
              { icon: Clock, title: 'Suporte Dedicado', desc: 'Atendimento rápido e eficaz' },
              { icon: CheckCircle, title: 'Desde 2020', desc: 'Inovação e qualidade' }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 transform hover:-translate-y-1">
                <item.icon className="text-green-500 mb-4" size={40} />
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80"
                alt="Sistema Digital"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">
                Nossas <span className="text-green-500">Soluções</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Na era da tecnologia, proteger o que mais importa vai além de câmeras e alarmes; é garantir tranquilidade, confiança e controle em cada detalhe. Com soluções de segurança eletrônica inteligentes, você transforma sua casa ou empresa em uma fortaleza digital, onde inovação e proteção caminham lado a lado.
              </p>
              <div className="space-y-4">
                {[
                  'Proteção Personalizada para cada cliente',
                  'Especialistas em instalação e suporte',
                  'Inovação com equipamentos Intelbras',
                  'Compromisso sólido desde 2020'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500" size={20} />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/servicos"
                className="inline-flex items-center bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105"
              >
                Saiba Mais
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Equipamentos de <span className="text-green-500">Primeira Linha</span>
            </h2>
            <p className="text-gray-400 text-lg">Câmeras, alarmes e fechaduras da marca Intelbras</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Câmeras', icon: Camera, img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500&q=80' },
              { title: 'Alarmes', icon: Shield, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80' },
              { title: 'Fechaduras', icon: Icons.Lock, img: 'https://images.unsplash.com/photo-1585504198199-20277593b94f?w=500&q=80' }
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6">
                  <div className="flex items-center space-x-3">
                    <item.icon className="text-green-500" size={28} />
                    <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/produtos"
              className="inline-flex items-center bg-green-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105"
            >
              Ver Todos os Produtos
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              O Que Nossos <span className="text-green-500">Clientes</span> Dizem
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-green-500 text-sm">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Nossos <span className="text-green-500">Clientes</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {clients.map((client) => (
              <div key={client.id} className="bg-white/5 p-6 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300 h-32">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;