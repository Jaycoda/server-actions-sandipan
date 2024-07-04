"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React from "react";

const UserSearch = ({ search }) => {
  const [searchKeyword, setSearchKeyword] = useState(search || undefined);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (formSubmitted && searchKeyword !== undefined) {
      router.push(`user?search=${searchKeyword}`);
    } else {
      router.push(`user`);
    }
  }, [searchKeyword, formSubmitted, router]);

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const keyword = formData.get("keyword");
    setSearchKeyword(keyword);

    setFormSubmitted(true);
  };

  const handleResetSearch = (e) => {
    e.preventDefault();
    setSearchKeyword("");
    setFormSubmitted(false);
  };
  return (
    <div>
      <form
        onSubmit={(e) => handleSearch(e)}
        className="flex gap-5 border bg-slate-200 p-5"
      >
        <div className="relative w-full">
          <Input type="text" name="keyword" defaultValue={searchKeyword} />

          {formSubmitted && (
            <Button
              className="absolute right-0 top-0"
              onClick={(e) => handleResetSearch(e)}
              type="reset"
            >
              X
            </Button>
          )}
        </div>

        {/* <Input
          onChange={(e) => setSearchKeyword(e.target.value)}
          type="text"
          name="searchKeyword"
          id=""
          value={searchKeyword}
        />  */}

        <Button type="submit">Search</Button>
      </form>
    </div>
  );
};

export default UserSearch;
