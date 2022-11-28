import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import CTASection from "lib/components/components/CTASection";
import SomeImage from "lib/components/components/SomeImage";

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={6}
      w="full"
    >
      <NextSeo title="Home" />
      <SomeImage />
      <CTASection />
    </Flex>
  );
};

export default Home;
