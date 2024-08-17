import { FC, FormEvent, useState } from "react";

import { VscSearch } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const SearchInput: FC = () => {
  const navigate = useNavigate();
  const [term, setTerm] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`/search?term=${term}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 flex items-center pl-3">
          <VscSearch className="h-5 w-5 text-gray-500" />
        </div>
        <input
          className="pl-10 py-2 w-full border-o shadow-none"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search packages"
        />
      </div>
    </form>
  );
};

export default SearchInput;
