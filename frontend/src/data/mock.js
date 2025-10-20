// Mock data para Rel-Tech

export const contactInfo = {
  phone: '5511971943263',
  email: 'contato@reltech.com.br',
  whatsapp: 'https://api.whatsapp.com/send/?phone=5511971943263&text&type=phone_number&app_absent=0',
  address: 'São Paulo e Guarulhos - SP'
};

export const services = [
  {
    id: 1,
    title: 'Instalação de Câmeras',
    description: 'Sistemas completos de CFTV com câmeras de alta resolução para monitoramento 24h',
    icon: 'Camera'
  },
  {
    id: 2,
    title: 'Instalação de Alarmes e Sensores',
    description: 'Sistemas de alarme inteligentes com sensores de movimento e abertura',
    icon: 'ShieldAlert'
  },
  {
    id: 3,
    title: 'Instalação de Fechaduras',
    description: 'Fechaduras digitais e biométricas para maior segurança e controle de acesso',
    icon: 'Lock'
  },
  {
    id: 4,
    title: 'Cabeamento Estruturado',
    description: 'Infraestrutura de rede completa para empresas e residências',
    icon: 'Cable'
  },
  {
    id: 5,
    title: 'Interfonia Residencial',
    description: 'Sistemas de interfone e vídeo porteiro para maior comodidade',
    icon: 'Phone'
  },
  {
    id: 6,
    title: 'Detecção de Incêndio',
    description: 'Sistemas de detecção e alarme de incêndio para proteção total',
    icon: 'Flame'
  },
  {
    id: 7,
    title: 'Controle de Acesso',
    description: 'Sistemas de controle de entrada e saída com catracas e biometria',
    icon: 'Fingerprint'
  },
  {
    id: 8,
    title: 'Contrato de Manutenção',
    description: 'Manutenção preventiva e corretiva de todos os equipamentos de segurança',
    icon: 'Wrench'
  }
];

export const products = {
  cameras: [
    {
      id: 1,
      name: 'Câmera IP VIP 1020 B',
      category: 'Câmeras',
      description: 'Câmera Bullet IP HD 720p, infravermelho 20m, lente 3.6mm',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500&q=80'
    },
    {
      id: 2,
      name: 'Câmera VIP 1020 D',
      category: 'Câmeras',
      description: 'Câmera Dome IP HD 720p, infravermelho 20m, proteção IP66',
      image: 'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?w=500&q=80'
    },
    {
      id: 3,
      name: 'Câmera VIP 3020',
      category: 'Câmeras',
      description: 'Câmera IP Full HD 1080p, visão noturna avançada, PoE',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=500&q=80'
    }
  ],
  alarms: [
    {
      id: 4,
      name: 'Alarme AMT 2018',
      category: 'Alarmes',
      description: 'Central de alarme 18 zonas, monitoramento via app',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80'
    },
    {
      id: 5,
      name: 'Alarme AMT 2010',
      category: 'Alarmes',
      description: 'Central de alarme 10 zonas, conexão GSM/GPRS',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80'
    },
    {
      id: 6,
      name: 'Alarme AMT 4010',
      category: 'Alarmes',
      description: 'Central de alarme profissional 10 zonas com 4 partições',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&q=80'
    }
  ],
  locks: [
    {
      id: 7,
      name: 'Fechadura Digital FR 201',
      category: 'Fechaduras',
      description: 'Fechadura digital com senha e cartão, até 500 usuários',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80'
    },
    {
      id: 8,
      name: 'Fechadura FR 101',
      category: 'Fechaduras',
      description: 'Fechadura digital básica com senha, fácil instalação',
      image: 'https://images.unsplash.com/photo-1585504198199-20277593b94f?w=500&q=80'
    },
    {
      id: 9,
      name: 'Fechadura FR 300',
      category: 'Fechaduras',
      description: 'Fechadura biométrica com senha e impressão digital',
      image: 'https://images.unsplash.com/photo-1614332625430-46aabb652df7?w=500&q=80'
    }
  ],
  accessControl: [
    {
      id: 10,
      name: 'Controle SS 3510',
      category: 'Controle de Acesso',
      description: 'Controlador de acesso 2 portas, 10.000 usuários',
      image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=500&q=80'
    },
    {
      id: 11,
      name: 'Controle SS 5020',
      category: 'Controle de Acesso',
      description: 'Controlador profissional 4 portas com biometria',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=500&q=80'
    },
    {
      id: 12,
      name: 'Control iD',
      category: 'Controle de Acesso',
      description: 'Sistema completo de controle facial e biometria',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&q=80'
    }
  ],
  recorders: [
    {
      id: 13,
      name: 'Gravador MHDX 1104',
      category: 'Gravadores',
      description: 'DVR 4 canais Multi HD, acesso remoto via app',
      image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=500&q=80'
    },
    {
      id: 14,
      name: 'Gravador MHDX 1108',
      category: 'Gravadores',
      description: 'DVR 8 canais Multi HD, detecção inteligente',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&q=80'
    },
    {
      id: 15,
      name: 'Gravador MHDX 1116',
      category: 'Gravadores',
      description: 'DVR 16 canais Multi HD, armazenamento SSD',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=500&q=80'
    }
  ]
};

export const testimonials = [
  {
    id: 1,
    name: 'Genário Santos',
    company: 'GNA TRANSPORTES',
    text: 'Precisava de um sistema de segurança no meu galpão, e a Rel-Tech atendeu a minha demanda, oferecendo câmeras de qualidade e gravadores. Serviço nota 10!!',
    avatar: 'https://ui-avatars.com/api/?name=Genario+Santos&background=22c55e&color=fff'
  },
  {
    id: 2,
    name: 'Edgard Leite',
    company: 'CUBE OFFICE',
    text: 'Agradeço à Rel-Tech pelo ótimo trabalho no Cube Office. Serviço profissional, suporte excelente e soluções de alta qualidade. Recomendo!',
    avatar: 'https://ui-avatars.com/api/?name=Edgard+Leite&background=22c55e&color=fff'
  },
  {
    id: 3,
    name: 'Ronaldo Campestre',
    company: 'DROGARIA FARMAIS',
    text: 'Trabalho com a Rel-Tech há dois anos, sempre que tenho uma necessidade eles me atendem. Atendimento muito eficaz, equipe comprometida.',
    avatar: 'https://ui-avatars.com/api/?name=Ronaldo+Campestre&background=22c55e&color=fff'
  }
];

export const clients = [
  { id: 1, name: 'Cube Office', logo: 'https://customer-assets.emergentagent.com/job_12fec467-b7c6-4eb9-b984-00acb218c576/artifacts/0qh73xbu_IMG_9068.png' },
  { id: 2, name: 'Prefeitura Mogi das Cruzes', logo: 'https://static.wixstatic.com/media/a55d92_4857f0aee8164263afa0b2c5995a9840~mv2.jpg' },
  { id: 3, name: 'USP', logo: 'https://static.wixstatic.com/media/a55d92_76e2565d456d439d8f9f02965170402e~mv2.png' },
  { id: 4, name: 'W3 Ambiental', logo: 'https://static.wixstatic.com/media/a55d92_58eb3f8b59694d228c88bb185ec931f4~mv2.jpeg' },
  { id: 5, name: 'Unimed', logo: 'https://static.wixstatic.com/media/a55d92_2e213a46cf5a4343956ff2d76d37291d~mv2.png' }
];

export const projects = [
  {
    id: 1,
    title: 'Universidade de São Paulo - USP',
    description: 'Instalação de Fechadura de Embutir no Campus USP',
    equipment: 'Modelo: FD 3000 | Marca: Intelbras',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80'
  },
  {
    id: 2,
    title: 'Reset Madeira Ecológica',
    description: 'Instalação de Porteiro Empresarial com Botoeira de Acionamento',
    equipment: 'Modelo: IPR 1010 | Marca: Intelbras',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80'
  },
  {
    id: 3,
    title: 'Escolas Municipais de São Paulo',
    description: 'Projeto CFTV escolas municipais de São Paulo',
    equipment: 'Modelo: Varifocal IDS-2CD7A46G0-P-IZHS | Marca: Hikvision',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80'
  },
  {
    id: 4,
    title: 'Condomínio Pleno Santa Cruz',
    description: 'Instalação de Roteadores Empresariais nas dependências do Condomínio',
    equipment: 'Modelo: AP 360 | Marca: Intelbras',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80'
  },
  {
    id: 5,
    title: 'Ritmo Visual Filmes',
    description: 'Instalação de Kit CFTV de 04 câmeras com porteiro e fechadura',
    equipment: 'Modelo: IFR 7001; IPR 1010 | Marca: Intelbras',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80'
  },
  {
    id: 6,
    title: 'Babae Gelato',
    description: 'Instalação CFTV, alarme e som ambiente na Gelateria',
    equipment: 'Modelo: Bullet e Dome | Marca: Intelbras',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80'
  },
  {
    id: 7,
    title: 'Cliente Rel-Tech (Isabela)',
    description: 'Instalação de Automatizador de Portão em residência',
    equipment: 'Modelo: DR 400 | Marca: Intelbras',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80'
  }
];