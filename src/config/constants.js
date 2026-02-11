export const DISCORD_INVITE_URL = 'https://discord.com/oauth2/authorize?client_id=1225046668404330496';
export const GITHUB_URL = 'https://github.com/newman-agent/newman-bot.git';
export const LINKEDIN_URL = 'https://linkedin.com/in/lucas-henry-6252391a3';
export const BUY_ME_COFFEE_URL = 'https://buymeacoffee.com/henrylucasx';

export const LANGUAGES = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export const COMMANDS = [
  {
    name: 'chat',
    aliases: ['conversar', 'c'],
    usage: '!chat <message>',
    category: 'chat',
    cooldown: 3,
    description: {
      en: 'Chat with AI (supports images)',
      pt: 'Conversa com a IA (suporta imagens)',
      es: 'Chatea con IA (soporta imágenes)',
    },
    examples: [
      '!chat What is quantum computing?',
      '!chat [with image attached] What do you see?',
    ],
  },
  {
    name: 'analyze',
    aliases: ['analisar', 'img', 'image'],
    usage: '!analyze [question]',
    category: 'analysis',
    cooldown: 5,
    description: {
      en: 'Analyzes images in detail',
      pt: 'Analisa imagens detalhadamente',
      es: 'Analiza imágenes en detalle',
    },
    examples: [
      '!analyze Is this image manipulated?',
      '!analyze [with meme] Explain this meme',
    ],
  },
  {
    name: 'search',
    aliases: ['buscar', 's'],
    usage: '!search <query>',
    category: 'search',
    cooldown: 5,
    description: {
      en: 'Search web with fact-checking',
      pt: 'Busca na web com verificação de fatos',
      es: 'Busca en la web con verificación de hechos',
    },
    examples: [
      '!search climate change recent studies',
      '!search Bitcoin current price',
    ],
  },
  {
    name: 'verify',
    aliases: ['verificar', 'check', 'v'],
    usage: '!verify <claim>',
    category: 'verification',
    cooldown: 5,
    description: {
      en: 'Verifies if a claim is true',
      pt: 'Verifica se uma afirmação é verdadeira',
      es: 'Verifica si una afirmación es verdadera',
    },
    examples: [
      '!verify Vaccines cause autism',
      '!verify The Earth is flat',
    ],
  },
  {
    name: 'help',
    aliases: ['ajuda', 'h', '?'],
    usage: '!help',
    category: 'utility',
    cooldown: 0,
    description: {
      en: 'Shows command list',
      pt: 'Mostra lista de comandos',
      es: 'Muestra lista de comandos',
    },
    examples: ['!help'],
  },
];
