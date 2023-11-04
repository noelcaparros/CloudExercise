import React from 'react';
import { envConstants } from 'core/constants';
import { ApplicationComponent } from './body.component';

interface Props {
  className?: string;
}

export const BodyContainer: React.FC<Props> = (props) => {
  const { className } = props;
  const [application] = React.useState(envConstants.APPLICATION);

  return (
    <ApplicationComponent className={className} organization={application} />
  );
};
