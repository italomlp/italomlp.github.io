import React from 'react';

import { Container, Avatar, Content } from './styles';

export default function Resume() {
  return (
    <Container>
      <Content>
        <Avatar src="assets/profile.jpeg" alt="Profile" />
        <div>
          Me chamo Italo Menezes. Tenho 22 anos e moro no interior de
          Pernambuco. Trabalho como MEAN Stack (com AngularJS e Angular 2+) há
          mais de 2 anos, em vários sistemas, envolvendo CRUDs dos mais simples
          aos mais complexos, aplicados principalmente em dashboards. Curso
          Ciência da Computação, e tenho contato com Java 7, com padrões de
          design e boas práticas. Atualmente, estou me aprofundando em React
          Native, ReatJS e todo o ecossistema em torno dessas tecnologias. Já
          domino um pouco React Native, tendo feito um projeto acadêmico,
          projetos específicos para o curso da RocketSeat (onde estou
          estudando), trabalhando com isso atualmente e caminhando com um
          projeto pessoal. Faço uso de Redux e afins também. No mais, sou
          apaixonado por código, café e javascript!
        </div>
      </Content>
    </Container>
  );
}
