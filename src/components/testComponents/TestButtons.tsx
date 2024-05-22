import React from "react";
import Button from "../Button/Button";

const TestButtons: React.FC = () => {
  return (
    <div>
      <Button type="primary" size="small">
        Button
      </Button>
      <Button type="primary" size="medium">
        Button
      </Button>
      <Button type="primary" size="large">
        Button
      </Button>
      <Button type="primary" size="large" disabled>
        Button
      </Button>

      <br />
      <Button type="secondary" size="small">
        Button
      </Button>
      <Button type="secondary" size="medium">
        Button
      </Button>
      <Button type="secondary" size="large">
        Button
      </Button>
      <Button type="secondary" size="large" disabled>
        Button
      </Button>
      <br />
      <Button type="secondary-gray" size="small">
        Button
      </Button>
      <Button type="secondary-gray" size="medium">
        Button
      </Button>
      <Button type="secondary-gray" size="large">
        Button
      </Button>
      <Button type="secondary-gray" size="large" disabled>
        Button
      </Button>
      <br />
      <Button type="tertiary" size="small">
        Button
      </Button>
      <Button type="tertiary" size="medium">
        Button
      </Button>
      <Button type="tertiary" size="large">
        Button
      </Button>
      <Button type="tertiary" size="large" disabled>
        Button
      </Button>
      <br />
      <Button type="tertiary-gray" size="small">
        Button
      </Button>
      <Button type="tertiary-gray" size="medium">
        Button
      </Button>
      <Button type="tertiary-gray" size="large">
        Button
      </Button>
      <Button type="tertiary-gray" size="large" disabled>
        Button
      </Button>
    </div>
  );
};

export default TestButtons;
