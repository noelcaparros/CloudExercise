import React from 'react';
import { cx } from '@emotion/css';
import { Typography } from '@mui/material';
import * as classes from './body.styles';

interface Props {
  organization: string;
  className?: string;
}

export const ApplicationComponent: React.FC<Props> = (props) => {
  const { organization, className } = props;

  return (
    <div className={cx(classes.root, className)}>
      <Typography className={classes.title} variant="h2">
        Aplicación: {organization}
      </Typography>
    </div>
  );
};
