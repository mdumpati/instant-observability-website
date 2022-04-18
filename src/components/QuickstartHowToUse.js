import React from 'react';
import {
  Link,
  PageTools,
  RelatedResources,
} from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/react';
import { quickstart } from '../types';
import {
  LOGIN_LINK,
  SIGNUP_LINK,
} from '../data/constants';
import SupportSection from '../components/SupportSection';

const QuickstartHowToUse = ({
  quickstart,
  trackQuickstart,
  tessenSupportTrack,
}) => {
  return (
    <>
      <PageTools.Section>
        <div
          css={css`
            background-color: var(--divider-color);
            // position: absolute;
            top: 0;
            left: 0;
            padding: 1rem;
            padding-top: 0.5rem;
            height: 2.5rem;
            width: 100%;
          `}
        >
          <PageTools.Title>How to use this quickstart</PageTools.Title>
        </div>
        <ol
          css={css`
            margin-top: 2.5rem;
          `}
        >
          <li>
            <Link
              to={SIGNUP_LINK}
              onClick={trackQuickstart(
                'QuickstartDetailsSignUpClick',
                quickstart
              )}
            >
              Sign Up
            </Link>{' '}
            for a free New Relic account or{' '}
            <Link
              to={LOGIN_LINK}
              onClick={trackQuickstart(
                'QuickstartDetailsLoginClick',
                quickstart
              )}
            >
              Log In
            </Link>{' '}
            to your existing account.
          </li>
          <li>Click the green install button above.</li>
          <li>
            Install the quickstart to get started or improve how you monitor
            your environment. They’re filled with pre-built resources like
            dashboards, instrumentation, and alerts.
          </li>
        </ol>
      </PageTools.Section>

      <PageTools.Section>
        <PageTools.Title>Authors</PageTools.Title>
        <p>{quickstart.authors.join(', ')}</p>
      </PageTools.Section>
      <PageTools.Section>
        <PageTools.Title>Support</PageTools.Title>
        <SupportSection
          supportLevel={quickstart.level}
          onClick={tessenSupportTrack(quickstart)}
        />
      </PageTools.Section>
      <PageTools.Section>
        <RelatedResources
          css={css`
            padding: 0;
          `}
          resources={quickstart.relatedResources}
        />
      </PageTools.Section>
    </>
  );
};

QuickstartHowToUse.propTypes = {
  quickstart: quickstart.isRequired,
};

export default QuickstartHowToUse;
