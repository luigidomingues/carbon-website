import React from 'react';
import { Icon } from 'carbon-components-react';
import FeatureTile from '../FeatureTile';
import { Link } from 'gatsby';

export class HomepageHeader extends React.Component {
  componentDidMount() {
    document.title = 'Carbon Design System';
  }

  render() {
    const { GATSBY_CARBON_ENV } = process.env;
    const isInternal = GATSBY_CARBON_ENV == 'internal';

    // Banner image
    const bannerImg = require('../../content/homepage/images/homepage-placeholder-img.png');

    const homeTitle = isInternal ? (
      <h3 className="homepage--header__title">
        IBM Product <br />
        Design System
      </h3>
    ) : (
      <h3 className="homepage--header__title">
        Carbon <br />
        Design System
      </h3>   
    );

    return (
      <div>
        <span className="homepage--dots" />
        <section className="ibm--row homepage--header">
          <div className="ibm--col-lg-4 ibm--offset-lg-4">
            {homeTitle}
          </div>
          <img src={bannerImg} alt="IBM Product Design System banner image" />
        </section>
        <div className="homepage--callout">
          <div className="ibm--grid">
            <div className="ibm--row">
              <div className="ibm--col-lg-4 ibm--offset-lg-4">
                <h3>
                  Formerly known <br /> as Carbon
                </h3>
              </div>
              <div className="ibm--col-lg-8">
                <h2>
                  <strong>Carbon Design System</strong> si amet finibus consectetur
                  adipsicing elit.
                </h2>
                <h2>
                  Our system is built on the{' '}
                  <a href="https://www.ibm.com/design/language/">IBM Design Language</a>{' '}
                  foundation as a resource for designers and developers. This collection
                  of UI components, guidelines, code, and tooling ensures IBM products
                  share a unified user experience.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class HomepageFooter extends React.Component {
  render() { 
    return (       
      <div className="homepage--callout homepage--callout--blue">
        <div className="ibm--grid">
          <div className="ibm--row">
            <div className="ibm--col-lg-4 ibm--offset-lg-4">
              <h3>
                Wondering how <br />
                to contribute?
              </h3>
            </div>
            <div className="ibm--col-lg-8">
              <div className="homepage--footer__info">
                <h2>
                  We welcome all feedback, designs, or ideas in order to produce
                  the best possible experience for our users. If you're interested
                  in contributing, check out our contributing guidelines to get
                  started.
                </h2>
                <Link to="/contributing" alt="Start contributing">
                  Start contributing
                  <Icon
                    name="icon--arrow--right"
                    alt="start contributing icon"
                    width="20"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}