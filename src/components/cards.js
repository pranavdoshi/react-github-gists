import { Card } from "antd";

export const Cards = (props) => {
  const unidata = props.gistData;
  const userData = unidata.owner;
  const noImgPath = "../No-image-found.jpg";
  const FavouriteComponent = props.favourite;

  return (
    <div className="site-card-border-less-wrapper col-md-4">
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="avatar"
            title="avatar"
            height="200px"
            src={userData.avatar_url || noImgPath}
          />
        }
        bordered={true}
      >
        <h3>{unidata.description || "No Title Found for the Gist"}</h3>
        <h5>Gist Created at: {unidata.created_at}</h5>
        <p>
          <a target="_blank" href={unidata.html_url} rel="noreferrer">
            Gist Link
          </a>
        </p>
        <button
          // disabled={
          //   (props.disable === unidata.id ? true : false)
          // }
          className="btn btn-primary"
          type="button"
          onClick={() => props.handleFavClick(props.gistData)}
        >
          <FavouriteComponent />
        </button>
      </Card>
    </div>
  );
};
