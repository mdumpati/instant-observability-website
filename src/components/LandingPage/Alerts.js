import { PageTools } from '@newrelic/gatsby-theme-newrelic';
import QuickstartAlerts from '../../components/QuickstartAlerts';
import EmptyTab from '../../components/EmptyTab';
import { css } from '@emotion/react';

const Alerts = ({ quickstart }) => {

    return (
        <PageTools.Section>
            <h2>Alerts &nbsp;
                <div
                    css={css`
                        display: inline-block;
                        background: #D6D6D6;
                    `}
                >
                    {quickstart.alerts.length}</div>
            </h2>

            {quickstart.alerts?.length > 0 ? (
                <QuickstartAlerts quickstart={quickstart} />
            ) : (
                <EmptyTab
                    quickstartUrl={quickstart.packUrl}
                    quickstartName={quickstart.title}
                    tabName="alerts"
                />
            )}
        </PageTools.Section>
    )
};

export default Alerts;