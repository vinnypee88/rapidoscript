import Head from "../components/Head";
import Navbar from "../components/Navbar";
import Game from "../components/Game";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <>
      <div>
        <Head />
        <Navbar />
        <Banner />
        <Game />
      </div>
    </>
  );
}
