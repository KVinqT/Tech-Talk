'use client';
import { useState } from 'react';
import { Card } from '@nextui-org/card';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { AuthPageWelcomeText } from '@/container';
import { Divider } from '@nextui-org/divider';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      <div className="mt-16 manrope">
        <div className="max-w-[70%] m-auto flex justify-around">
          <div className="max-w-[400px]">
            <h1 className="text-4xl boldText">
              Welcome From Connect-<span className="text-secondary">MMSWE</span>
            </h1>
            <p className="mt-6 mediumText">
              Let's grab your chance and explore your job opportunities
            </p>
            <Divider className="mt-6" />
            <p className="mt-8">
              Developed and Design by{' '}
              <span className="text-secondary boldText">Htet Naung Htun</span>
            </p>
          </div>
          <Card radius="lg" className="w-[400px] bg-primary">
            <div className="p-8">
              <h1 className="boldText text-2xl text-secondary">Login</h1>
              <p className="text-sm mt-2 text-[#979393]">
                Grab Your Opportunities !{' '}
              </p>
            </div>
            <div className="px-8">
              <p className="mb-2">Email</p>
              <Input
                placeholder="Enter your email"
                value={email}
                size="lg"
                onValueChange={setEmail}
                className="border rounded-xl"
              />
            </div>
            <div className="px-8 mt-5">
              <p className="mb-2">Password</p>
              <Input
                placeholder="Enter your password"
                value={password}
                size="lg"
                onValueChange={setPassword}
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <Eye className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? 'text' : 'password'}
                className="border rounded-xl"
              />
            </div>
            <div className="px-8 mt-8 boldText">
              <Button color="default" className="w-full" size="lg">
                Login
              </Button>
              <p className="text-center mt-3">or</p>
            </div>
            <div className="px-8 mt-3">
              <Button
                color="default"
                className="w-full bg-secondary text-black mb-6 boldText"
                size="lg"
                onClick={() => {
                  router.replace('/connect-mmswe-signup');
                }}
              >
                Create new account
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
