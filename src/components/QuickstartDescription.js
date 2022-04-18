import React from 'react';
import { css } from '@emotion/react';
import { quickstart } from '../types';
import Markdown from './Markdown';

const allowedElements = [
  'h1',
  'h2',
  'h3',
  'ol',
  'ul',
  'li',
  'p',
  'blockquote',
  'code',
  'a',
  'strong',
  'em',
  'hr',
];

const QuickstartDescription = ({ quickstart }) => {
  return (
    <>
      {quickstart.description && (
        <div
          css={css`
            h1,
            h2,
            h3 {
              margin: 1em 0 0.25em 0;
            }
            p,
            pre {
              margin-left: 1em;
            }
            h1,
            h2 {
              font-size: 1.5em;
              font-weight: 600;
            }
            h3 {
              font-size: 1.2em;
            }
          `}
        >
          <Markdown
            skipHtml
            allowedElements={allowedElements}
            css={css`
              margin: 2em 0;
            `}
          >
            {quickstart.description}
          </Markdown>
        </div>
      )}
    </>
  );
};

QuickstartDescription.propTypes = {
  quickstart: quickstart.isRequired,
};

export default QuickstartDescription;
