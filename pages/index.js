import Head from "../components/Head";
import Navbar from "../components/Navbar";
import StopClock from "../components/StopClock";
import Words from "../components/Words";

export default function Home() {
  return (
    <>
      <Head />
      <Navbar />
      <div className="container mt-5 pt-5"></div>
      <Words />
      <StopClock />
    </>
  );
}
