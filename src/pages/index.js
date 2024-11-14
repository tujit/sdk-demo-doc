import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import OAuthFlowDemo from '@site/src/components/OAuthFlowDemo';
import styles from './index.module.css';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import SamplePhp from '!!raw-loader!../../docs/sdk-doc/oauth-flows/Sample.php';
import SampleJs from '!!raw-loader!../../docs/sdk-doc/oauth-flows/Sample.js';
import SampleGo from '!!raw-loader!../../docs/sdk-doc/oauth-flows/Sample.go';
import SampleAndroid from '!!raw-loader!../../docs/sdk-doc/oauth-flows/android.java';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title" style={{ textAlign: "left" }}>{siteConfig.title}</h1>
        <p className="hero__subtitle" style={{ textAlign: "left" }}>
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
            {/* <h2>Choose an OAuth flow</h2> */}
            {/* <OAuthFlowDemo /> */}
            <Tabs styles={{ Text: "left" }}>
              <TabItem value="js" label="Javascript" default>
                <CodeBlock language="jsx">{SampleJs}</CodeBlock>
              </TabItem>
              <TabItem value="php" label="PHP">
                <CodeBlock language="jsx">{SamplePhp}</CodeBlock>
              </TabItem>
              <TabItem value="go" label="Go">
                <CodeBlock language="jsx">{SampleGo}</CodeBlock>
              </TabItem>
              <TabItem value="kotlin" label="Android">
                <CodeBlock language="jsx">{SampleAndroid}</CodeBlock>
              </TabItem>
            </Tabs>
          </div>
        </div>
      </main>
    </Layout>
  );
}