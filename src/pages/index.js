import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'SOLID',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        DevArchitecture is a software development infrastructure that adopts
        CQRS (Command Query Responsibility Segregation) approach and 
        focuses on SOLID principles and Clean Architecture methods. 
        RabbitMq is very skilled in integrating with ElasticSearch, etc.
      </>
    ),
  },
  {
    title: 'Clean Code',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        DevArchitecture is a software development infrastructure that adopts
        CQRS (Command Query Responsibility Segregation) approach and 
        focuses on SOLID principles and Clean Architecture methods. 
        RabbitMq is very skilled in integrating with ElasticSearch, etc.
      </>
    ),
  },
  {
    title: 'Plug and Play Architecture',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        DevArchitecture is a software development infrastructure that adopts
        CQRS (Command Query Responsibility Segregation) approach and 
        focuses on SOLID principles and Clean Architecture methods. 
        RabbitMq is very skilled in integrating with ElasticSearch, etc.
      </>
    ),
  }, 
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Open Source Rapid Application Framework for .Net 5">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
