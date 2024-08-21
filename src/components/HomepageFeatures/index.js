import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'One Click Install',
    Svg: require('@site/static/img/undraw_press_play.svg').default,
    description: (
      <>
        Shinobi-Code is a webapp, no need to download any dependencies.
        Zero headaches with PIP/NPM.
      </>
    ),
  },
  {
    title: 'Fast and Feature Rich',
    Svg: require('@site/static/img/undraw_outer_space.svg').default,
    description: (
      <>
        Perform a variety of Jutsus as seen in Naruto anime.
        Instantly detects and is lightweight on memory.
      </>
    ),
  },
  {
    title: 'Do you need Help?',
    Svg: require('@site/static/img/undraw_questions.svg').default,
    description: (
      <>
        Are you encountering problems? Then you can create an issue or discussion topic on GitHub so that others can help you.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
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
