import React from 'react'
import './Avtar.css'
import PropTypes from 'prop-types'

const Avatar = ({ variant='default', alt='image', src, ...rest }) => {
  return (
    <img
      className={`image ${variant}`}
      alt={alt}
      src={src || 'https://qcekikwvowptfmzqtmxh.supabase.co/storage/v1/object/public/drootsimg/bookcategories/avtar.png'}
      {...rest}
    />
  );
};

Avatar.propTypes = {
  variant: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string,
};

export default Avatar;
