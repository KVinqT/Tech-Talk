import { Divider } from '@nextui-org/divider';

const AuthPageWelcomeText = () => {
  return (
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
  );
};

export default AuthPageWelcomeText;
