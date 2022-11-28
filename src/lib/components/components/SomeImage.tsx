import { Flex, useColorMode } from "@chakra-ui/react";

import HelperImage from "./HelperImage";

const SomeImage = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex gap={2} justifyContent="center" alignItems="center">
      <HelperImage src={`/logo-${colorMode}.svg`} label="Jaifran Hernández" />
    </Flex>
  );
};

export default SomeImage;
