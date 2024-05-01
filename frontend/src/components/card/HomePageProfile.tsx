'use client';
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';

export default function HomePageProfile() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="max-w-[340px] max-h-full mt-10 bg-primary">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              Thu Htet Htun
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              #Felix
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? 'bg-transparent text-foreground border-default-200'
              : ''
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? 'bordered' : 'solid'}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? 'Unfollow' : 'Follow'}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small h-full">
        <p>
          Senior Software Engineer and UI/UX enthusiast. Join me on this coding
          adventure!
        </p>
        <span className="pt-2">
          #CodingWith_Felix
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
        <div className="gap-3 flex mt-2">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">4</p>
            <p className=" text-default-400 text-small">Following</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">97.1K</p>
            <p className="text-default-400 text-small">Followers</p>
          </div>
        </div>
      </CardBody>
      <Divider className="max-w-[95%] m-auto mt-3" />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 before:rounded-xl rounded-large bottom-1 w-[calc(95%_-_8px)] shadow-small m-3 z-10">
        <p className="text-tiny text-white/80">My Profile</p>
        <Button
          className="text-sm font-medium text-black bg-secondary"
          variant="flat"
          radius="lg"
          size="sm"
        >
          View
        </Button>
      </CardFooter>
    </Card>
  );
}
