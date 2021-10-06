import { Card } from "antd";

export const Cards = (gistData) => {
  const unidata = gistData.gistData;
  const userData = unidata.owner;
  const noImgPath = "../No-image-found.jpg";
  return (
    <div className="site-card-border-less-wrapper">
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
        <h2>{unidata.description || "No Title Found for the Gist"}</h2>
        <h4>Gist Created at: {unidata.created_at}</h4>
        <p>
          <a target="_blank" href={unidata.html_url} rel="noreferrer">
            Gist Link
          </a>
        </p>
      </Card>
    </div>
  );
};
