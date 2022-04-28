import { gql } from '@apollo/client';

const query = gql`
  query {
    owner(id: "3dOFjMTpqIbjhXBeQ33VZd") {
      sys {
        id
      }
      name
      avatar(locale: "en-US") {
        url
      }
      titles
      contact
      about(locale: "en-US") {
        json
      }
      birthDate
      skills
    }
    experienceCollection {
      items {
        title
        company
        description(locale: "en-US") {
          json
        }
        durationInfo
      }
    }
    projectCollection {
      items {
        title
        cover(locale: "en-US") {
          url
        }
        description(locale: "en-US") {
          json
        }
        links
        isPublication
        publicationPlatform
      }
    }
  }
`;

export default query;
