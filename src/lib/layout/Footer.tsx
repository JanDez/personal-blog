import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm" color="gray.500">
        {new Date().getFullYear()} -{" "}
        <Link href="mailto:contac@jaifran.xyz" isExternal>
          jaifran.xyz
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
