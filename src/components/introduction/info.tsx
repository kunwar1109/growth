import { Divider, Flex, Text, UnstyledButton } from "@mantine/core"
import { Link } from "@tanstack/react-router"


export const Information = () => {
  return <Flex direction="column" bg="#F7FAFF" align="flex-start" gap="16px" p="24px" className="flex-[1_0_0] rounded-2xl">
    <Text c="bcDarkBlue.0" fs="16px" fw={700} className="leding-[16.8px] tracking-[-0.8px]">
      How do you do it?
    </Text>
    <Divider color="#D9D9D9" pt="1px" pb="1px" className="flex flex-col justify-center items-center self-stretch" />
    <Text c="bcDarkBlue.0" fs="16px" fw={500} className="leding-normal tracking-[-0.8px]">
      Bettercoach Leadership Assessment is straightforward: it has 46 statements that will help you better understand your leadership, and it will take you about 15 minutes from beginning to end. Read each statement and choose how often it applies to you.
      <br />
      They are confidential and for you only.
      <br />
      Discussing your results with your coach will provide deeper insights and support your goal-setting process
      <br />
      Your answers are confidential. Share results with your coach only if you wish (highly encouraged).
    </Text>
    <Flex w="100%" pt="16px" pb="16px" justify="flex-end" align="center" gap="8px" className="self-stretch">
      <Link to="/emotional-intelligence">
        <UnstyledButton c="#fffbf7" bg="bcPrimaryBlue.0" pt="16px" pb="16px" pr="24px" pl="24px" fw={500} className="flex justify-center items-center gap-2.5 rounded-[8px]">
          Take the assessment
        </UnstyledButton>
      </Link>
    </Flex>
  </Flex>
}