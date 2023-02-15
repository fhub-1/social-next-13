import Head from "next/head";
import { Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Learn with Joseph</title>
        <meta
          name="description"
          content="learn with joseph build with next 13"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/redditFace.svg" />
      </Head>
      <main>
        <Text as="p" fontSize="50px" color="tomato">
          I&rsquo;m using a custom font-size value for this text
        </Text>
      </main>
    </>
  );
}
