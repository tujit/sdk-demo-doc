import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import OAuthFlowDemo from '@site/src/components/OAuthFlowDemo';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          SDK documentation for implementing Cidaas OAuth flows - Authorization Code, PKCE, Implicit and Device Code.
          Available for JavaScript, PHP and Android.
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      description="Demo application for Cidaas PHP SDK showing various OAuth 2.0 flows">
      <HomepageHeader />
      <main>
        <div className="container">
          <div className={styles.demoSection}>
            <h2>Choose an OAuth flow</h2>
            <OAuthFlowDemo />
          </div>
        </div>
      </main>
    </Layout>
  );
}