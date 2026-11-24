// 13 ta loyiha. URL lar deploy.mjs tomonidan src/data/urls.json ga avtomatik yoziladi.
import urls from './urls.json'

const base = [
  { slug: '01-savor-restoran', name: 'SAVOR', description: 'Restoran landing sahifasi: menyu, bron formasi.', category: 'HTML + CSS', stack: ['HTML', 'CSS'], hue: 20 },
  { slug: '02-qahva-house', name: 'QAHVA HOUSE', description: 'Qahvaxona sayti: ichimliklar va hikoya.', category: 'HTML + CSS', stack: ['HTML', 'CSS'], hue: 30 },
  { slug: '03-fitpro-gym', name: 'FITPRO GYM', description: 'Sport zal sayti: dasturlar va narxlar.', category: 'HTML + CSS', stack: ['HTML', 'CSS'], hue: 350 },
  { slug: '04-samarqand-sayohat', name: 'SAMARQAND', description: 'Samarqand bo‘ylab sayohat sahifasi.', category: 'HTML + CSS', stack: ['HTML', 'CSS'], hue: 195 },
  { slug: '05-todo-app', name: 'TO-DO APP', description: 'Vazifalar ro‘yxati, filtrlar va dark/light.', category: 'HTML+CSS+JS', stack: ['HTML', 'CSS', 'JavaScript'], hue: 45 },
  { slug: '06-kalkulyator', name: 'KALKULYATOR', description: 'Xavfsiz parser va tarixli kalkulyator.', category: 'HTML+CSS+JS', stack: ['HTML', 'CSS', 'JavaScript'], hue: 25 },
  { slug: '07-quiz-app', name: 'QUIZ APP', description: 'Taymerli 10 savollik viktorina.', category: 'HTML+CSS+JS', stack: ['HTML', 'CSS', 'JavaScript'], hue: 285 },
  { slug: '08-pomodoro-taymer', name: 'POMODORO', description: 'Fokus va tanaffus taymeri.', category: 'HTML+CSS+JS', stack: ['HTML', 'CSS', 'JavaScript'], hue: 0 },
  { slug: '09-krossovka-karta', name: 'KROSSOVKA KARTA', description: 'Savatcha, narx va layk bilan mahsulot kartasi.', category: 'REACT', stack: ['React', 'Tailwind'], hue: 22 },
  { slug: '10-kino-katalog', name: 'KINO KATALOG', description: 'Qidiruv, janr va sevimlilar bilan kinolar.', category: 'REACT', stack: ['React', 'Tailwind'], hue: 40 },
  { slug: '11-kanban-board', name: 'KANBAN BOARD', description: 'Drag-and-drop vazifalar doskasi.', category: 'REACT', stack: ['React', 'Tailwind'], hue: 150 },
  { slug: '12-byudjet-tracker', name: 'BYUDJET TRACKER', description: 'Daromad va xarajatlar hisobi.', category: 'REACT', stack: ['React', 'Tailwind'], hue: 160 },
  { slug: '13-lugat-flashcards', name: 'LUG‘AT KARTALARI', description: 'Ingliz-o‘zbek 3D flashcard o‘rganish.', category: 'REACT', stack: ['React', 'Tailwind'], hue: 270 },
]

export const projects = base.map((p) => ({ ...p, url: urls[p.slug] || '' }))
