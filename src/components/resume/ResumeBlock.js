import React from 'react';
import PropTypes from 'prop-types';

// MAKE BLOCK LOOK NICE WITH INFO

function ResumeBlock(props){
  return(
      <div className="resumeBlock">
        <h2>{props.heading}</h2>
      </div>
  )
}

// PropTypes
ResumeBlock.propTypes = {
  heading: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired,
}

export default ResumeBlock;
