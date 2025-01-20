"use client";
import { IoSearch } from "react-icons/io5";

import { useRouter } from "next/navigation";

const SearchBar = () => {

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if(name){
      router.push(`/list?name=${name}`)
    }
  };

  return (
    <form
      className="flex items-center justify-between gap-32 bg-gray-100 p-2 px-5 flex-1 rounded-full"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none "
      />
      <button className="cursor-pointer">
      <IoSearch />
      </button>
    </form>
  );
};

export default SearchBar;
