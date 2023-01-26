import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Built on L2 Ethereum Scaling Networks',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Buy and Sell NFTs on L2
      </>
    ),
  },
  {
    title: 'Global Community',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        NFTEarth has been created in response to a marketplace closing, and has been engineered from the ground up to be a sustainable NFT project that contributes to the long-term success of NFTs on Layer2.
      </>
    ),
  },
  {
    title: 'Fast and Low-Cost Transactions',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Layer2 Ethereum networks inherit the security of Ethereum Mainnet while at the same time provide a way to significantly reduce transaction costs.
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
        <h3>{title}</h3>
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
