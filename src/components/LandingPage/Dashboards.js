import { PageTools } from '@newrelic/gatsby-theme-newrelic';
import { quickstart } from '../../types';
import QuickstartDashboards from '../../components/QuickstartDashboards';
import EmptyTab from '../../components/EmptyTab';
import { css } from '@emotion/react';

const Dashboards = ({ quickstart }) => {

    return (
        <PageTools.Section>
            <h1>
                What&apos;s included?
            </h1>
            <br />
            <h2>Dashboard
                &nbsp;
                <div
                    css={css`
                        display: inline-block;
                        background: #D6D6D6;
                    `}
                >
                    {quickstart.dashboards.length}</div>
            </h2>

            {quickstart.dashboards?.length > 0 ? (
                <QuickstartDashboards quickstart={quickstart} />
            ) : (
                <EmptyTab
                    quickstartUrl={quickstart.packUrl}
                    quickstartName={quickstart.title}
                    tabName="dashboards"
                />
            )}
        </PageTools.Section>
    );
};

Dashboards.propTypes = {
    quickstart: quickstart.isRequired,
};

export default Dashboards;