import React, { useState } from "react";
import { SearchInput } from "./SearchInput";
import { SearchArea } from "../../views";

export const Search = () => {
  const [value, setValue] = useState("");
  return (
    <SearchArea>
      <SearchInput value={value} setValue={(value) => setValue(value)} />
    </SearchArea>
  );
};
