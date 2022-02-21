import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { CircularProgressbarWrapperProps } from 'react-circular-progressbar/dist/types';
import 'react-circular-progressbar/dist/styles.css';
import theme from '../theme';

const ProgressCircle: React.FC<CircularProgressbarWrapperProps> = (props) => {
  return (
    <CircularProgressbarWithChildren
      strokeWidth={4}
      styles={{
        path: {
          stroke: theme.palette.primary.main,
        },
        trail: {
          stroke: '#414141',
          strokeWidth: 1,
        },
      }}
      {...props}
    />
  );
};

export default ProgressCircle;
