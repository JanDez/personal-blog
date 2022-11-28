import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const github = "https://github.com/JanDez";
const linkedin = "https://www.linkedin.com/in/jaifran-hernandez97/";
const cdnGithub =
  "https://img.icons8.com/external-sbts2018-outline-color-sbts2018/58/null/external-github-basic-ui-elements-2.2-sbts2018-outline-color-sbts2018.png";
const cdnLindedin =
  "https://img.icons8.com/3d-plastilina/69/null/linkedin--v2.png";

const CTASection = () => {
  return (
    <Box textAlign="center">
      <Flex justifyContent="center" alignItems="center" gap={2}>
        <Link href={github}>
          <Image
            alt="GitHub Logo"
            src={cdnGithub}
            width={50}
            height={50}
            layout="responsive"
          />
        </Link>
        <Link href={linkedin}>
          <Image
            alt="GitHub Logo"
            src={cdnLindedin}
            width={50}
            height={50}
            layout="responsive"
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default CTASection;
