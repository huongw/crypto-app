import { BsSearch } from "react-icons/bs";

const SearchBar = ({ onInputChange }) => {
  return (
    <form className="search-bar">
      <BsSearch />
      <input type="text" onChange={onInputChange} placeholder="Search currency" />
    </form>
  );
};

export default SearchBar;
