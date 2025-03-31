import { Flex, Modal, Text, UnstyledButton } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

export const Header = () => {

  const [opened, { open, close }] = useDisclosure(false)

  return <header className="w-[1280px] mx-auto flex flex-col items-start gap-[24px]" style={{ position: 'relative', zIndex: 1 }}>
    <div className="w-full flex justify-between items-center">
      <img src="/bc-logo.svg" alt="bc-logo" />
      <img src="/close.svg" alt="close" className="cursor-pointer" onClick={open} />
    </div>
    <div className="h-[1px] w-full bg-bcDarkBlue " />
    <Modal opened={opened} onClose={close} centered size="320px" radius="16px" className="flex items-start">
      <Text c="bcDarkBlue.0" fw={500} fz="24px" className="!leading-[25.2px] tracking-[-1.2px]">
        Are you sure you want to leave?
      </Text>
      <Text c="bcDarkBlue.0" fw={500} fz="12px" className="!leading-normal tracking-[-0.6px]">
        If you leave this page now, You will lose all the  progress.
      </Text>
      <Flex p="16px" justify="space-between" align="flex-start" w="100%">
        <UnstyledButton c="bcDarkblue.0" p="16px 24px" bd="1px solid bcDarkBlue.0" fz="16px" fw={500} className="!leading-4 tracking-[-0.32px] rounded-[8px]" onClick={close}>Cancel</UnstyledButton>
        <UnstyledButton c="#FFFBF7" p="16px 24px" bg="bcPrimaryBlue.0" bd="1px solid bcPrimaryBlue.0" fz="16px" fw={500} className="!leading-4 tracking-[-0.32px] rounded-[8px]">Confirm</UnstyledButton>
      </Flex>
    </Modal>
  </header>
}