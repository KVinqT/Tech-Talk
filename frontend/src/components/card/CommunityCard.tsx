'use client';
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import MoreGroupsModel from '../modelComponents/MoreGroupsModel';

const CommunityCard = () => {
  const [isJoined, setIsJoined] = React.useState(false);
  const communities: string[] = [
    'Java Developer Group',
    'Bangkok-IT Jobs',
    'Flutter Developer',
    'Swift and Objeactive C',
    'Next JS 14 Myanmar',
    'CLoud Engineering Group',
  ];
  const firstThreeCommunities = communities.slice(0, 3);

  return (
    <>
      {firstThreeCommunities.map((community: string) => {
        return (
          <Card className="max-w-[340px] max-h-full" key={community}>
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar isBordered radius="full" size="md" src="/" />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    {community}
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400">
                    189 members
                  </h5>
                </div>
              </div>
              <Button
                className="bg-transparent text-foreground border-default-200"
                color="primary"
                radius="full"
                size="sm"
                variant="bordered"
                onPress={() => setIsJoined(!isJoined)}
                key={community}
              >
                {isJoined ? 'Joined' : 'Join'}
              </Button>
            </CardHeader>
          </Card>
        );
      })}
      <div>
        <MoreGroupsModel />
      </div>
    </>
  );
};

export default CommunityCard;
