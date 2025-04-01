import { useEffect, useRef, useState } from 'react';
import { Stepper, type StepperProps } from '@mantine/core';
import { useLocation } from '@tanstack/react-router';

function StyledStepper(props: StepperProps) {
  return (
    <Stepper
      styles={{
        stepBody: {
          display: 'none',
        },

        step: {
          padding: 0,
        },

        stepIcon: {
          minWidth: "auto",
          width: 17,
          padding: 4.857,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4.857,
          alignSelf: "stretch",
          height: 17,
          minHeight: "auto",
          borderRadius: 24.286,
          border: "none",
          backgroundColor: "#BFBFBF"
        },

        stepCompletedIcon: {
          display: 'none'
        },

        separator: {
          marginLeft: -2,
          marginRight: -2,
          height: 2.94,
          backgroundColor: "#BFBFBF"
        },
      }}
      {...props}
    />
  );
}

const steps = ["emotional-intelligence", "resilience", "interdependence", "purpose", "change"]

export function StepperComponent() {
  const location = useLocation()
  console.log(location.pathname)
  const [active, setActive] = useState(steps.indexOf(location.pathname.split("/")[1]));
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    console.log("hell")
    setActive(steps.indexOf(location.pathname.split("/")[1]))
  }, [location.pathname])
  return (
    <StyledStepper active={active} onStepClick={setActive} allowNextStepsSelect={false} w="100%" p="0 28.26px">
      <Stepper.Step icon={<></>} description="Create an account" />
      <Stepper.Step icon={<></>} description="Verify email" />
      <Stepper.Step icon={<></>} description="Get full access" />
      <Stepper.Step icon={<></>} description="Get full access" />
      <Stepper.Step icon={<></>} description="Get full access" />
    </StyledStepper>
  );
}