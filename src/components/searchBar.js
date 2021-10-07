import { useEffect, useState } from "react";
import { Input, Alert, Spin } from "antd";
import getGistsFromGithubAPI from "./API";
import { SearchResults } from "./searchResults";
import AddFavourite from "./addFavourite";
import RemoveFavourite from "./removeFavourite";

const { Search } = Input;

const SearchBar = () => {
  const [username, setUsername] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [favourites, setFavourites] = useState([]);
  // const [disable, setDisable] = useState(null);

  const onSearch = async (username) => {
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

  const addFav = (fav) => {
    const newFavouriteList = [...favourites, fav];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFav = (data) => {
    const newFavouriteList = favourites.filter((fav) => fav.id !== data.id);
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem("gist-favourites", JSON.stringify(items));
  };

  useEffect(() => {
    const gistfavs = JSON.parse(localStorage.getItem("gist-favourites"));

    if (gistfavs) {
      setFavourites(gistfavs);
    }
  }, []);

  // const disableButton = (e) => {
  //   setDisable(e);
  // };

  return (
    <>
      <Search
        className="mb-3"
        placeholder="Search by UserName"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      {loading ? <Spin tip="Loading..." style={{ margin: 10 }} /> : null}

      {username !== "" && data && !error ? (
        <SearchResults
          showAlert={true}
          handleFavClick={addFav}
          // handleDisable={disableButton}
          // disable={disable}
          favourite={AddFavourite}
          data={data}
          username={username}
        />
      ) : null}

      {username && data.length === 0 ? (
        <Alert
          message="Error"
          description="No data for this User"
          type="error"
          showIcon
          style={{ marginTop: 10, marginBottom: 20 }}
        />
      ) : null}

      {username === "" ? (
        <Alert
          message="Error"
          description="Please Enter Valid UserName"
          type="error"
          showIcon
          style={{ marginTop: 10, marginBottom: 20 }}
        />
      ) : null}

      {favourites != null && favourites.length > 0 ? (
        <div className="favourite-wrap">
          <h3>Favourites Gists</h3>
          <SearchResults
            // disable={disable}
            showAlert={false}
            handleFavClick={removeFav}
            // handleDisable={disableButton}
            favourite={RemoveFavourite}
            data={favourites}
            username={username}
          />
        </div>
      ) : (
        <div className="favourite-wrap">
          <h3>Favourites Gists</h3>
          <h5>No Gists added as Favourite</h5>
        </div>
      )}
    </>
  );
};

export default SearchBar;
