import { Avatar } from '@nextui-org/avatar';
import React from 'react';
import { Image } from '@nextui-org/image';
import { Heart } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';
import { Send } from 'lucide-react';
import { Button } from '@nextui-org/button';
import { ArrowDownToLine } from 'lucide-react';
import { EllipsisVertical } from 'lucide-react';
import { Divider } from '@nextui-org/divider';

const PostsCard = () => {
  return (
    <div className="mt-4 rounded-xl bg-primary">
      <div className=" p-4 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 ">
            <Avatar isBordered radius="full" size="md" src="/" className="" />
            <div className="flex flex-col">
              <p className="lightText text-md text-[#646464]">@thuhtet17</p>
              <p className="font-medium">
                Thu Htet Htun <span>3 hour ago</span>
              </p>
            </div>
          </div>
          <div>
            <EllipsisVertical className="mr-2 cursor-pointer" />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm">
            We are actively looking for 𝗕𝗮𝗰𝗸𝗲𝗻𝗱 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿! 🔍 Backend Developer
            with proficiency in C# and .NET framework, and extensive experience
            with MySQL.
          </p>
        </div>
        <div className="mt-5">
          <div className="max-w-full">
            <Image
              isZoomed
              className="w-[700px] h-[300px]"
              alt="NextUI Fruit Image with Zoom"
              src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
            />
          </div>
          <div className="mt-6 flex justify-between">
            <div className="flex gap-4">
              <div>
                <Heart />
                <p></p>
              </div>
              <MessageCircleMore />
              <Send />
            </div>
            <div className="flex items-center gap-4">
              <Button
                className="text-sm font-medium text-white bg-[#D04407]"
                variant="flat"
                radius="md"
                size="sm"
              >
                <ArrowDownToLine size={20} />
                Download CV
              </Button>
              <Button
                className="text-sm font-medium text-black bg-secondary"
                variant="flat"
                radius="md"
                size="sm"
              >
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsCard;
