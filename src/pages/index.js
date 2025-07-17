import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Typewriter from '@site/src/components/Typewriter';
import GradientText from '@site/src/components/GradientText';
import BrowserWindow from '@site/src/components/BrowserWindow';
import Icon from '@site/src/components/Icon';
import IframeWindow from '@site/src/components/IframeWindow';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Slugmoon
        </Heading>
        <p className="hero__subtitle"><Typewriter text="Innovation starts here." loop delay={100} eraseDelay={40} /></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/intro">
            Jump into the Slugmoon Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Slugmoon Docs">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
