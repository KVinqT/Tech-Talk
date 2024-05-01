'use client';
import { animals } from './data';
import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete';

const NavbarSearch = () => {
  return (
    <div>
      <Autocomplete
        defaultItems={animals}
        placeholder="# Search"
        className="max-w-[250px]"
      >
        {(animal) => (
          <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
};

export default NavbarSearch;
