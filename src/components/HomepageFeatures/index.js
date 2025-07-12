import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fast yet Simple',
    // Svg: require('').default, // Removed this line
    description: (
      <>
        All Slugmoon Suite applications are designed to be fast and easy to use, allowing you to focus on your tasks without unnecessary complexity.
      </>
    ),
  },
  {
    title: 'Modern Design',
    // Svg: require('').default, // Removed this line
    description: (
      <>
        Slugmoon Suite applications feature a sleek, modern design that enhances user experience and productivity.
      </>
    ),
  },
  {
    title: 'Reliable and Secure',
    // Svg: require('').default, // Removed this line
    description: (
      <>
        Built with security in mind, Slugmoon Suite applications ensure your data is protected while providing reliable performance.
      </>
    )
  },
];

// Note: Svg is no longer destructured from props
function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {/* The following div and Svg component are removed */}
      {/*
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      */}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}



