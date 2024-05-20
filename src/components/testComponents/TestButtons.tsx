import React from "react";
import Button from "../Button/Button";

const TestButtons: React.FC = () => {
  return (
    <div>
      <Button type="primary" size="small">
        Primary
      </Button>
      <Button type="primary" size="medium">
        Primary
      </Button>
      <Button type="primary" size="large">
        Primary
      </Button>
      <Button type="primary" size="large" disabled>
        Primary
      </Button>

      <br />
      <Button type="secondary" size="small">
        Secondary
      </Button>
      <Button type="secondary" size="medium">
        Secondary
      </Button>
      <Button type="secondary" size="large">
        Secondary
      </Button>
      <Button type="secondary" size="large" disabled>
        Secondary
      </Button>
      <br />
      <Button type="secondary-gray" size="small">
        Secondary-Gray
      </Button>
      <Button type="secondary-gray" size="medium">
        Secondary-Gray
      </Button>
      <Button type="secondary-gray" size="large">
        Secondary-Gray
      </Button>
      <Button type="secondary-gray" size="large" disabled>
        Secondary-Gray
      </Button>
      <br />
      <Button type="tertiary" size="small">
        Tertiary
      </Button>
      <Button type="tertiary" size="medium">
        Tertiary
      </Button>
      <Button type="tertiary" size="large">
        Tertiary
      </Button>
      <Button type="tertiary" size="large" disabled>
        Tertiary
      </Button>
      <br />
      <Button type="tertiary-gray" size="small">
        Tertiary-Gray
      </Button>
      <Button type="tertiary-gray" size="medium">
        Tertiary-Gray
      </Button>
      <Button type="tertiary-gray" size="large">
        Tertiary-Gray
      </Button>
      <Button type="tertiary-gray" size="large" disabled>
        Tertiary-Gray
      </Button>
    </div>
  );
};

export default TestButtons;
