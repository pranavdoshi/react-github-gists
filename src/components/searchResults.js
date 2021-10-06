import React from "react";
import { Alert } from "antd";
import { Cards } from "./cards";

export const SearchResults = (data, username) => {
  const userdata = data.data;
  return (
    <>
      {username !== null && userdata.length !== 0 ? (
        <>
          <Alert
            message={`${data.username}'s Gists`}
            description={`${userdata.length} Gists found`}
            type="success"
            showIcon
            style={{ marginTop: 10, marginBottom: 10 }}
          />
          <div className="paddingData">
            {userdata.map((gist, index) => {
              return <Cards key={gist.id} gistData={gist} />;
            })}
          </div>
        </>
      ) : null}
    </>
  );
};
