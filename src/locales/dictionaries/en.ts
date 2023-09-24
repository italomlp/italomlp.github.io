export default {
  header: {
    hero: 'Hero',
    about: 'About',
    experience: 'Experience',
    portfolio: 'Portfolio',
    changeLang: 'Change language',
    toggleTheme: 'Toggle theme',
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
