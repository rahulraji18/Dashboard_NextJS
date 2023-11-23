"use client";

import React from "react";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  const searchParam = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const handleChange = useDebouncedCallback((event) => {
    const params = new URLSearchParams(searchParam);
    params.set("page", 1);
    event?.target?.value && event?.target?.value?.length > 2
      ? params.set("search", event.target.value)
      : params.delete("search");
    replace(`${pathName}?${params}`);
  }, 300);
  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
