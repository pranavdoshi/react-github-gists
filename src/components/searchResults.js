import React from "react";
import { Alert } from "antd";
import { Cards } from "./cards";

export const SearchResults = (props) => {
  const userdata = props.data;
  return (
    <>
      {props.username !== null && userdata.length !== 0 ? (
        <>
          <Alert
            message={`${props.username}'s Gists`}
            description={`${userdata.length} Gists found`}
            type="success"
            showIcon
            style={{
              marginTop: 10,
              marginBottom: 10,
              display: props.showAlert ? "block" : "none",
            }}
          />
          <div className="paddingData row">
            {userdata.map((gist, index) => {
              return (
                <Cards
                  key={gist.id}
                  gistData={gist}
                  favourite={props.favourite}
                  // disable={props.disable}
                  handleFavClick={props.handleFavClick}
                  handleDisable={props.handleDisable}
                />
              );
            })}
          </div>
        </>
      ) : null}
    </>
  );
};
