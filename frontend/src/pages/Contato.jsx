import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { contactInfo } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Redirecionar para WhatsApp com mensagem pré-preenchida
    const message = `Olá! Meu nome é ${formData.name}.%0A%0AAssunto: ${formData.subject}%0A%0AMensagem: ${formData.message}%0A%0AContato: ${formData.email} / ${formData.phone}`;
    window.open(`https://api.whatsapp.com/send/?phone=5511971943263&text=${message}&type=phone_number&app_absent=0`, '_blank');
    
    toast({
      title: 'Mensagem enviada!',
      description: 'Redirecionando para WhatsApp...',
    });

    // Limpar formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Entre em <span className="text-green-500">Contato</span>
            </h1>
            <p className="text-gray-300 text-lg">Estamos prontos para atender você</p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Fale Conosco</h2>
                <p className="text-gray-300 mb-8">
                  Nossa equipe está pronta para atender suas necessidades de segurança eletrônica. Entre em contato conosco!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/10">
                  <div className="bg-green-500/10 p-3 rounded-lg">
                    <Phone className="text-green-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Telefone</h3>
                    <p className="text-gray-400">(11) 97194-3263</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/10">
                  <div className="bg-green-500/10 p-3 rounded-lg">
                    <Mail className="text-green-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">E-mail</h3>
                    <p className="text-gray-400">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/10">
                  <div className="bg-green-500/10 p-3 rounded-lg">
                    <MapPin className="text-green-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Localização</h3>
                    <p className="text-gray-400">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/10">
                  <div className="bg-green-500/10 p-3 rounded-lg">
                    <Clock className="text-green-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-400">Seg - Sex: 8h às 18h</p>
                    <p className="text-gray-400">Sáb: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-green-500/10">
              <h2 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Nome Completo</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Telefone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Assunto</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Mensagem</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors resize-none"
                    placeholder="Descreva sua necessidade..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 text-black py-4 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;