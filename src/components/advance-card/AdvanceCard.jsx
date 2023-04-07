import React from "react";

import {
  Card,
  CardMedia,
  CardTitle,
  CardDescription,
} from "./AdvanceCard.styles";

const AdvanceCard = ({ item }) => {
  const { icon, title, description, style } = item;
  return (
    <Card style={style}>
      <CardMedia>
        <img src={icon} alt={title} />
      </CardMedia>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
};

export default AdvanceCard;
