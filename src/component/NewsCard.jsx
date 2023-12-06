import React from "react";
import { Button, Card } from "antd";
const { Meta } = Card;
import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo("en-US");
const NewsCard = ({
  image,
  link,
  publishedAt,
  sourceName,
  title,
  _id,
  shortLink,
  publishedTimestamp,
}) => (
  <Card
    hoverable
    cover={
      <img
        alt="example"
        src={
          image !== ""
            ? image
            : "https://i0.wp.com/kennyleeholmes.com/wp-content/uploads/2017/09/no-image-available.png?ssl=1"
        }
        className="h-40 object-cover"
      />
    }
    actions={[
      <Button>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </Button>,
      <small className="text-orange-500">
        {timeAgo.format(new Date(publishedAt))}
      </small>,
    ]}
  >
    <Meta title={title} description={shortLink} />
  </Card>
);

export default NewsCard;
