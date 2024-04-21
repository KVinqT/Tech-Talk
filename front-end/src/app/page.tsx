import NavBar from '@/components/navbar/NavBar';
import HomePageProfile from '@/components/card/HomePageProfile';
import ProfileTooltip from '@/components/tooltip/ProfileTooltip';
import CommunityCard from '@/components/card/CommunityCard';
import { Avatar } from '@nextui-org/avatar';
import CreatePostModel from '@/components/modelComponents/CreatePostModel';
import { Image } from 'lucide-react';
import { SquarePlay } from 'lucide-react';
import { Laugh } from 'lucide-react';
import PostsCard from '@/components/card/PostsCard';
import PeopleMayKnowCard from '@/components/card/PeopleMayKnowCard';
import { Divider } from '@nextui-org/divider';
import FollowRequestCard from '@/components/card/FollowRequestCard';
import FollowReqAndPeopleMayKnowButton from '@/components/button/FollowReqAndPeopleMayKnowButton';

export default function Home() {
  const skills: string[] = [
    'Figma',
    'React-Native',
    'Nest JS',
    'Next JS',
    'Node JS',
    'Java',
    'Spring',
    'PostgresSQL',
    'MongoDB',
  ];
  return (
    <div>
      <NavBar />
      <div className="max-w-[95%] m-auto justify-center h-full mt-12">
        <div className="w-full flex gap-8">
          <div className="max-w-[25%] overflow-hidden">
            <HomePageProfile />
            <h1 className="mt-4 font-semibold text-lg">Tech Stacks</h1>
            <span className="flex flex-wrap gap-2 mt-4">
              {skills.map((skill) => {
                return <ProfileTooltip value={skill} key={skill} />;
              })}
            </span>
            <h1 className="mt-6 font-semibold text-lg">Communities</h1>
            <CommunityCard />
          </div>
          <div className="w-[47%] mt-10">
            <div className="rounded-xl bg-[#282828] flex-col items-center">
              <div className="p-6">
                <div className="flex items-center w-full justify-between">
                  <Avatar
                    isBordered
                    radius="full"
                    size="md"
                    src="/"
                    className=""
                  />
                  <CreatePostModel />
                </div>
                <div className="flex justify-evenly items-center mt-5">
                  <div className="bg-[#222222] rounded-xl">
                    <span className="flex justify-center items-center gap-2 px-5 py-2">
                      <Image color="#20DF9B" size={22} />
                      <p className="mediumText text-sm">Photo</p>
                    </span>
                  </div>
                  <div className="bg-[#222222] rounded-xl">
                    <span className="flex justify-center items-center gap-2 px-5 py-2">
                      <SquarePlay color="#5094FA" size={22} />
                      <p className="mediumText text-sm">Video</p>
                    </span>
                  </div>
                  <div className="bg-[#222222] rounded-xl">
                    <span className="flex justify-center items-center gap-2 px-5 py-2">
                      <Laugh color="#EAB026" size={22} />
                      <p className="mediumText text-sm">Feeling</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <PostsCard />
            <PostsCard />
            <PostsCard />
            <PostsCard />
            <PostsCard />
          </div>
          <div className="mt-10 w-[27%] h-full">
            <div className="rounded-xl bg-[#282828] flex-col items-center h-full overflow-y-scroll [&::-webkit-scrollbar]:hidden">
              <div className="p-6 ">
                <h1 className="font-semibold text-lg">People you may know</h1>
              </div>
              <PeopleMayKnowCard />
              <PeopleMayKnowCard />
              <PeopleMayKnowCard />
              <FollowReqAndPeopleMayKnowButton buttonText="See More" />
              <Divider className="mt-6" />
              <div className="p-6 flex items-center font-semibold text-lg gap-4">
                <h1>Follow Requests</h1>
                <p className="text-secondary">Total (29)</p>
              </div>
              <FollowRequestCard />
              <FollowRequestCard />
              <FollowRequestCard />
              <FollowRequestCard />
              <FollowReqAndPeopleMayKnowButton buttonText="See All" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
