import QuickstartDataSources from '../../components/QuickstartDataSources';
import { PageTools } from '@newrelic/gatsby-theme-newrelic';
import EmptyTab from '../../components/EmptyTab';
import { css } from '@emotion/react';

const DataSources = ({ quickstart }) => {
    return (
        <PageTools.Section>
            <h2>Data Sources &nbsp;
                <div
                    css={css`
                        display: inline-block;
                        background: #D6D6D6;
                    `}
                >
                    {quickstart.documentation.length}</div>
            </h2>

            {quickstart.documentation?.length > 0 ? (
                <QuickstartDataSources quickstart={quickstart} />
            ) : (
                <EmptyTab
                    quickstartUrl={quickstart.packUrl}
                    quickstartName={quickstart.title}
                    tabName="data sources"
                />
            )}
        </PageTools.Section>
    )
};

export default DataSources;