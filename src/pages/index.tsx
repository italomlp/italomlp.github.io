import Head from 'next/head';

import { client } from '@/apollo';
import QUERY from '@/query';
import styles from '@/styles/Home.module.css';

export default function Home({ experiences, projects, owner }: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Query GraphQL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Owner</h1>
      <div style={{ maxWidth: '90vw' }}>
        <pre>{JSON.stringify(owner, null, 2)}</pre>
      </div>
      <h1>Experiences</h1>
      <div>
        {experiences.map((experience: any) => (
          <div key={experience.title}>
            {experience.title} - {experience.company}
          </div>
        ))}
      </div>
      <h1>Projects</h1>
      <div>
        {projects.map((project: any) => (
          <div key={project.title}>
            {project.title} -{' '}
            {project.isPublication ? 'Publication' : 'Not Publication'}
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: QUERY,
  });
  return {
    props: {
      experiences: data.experienceCollection.items,
      projects: data.projectCollection.items,
      owner: data.owner,
    },
  };
}
