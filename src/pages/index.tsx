import Head from 'next/head'
import { Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <h1>Welcom on building social with nextjs 13 and chakra-ui </h1>
        <Text fontSize='50px' color='tomato'>
          Ism using a custom font-size value for this text
        </Text>
      </main>
    </>
  )
}

