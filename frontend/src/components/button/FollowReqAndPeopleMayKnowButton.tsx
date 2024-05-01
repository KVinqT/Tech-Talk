import { Button } from '@nextui-org/button';
import React from 'react';

const FollowReqAndPeopleMayKnowButton = ({
  buttonText,
}: {
  buttonText: string;
}) => {
  return (
    <div className="flex justify-center items-center mb-6">
      <Button
        className="text-sm font-medium text-white mt-3 "
        variant="flat"
        radius="sm"
        size="sm"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default FollowReqAndPeopleMayKnowButton;
