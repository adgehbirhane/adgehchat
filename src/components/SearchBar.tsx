import { Search } from "@mui/icons-material";
import { InputBase } from "@mui/material";

export const SearchBar = () => {
  return (
    <>
      <InputBase 
        endAdornment={<Search />}
        sx={{ backgroundColor: 'white', borderRadius: 2, pl: 2, pr: 2 }}
        fullWidth
        placeholder="Search..."
      />
    </>
  );
};
