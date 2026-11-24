// ============================================================
//  SITE DATA — barcha shaxsiy ma'lumotlar SHU YERDA tahrirlanadi.
//  Qiymat bo'sh ('' yoki []) bo'lsa, saytda aniq belgilangan
//  placeholder ko'rinadi. Hech narsa o'ylab topilmagan.
// ============================================================

export const profile = {
  name: '[YOUR NAME]',
  initials: '[YI]', // masalan: 'BB'
  profession: '[YOUR PROFESSION]',
  intro: '[YOUR INTRODUCTION]',
  age: '[YOUR AGE]',
  location: '[YOUR LOCATION]',
  experience: '[YOUR EXPERIENCE]',
  skillsSummary: '[YOUR SKILLS]',
  bio: '[WRITE ABOUT YOURSELF]',
  goals: '[YOUR GOALS]',
  photo: '', // masalan: '/photo.jpg'  (rasmni public/ papkasiga qo'ying)
}

export const contacts = {
  email: '', // '[YOUR EMAIL]'  -> masalan: 'you@mail.com'
  telegram: '', // masalan: 'https://t.me/username'
  github: '', // masalan: 'https://github.com/username'
  linkedin: '', // masalan: 'https://linkedin.com/in/username'
  instagram: '', // masalan: 'https://instagram.com/username'
}

export const contactPlaceholders = {
  email: '[YOUR EMAIL]',
  telegram: '[YOUR TELEGRAM]',
  github: '[YOUR GITHUB]',
  linkedin: '[YOUR LINKEDIN]',
  instagram: '[YOUR INSTAGRAM]',
}

// Kontakt forma haqiqatan yuborishi uchun Formspree (yoki shunga o'xshash)
// endpoint kiriting, masalan: 'https://formspree.io/f/xxxxxxx'
// Bo'sh qolsa — forma halol rejimda ishlaydi (xabar yuborilmaydi, buni aytadi).
export const FORM_ENDPOINT = ''

// Skills: level ataylab yo'q — foizlar o'ylab topilmaydi.
// "note" ni o'zingiz yozing, masalan: '2 yillik tajriba'.
export const skills = [
  { name: 'HTML5', note: '[NOTE]' },
  { name: 'CSS3', note: '[NOTE]' },
  { name: 'JavaScript', note: '[NOTE]' },
  { name: 'React', note: '[NOTE]' },
  { name: 'Tailwind CSS', note: '[NOTE]' },
  { name: 'UI/UX Design', note: '[NOTE]' },
  { name: 'Responsive Web Design', note: '[NOTE]' },
  { name: 'Animation', note: '[NOTE]' },
  { name: '3D Web Development', note: '[NOTE]' },
]

export const experienceBlocks = [
  { key: 'experience', title: 'Experience', placeholder: '[EXPERIENCE]', items: [] },
  { key: 'achievements', title: 'Achievements', placeholder: '[ACHIEVEMENTS]', items: [] },
  { key: 'certificates', title: 'Certificates', placeholder: '[CERTIFICATES]', items: [] },
  { key: 'education', title: 'Education', placeholder: '[EDUCATION]', items: [] },
]
// items namuna: [{ title: 'Frontend Developer', meta: '2025 — hozir', text: 'Qisqa tavsif' }]

const blank = (n) => {
  const num = String(n).padStart(2, '0')
  return {
    id: n,
    number: num,
    name: '',
    description: '',
    path: '', // Ichki sahifa manzili (masalan '/veloura') — bosilganda shu sahifa ochiladi
    url: '', // Tashqi (deploy qilingan) sayt manzili. path bo'lsa, path ustun
    github: '', // ixtiyoriy
    image: '', // masalan: '/projects/01.jpg'
    tech: [], // masalan: ['React', 'Tailwind']
    category: '',
    placeholders: {
      name: `[PROJECT ${num} NAME]`,
      description: `[PROJECT ${num} DESCRIPTION]`,
      url: `[PROJECT ${num} URL]`,
      image: `[PROJECT ${num} IMAGE]`,
      tech: '[TECH STACK]',
      category: '[CATEGORY]',
    },
  }
}

// Aniq 13 ta loyiha. Har birini alohida to'ldiring.
export const projects = [
  {
    ...blank(1),
    path: '/veloura',
    name: 'VELOURA',
    category: 'Luxury Fashion Atelier',
    description: 'Editorial hero, couture collection gallery, seasonal lookbook, heritage narrative & atelier footer.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    ...blank(2),
    path: '/estora',
    name: 'ESTORA',
    category: 'Modern Online Store',
    description: 'Interactive catalog, category filter, live cart drawer, wishlist likes, dark/light theme & card lift.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    ...blank(3),
    path: '/savora',
    name: 'SAVORA',
    category: 'Artisanal Gastronomy',
    description: 'Animated course switcher, interactive table reservation booking & guest reviews carousel.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    ...blank(4),
    path: '/lumora',
    name: 'LUMORA',
    category: 'Botanical Skincare',
    description: 'Floating product visuals, animated pastel mesh gradient, active botanical ingredients & reviews.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    ...blank(5),
    path: '/medora',
    name: 'MEDORA',
    category: 'Precision Medical Clinic',
    description: 'Animated 0–5000 counter stats, specialist directory, clinical services & appointment modal.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    ...blank(6),
    path: '/eduflow',
    name: 'EDUFLOW',
    category: 'Interactive E-Learning',
    description: '3D tilt course cards, student dashboard progress bars, mentors & live interactive skill quiz.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    ...blank(7),
    path: '/eventra',
    name: 'EVENTRA',
    category: 'Neon Events & Tickets',
    description: 'Live JS countdown timer, 3D interactive flip ticket pass, neon glow lines & keynote speakers.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    ...blank(8),
    path: '/terraform',
    name: 'TERRAFORM',
    category: 'Architectural Studio',
    description: 'Animated SVG blueprint stroke drawing, parallax spatial projects, design phases & inquiry.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    ...blank(9),
    path: '/pixelforge',
    name: 'PIXELFORGE',
    category: 'Cyber Game & Design Studio',
    description: 'Glitch typography, interactive cursor trail, animated pixel wave grid, portfolio & studio news.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    ...blank(10),
    path: '/frame',
    name: 'FRAME',
    category: 'Editorial Photography',
    description: 'Monochrome masonry gallery, category filtering, full-screen lightbox viewer & print order form.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    ...blank(11),
    path: '/autogrid',
    name: 'AUTOGRID',
    category: 'Performance Dealership',
    description: 'Speed-line motion hero, vehicle filters, side-by-side spec comparison table & finance calculator.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    ...blank(12),
    path: '/booknest',
    name: 'BOOKNEST',
    category: 'Independent Bookstore',
    description: 'CSS 3D opening book covers, horizontal shelf scroll, curated genres & featured author profiles.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    ...blank(13),
    path: '/verdant',
    name: 'VERDANT',
    category: 'Botanical & Ecology Store',
    description: 'Falling leaf particle motion, indoor plant catalog with soft hover lift, care guides & cart.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
  },
]

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
