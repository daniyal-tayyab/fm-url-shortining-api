import React from "react";

import { Container, HeadingSection, CardSection } from "./AdvanceStats.styles";

import AdvanceCard from "../advance-card/AdvanceCard";

import brandIcon from "../../assets/images/icon-brand-recognition.svg";
import detailIcon from "../../assets/images/icon-detailed-records.svg";
import cutomizeIcon from "../../assets/images/icon-fully-customizable.svg";

const statistics = [
  {
    icon: brandIcon,
    title: "brand recognition",
    description:
      "Boost your brand recognition with each click. Generic links dont mean a thing. Branded links help instil confidence in your content.",
    style: {
      alignSelf: "flex-start",
    },
  },
  {
    icon: detailIcon,
    title: "detailed records",
    description:
      "Gain insights into who is clikcing your links. Knowing when and where people engage with your content helps inform better decision.",
    style: {
      alignSelf: "center",
    },
  },
  {
    icon: cutomizeIcon,
    title: "fully customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement",
    style: {
      alignSelf: "flex-end",
    },
  },
];

const AdvanceStats = () => {
  return (
    <Container>
      <HeadingSection>
        <h3>Advanced Statistics</h3>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </HeadingSection>
      <CardSection>
        {statistics.map((item, index) => (
          <AdvanceCard key={index} item={item} />
        ))}
      </CardSection>
    </Container>
  );
};

export default AdvanceStats;
