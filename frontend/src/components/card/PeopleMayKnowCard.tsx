import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { Card } from '@nextui-org/card';
import React from 'react';

const PeopleMayKnowCard = () => {
  return (
    <Card className="bg-[#1f1f1f] m-4 mb-3">
      <div className="flex p-2">
        <Avatar isBordered radius="full" size="sm" src="/" className="m-3" />
        <div className="flex flex-col items-start m-2">
          <h1 className="text-sm">Hlaing Tin Htun</h1>
          <p className="text-xs text-[#6b6b6b]">
            Full Stack software engineer at Fuji ...
          </p>
          <div className="flex w-full gap-4 items-center">
            <Button
              className="text-sm font-medium text-black bg-secondary mt-3"
              variant="flat"
              radius="lg"
              size="sm"
            >
              + Follow
            </Button>
            <Button
              className="text-sm font-medium text-white mt-3"
              variant="flat"
              radius="lg"
              size="sm"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PeopleMayKnowCard;
