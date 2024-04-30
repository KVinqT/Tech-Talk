'use client';
import { useState } from 'react';
import { Card } from '@nextui-org/card';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Checkbox } from '@nextui-org/checkbox';
import { DateInput } from '@nextui-org/date-input';
import Link from 'next/link';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);

  return (
    <div>
      <div className="mt-16 manrope">
        <div className="max-w-[70%] m-auto flex justify-around flex-col items-center">
          <h1 className="boldText text-3xl text-secondary">Connect-MMSWE</h1>
          <Card radius="lg" className="w-[500px] bg-primary mt-6">
            <div className="p-8">
              <h1 className="boldText text-lg text-secondary">
                Create New Account
              </h1>
              <p className="text-sm mt-2 text-[#979393]">
                Grab Your Opportunities !{' '}
              </p>
            </div>
            <div className="px-5 flex justify-between">
              <div>
                <p className="mb-2">First Name</p>
                <Input
                  placeholder="First Name"
                  value={email}
                  size="lg"
                  onValueChange={setEmail}
                  className="border rounded-xl"
                />
              </div>
              <div>
                <p className="mb-2">Last Name</p>
                <Input
                  placeholder="Last Name"
                  value={email}
                  size="lg"
                  onValueChange={setEmail}
                  className="border rounded-xl"
                />
              </div>
            </div>
            <div className="px-5 mt-5">
              <p className="mb-2">Mobile number or email address</p>
              <Input
                placeholder="Mobile number or email address"
                value={email}
                size="lg"
                onValueChange={setEmail}
                className="border rounded-xl"
              />
            </div>
            <div className="px-5 mt-5">
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
            {/* <div className="px-5 mt-5">
              <p>Date of birth</p>
              <DateInput label={'Birth date'} isRequired />
            </div> */}
            <div className="px-5 mt-5">
              <p>Gender</p>
              <div className="flex mt-4 gap-5">
                <div>
                  <Checkbox
                    color="default"
                    required
                    isSelected={male}
                    onValueChange={() => {
                      if (female === true) {
                        setFemale(!female);
                      }
                      setMale(!male);
                    }}
                    value="male"
                  >
                    Male
                  </Checkbox>
                </div>
                <div>
                  <Checkbox
                    color="default"
                    required
                    isSelected={female}
                    onValueChange={() => {
                      if (male === true) {
                        setMale(!male);
                      }
                      setFemale(!female);
                    }}
                    value="female"
                  >
                    Female
                  </Checkbox>
                </div>
              </div>
            </div>
            <div className="px-5 mt-8">
              <Button
                color="default"
                className="w-full bg-secondary text-black mb-6 boldText"
                size="lg"
              >
                Signup{' '}
              </Button>
            </div>
            <div className="flex justify-center mb-6">
              <Link href={'/login'} className="cursor-pointer underline">
                Already have an account?
              </Link>
            </div>
          </Card>
        </div>
      </div>{' '}
    </div>
  );
};

export default Signup;
