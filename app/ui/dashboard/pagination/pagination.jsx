"use client";
import React from "react";
import styles from "./pagination.module.css";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Pagination = ({ count }) => {
  const ITEMS_PER_PAGE = process.env.ITEMS_PER_PAGE ?? 10;
  const pathName = usePathname();
  const searchParam = useSearchParams();
  const params = new URLSearchParams(searchParam);
  const page = searchParam.get("page") ? parseInt(searchParam.get("page")) : 1;
  const PREV = ITEMS_PER_PAGE * (page - 1) > 0;
  const NEXT = ITEMS_PER_PAGE * (page - 1) + ITEMS_PER_PAGE < count;
  const { replace } = useRouter();
  const handleChange = (type) => {
    type === "prev"
      ? params.set("page", page - 1)
      : params.set("page", page + 1);
    replace(`${pathName}?${params}`);
  };
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!PREV}
        onClick={() => handleChange("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!NEXT}
        onClick={() => handleChange("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
