import React from "react";
import Button from "../Button/Button";
import { BodyRegular, HeadingXLargeMedium } from "../../styles/typography";

const TestButtons: React.FC = () => {
  return (
    <div
      style={{
        border: `1px solid black`,
        marginBottom: "20px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
        padding: "10px",
      }}>
      <HeadingXLargeMedium>Button Component</HeadingXLargeMedium>
      <div style={{ gap: "12px" }}>
        <BodyRegular>Primary Buttons</BodyRegular>
        <Button type="primary" size="small" style={{ marginRight: "8px" }}>
          Button
        </Button>
        <Button type="primary" size="medium" style={{ marginRight: "8px" }}>
          Button
        </Button>
        <Button type="primary" size="large" style={{ marginRight: "8px" }}>
          Button
        </Button>
        <Button type="primary" size="large" disabled>
          Button
        </Button>
      </div>

      <br />
      <div style={{ gap: "12px" }}>
        <BodyRegular>Secondary Buttons</BodyRegular>
        <Button type="secondary" size="small" style={{ marginRight: "8px" }}>
          Button
        </Button>
        <Button type="secondary" size="medium" style={{ marginRight: "8px" }}>
          Button
        </Button>
        <Button type="secondary" size="large" style={{ marginRight: "8px" }}>
          Button
        </Button>
        <Button type="secondary" size="large" disabled>
          Button
        </Button>
      </div>
      <br />
      <div style={{ gap: "12px" }}>
        <BodyRegular>Secondary-gray Buttons</BodyRegular>
        <Button
          type="secondary-gray"
          size="small"
          style={{ marginRight: "8px" }}>
          Button
        </Button>
        <Button
          type="secondary-gray"
          size="medium"
          style={{ marginRight: "8px" }}>
          Button
        </Button>
        <Button
          type="secondary-gray"
          size="large"
          style={{ marginRight: "8px" }}>
          Button
        </Button>
        <Button type="secondary-gray" size="large" disabled>
          Button
        </Button>
      </div>
      <br />
      <div style={{ gap: "12px" }}>
        <BodyRegular>Tertiary Buttons</BodyRegular>
        <Button type="tertiary" size="small" style={{ marginRight: "8px" }}>
          Button
        </Button>
        <Button type="tertiary" size="medium" style={{ marginRight: "8px" }}>
          Button
        </Button>
        <Button type="tertiary" size="large" style={{ marginRight: "8px" }}>
          Button
        </Button>
        <Button type="tertiary" size="large" disabled>
          Button
        </Button>
      </div>
      <br />
      <div style={{ gap: "12px" }}>
        <BodyRegular>Tertiary-gray Buttons</BodyRegular>
        <Button
          type="tertiary-gray"
          size="small"
          style={{ marginRight: "8px" }}>
          Button
        </Button>
        <Button
          type="tertiary-gray"
          size="medium"
          style={{ marginRight: "8px" }}>
          Button
        </Button>
        <Button
          type="tertiary-gray"
          size="large"
          style={{ marginRight: "8px" }}>
          Button
        </Button>
        <Button type="tertiary-gray" size="large" disabled>
          Button
        </Button>
      </div>
    </div>
  );
};

export default TestButtons;
