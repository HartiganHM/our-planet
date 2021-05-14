import React from 'react';
import { CircleLoader } from '@f-design/component-library';

import './LoadingContainer.scss';

const LoadingContainer = () => (
  <div className="loading-container">
    <CircleLoader size="100px" />
  </div>
);

export default LoadingContainer;
