import { Inter } from "next/font/google";
import HomePage from "./home";

const inter = Inter({ subsets: ["latin"] });

function Home () {
    return (
    <>
      <HomePage/>
    </>
    );
  }

  export default Home;