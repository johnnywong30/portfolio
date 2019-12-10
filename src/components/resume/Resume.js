import React from 'react';
import PropTypes from 'prop-types';
import ResumeBlock from './ResumeBlock';
import uuid from 'uuid';

function Resume(props){
  const data = props.data;
  const dataBlocks = data.map(prop => (
    <ResumeBlock key={uuid.v4()} heading={prop.heading} info={prop.info} />
  ));
  console.log(dataBlocks);
  return(
    <div className="resumeContainer">
      {dataBlocks}
    </div>
  );
}

// PropTypes
Resume.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Resume;
