import React, { useState } from "react";
import { Input, Alert, Spin } from "antd";
import getGistsFromGithubAPI from "./API";
import { SearchResults } from "./searchResults";

const { Search } = Input;

const SearchBar = () => {
  const [username, setUsername] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSearch = async (username) => {
    console.log(username);
    const usersname = username.trim();
    setUsername(usersname);
    setLoading(true);
    if (usersname && usersname !== "") {
      try {
        const URL = getGistsFromGithubAPI(usersname);
        const res = await fetch(URL);
        const data = await res.json();
        setData(data);
        setLoading(false);
        setError(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    } else if (usersname === "") {
      setLoading(false);
      setError(true);
    }
    setLoading(false);
  };

  return (
    <>
      <Search
        placeholder="Search by UserName"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      {loading ? <Spin tip="Loading..." style={{ margin: 10 }} /> : null}

      {username !== "" && data && !error ? (
        <SearchResults data={data} username={username} />
      ) : null}

      {username && data.length === 0 ? (
        <Alert
          message="Error"
          description="No data for this User"
          type="error"
          showIcon
          style={{ marginTop: 10 }}
        />
      ) : null}

      {username === "" ? (
        <Alert
          message="Error"
          description="Please Enter Valid UserName"
          type="error"
          showIcon
          style={{ marginTop: 10 }}
        />
      ) : null}
    </>
  );
};

export default SearchBar;
