import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import ReactMarkdown from 'react-markdown';

import { Link } from '@newrelic/gatsby-theme-newrelic';

const aTagToLink = ({
  // eslint-disable-next-line no-unused-vars
  node,
  ...props
}) => {
  return (
    <Link
      to={props.href}
      css={css`
        text-decoration: none;
      `}
      displayExternalIcon
    >
      {props.children}
    </Link>
  );
};

const H2TagToLink = ({
  node,
  ...props
}) => {
  return (
    <div
      css={css`
        background: #1D252C;
        color: #FFFFFF;
        font-family: Open Sans;
        font-size: 32px;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 0em;
        text-align: left;
      `}
    >
    <h2
      css={css`
        color: #FFFFFF;
      `}
    >
      {props.children}
    </h2>
    </div>
  );
};

const ImgTag = ({
  node,
  ...props
}) => {
  return (
    <img className='img-md' src={props.src} />
  );
};

const Ptag = ({
  node,
  ...props
}) => {
  const imgFiles = props.children?.filter(each => {
    if (typeof each === 'object') {
      // check if the key has 'img' in it
      if (each.key.includes('img')) {
        return each;
      }
    }
  });
  const textContent = props.children?.filter(each => {
    if (typeof each === 'string') {
      return each;
    }
  })
  return (
    <div
      className='d-flex-space-btw contains-img'
    >
      {textContent?.length > 0 && (
        <div className={imgFiles?.length > 0 && 'text-for-img'}>
          
          {props.children}
        </div>
      )}

      {imgFiles?.length > 0 && (
        <div className='img-beside-text'>
          {imgFiles?.length > 0 && imgFiles?.map(each => ImgTag(each.props))}
        </div>
      )}
    </div>
  )
}

const Markdown = ({ className, ...props }) => (
  <ReactMarkdown
    {...props}
    className={className}
    css={css`
      > *:first-child {
        margin-top: 0;
      }
    `}
    components={{
      a: aTagToLink,
      h2: H2TagToLink,
      p: Ptag,
      img: () => null,
    }}
  />
);

Markdown.propTypes = {
  className: PropTypes.string,
};

export default Markdown;
