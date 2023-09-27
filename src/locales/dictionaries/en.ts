export default {
  meta: {
    title: 'Website',
    description:
      'This is my personal website, where I share my projects, experiences, and a little about me.',
  },
  header: {
    hero: 'Hero',
    about: 'About',
    experience: 'Experience',
    portfolio: 'Portfolio',
    changeLang: 'Change language',
    toggleTheme: 'Toggle theme',
    openMenuTextSR: 'Open menu',
    closeMenuTextSR: 'Close menu',
  },
  main: {
    backToTop: 'Back to top',
  },
  hero: {
    greeting: "Hi! I'm {name}!",
    avatarAlt: "{name}'s avatar",
  },
  about: {
    title: 'About me',
    location: 'Open in Google Maps',
  },
  experience: {
    title: 'Experience',
    description: 'These are some of my last experiences',
    callToAction: 'To see more, you can check my',
    profile: 'LinkedIn profile',
    checkMore: 'Check more at my LinkedIn profile',
    tillToday: 'today',
  },
  portfolio: {
    title: 'Portfolio',
    description: 'These are a few highlighted projects',
    callToAction: 'To see more, you can check my',
    profile: 'Github profile',
    checkMore: 'Check more at my Github profile',
  },
} as const;
