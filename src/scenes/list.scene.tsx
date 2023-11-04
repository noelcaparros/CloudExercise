import React from 'react';
import { AppLayout } from 'layouts';
import { BodyContainer } from 'pods/body';

export const ListScene: React.FC = () => {
  return (
    <AppLayout>
      {({ className }) => <BodyContainer className={className} />}
    </AppLayout>
  );
};
