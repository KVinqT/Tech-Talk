import NavbarSearch from '../autocomplete/NavbarSearch';

const NavBar = () => {
  return (
    <div className="h-[70px] flex justify-between fixed top-0 items-center w-full z-40 bg-background">
      <div className="flex justify-between w-full mt-4 max-w-[95%] m-auto">
        <div className="flex gap-8">
          <h1 className="text-3xl font-extrabold text-secondary">Tech-Talk</h1>
          <NavbarSearch />
        </div>
        <div className="flex items-center justify-center gap-6">
          <h1>Home</h1>
          <h1>Message</h1>
          <h1>Notification</h1>
        </div>
        <div className="flex items-center justify-center">Account</div>
      </div>
    </div>
  );
};

export default NavBar;
