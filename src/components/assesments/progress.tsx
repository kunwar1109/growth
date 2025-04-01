import { Flex, Text } from "@mantine/core"
import { StepperComponent } from "./stepper"

export const Progress = () => {
  return <Flex p="16px" justify="center" align="center" direction="column" gap="32px" w="100%">
    <Text c="bcDarkBlue.0" fz="24px" fw="700" className="!leading-[25.2px] tracking-[-1.2px] text-center">
      Leadership Assessment
    </Text>
    <Flex direction="column" align="flex-start" gap="8px" w="100%">
      <StepperComponent />
      <Flex justify="space-between" align="center" className="slef-stetch" w="100%">
        <Text fz="14px" w="69px" fw={700} className="text-center !leading-[14.7px] tracking-[-0.7px]" >Emotional Intelligence</Text>
        <Text fz="14px" w="69px" fw={400} className="text-center !leading-[14.7px] tracking-[-0.7px]" >Resilience</Text>
        <Text fz="14px" fw={400} className="text-center !leading-[14.7px] tracking-[-0.7px]" >Interdependence</Text>
        <Text fz="14px" w="69px" fw={400} className="text-center !leading-[14.7px] tracking-[-0.7px]" >Purpose</Text>
        <Text fz="14px" w="69px" fw={400} className="text-center !leading-[14.7px] tracking-[-0.7px]" >Change</Text>
      </Flex>
    </Flex>
  </Flex>
}