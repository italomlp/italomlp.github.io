const skills = require('./skills');
const jobs = require('./jobs');

module.exports = {
  siteTitle: 'Italo Menezes',
  siteDescription:
    'Site de Italo Menezes para apresentação de skills, experiências e contatos.',
  authorName: 'Italo Menezes',
  authorAvatar: '/images/avatar.jpg',
  authorDescription:
    'Me chamo Italo Menezes. Tenho 21 anos e moro no interior de Pernambuco.' +
    'Trabalho como MEAN Stack (com AngularJS e Angular 2+) há mais de 2 anos, em vários sistemas,' +
    'envolvendo CRUDs dos mais simples aos mais complexos, aplicados principalmente em dashboards.' +
    'Curso Ciência da Computação, e tenho contato com Java 7, com padrões de design e boas práticas.' +
    'Atualmente, estou me aprofundando em React Native, ReatJS e todo o ecossistema em torno dessas' +
    'tecnologias. Já domino um pouco React Native, tendo feito um projeto acadêmico, projetos específicos' +
    'para o curso da RocketSeat (onde estou estudando), trabalhando com isso atualmente e caminhando' +
    'com um projeto pessoal. Faço uso de Redux e afins também.' +
    'No mais, sou apaixonado por código, café e javascript!',
  social: {
    twitterUsername: 'italomlp',
    twitter: 'https://twitter.com/italomlp',
    linkedin: 'https://www.linkedin.com/in/italomlp',
    githubUsername: 'italomlp',
    github: 'https://github.com/italomlp',
    devTo: 'https://dev.to/italomlp',
    email: 'italomlporoca@hotmail.com',
    secondaryEmail: 'contato@italomlp.com',
  },
  siteUrl: 'https://www.italomlp.com',
  pathPrefix: '/',
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-114612231-1',
  backgroundColor: '#ffffff',
  themeColor: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/icon.png',
  headerLinks: [
    {
      label: 'Italo Menezes',
      url: '/',
    },
    {
      label: 'Posts',
      url: '/posts',
    },
  ],
  skills,
  jobs,
};