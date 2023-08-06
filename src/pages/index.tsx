import LayoutMobile from "components/LayoutMobile";
import LayoutDesktop from "components/desktop-view/LayoutDesktop";
import { useViewport } from "context-api/viewport-context";
import Head from "next/head";

const breakpoint: number = 1024;

export default function Home() {
  const { width } = useViewport();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{width < breakpoint ? <LayoutMobile /> : <LayoutDesktop />}</main>
    </>
  );
}
