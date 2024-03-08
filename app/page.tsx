import { Metadata } from "next";
import Footer from "./components/footer/footer";
import Body from "./components/main/body/body";

export const metadata: Metadata = {
  title: "Music center",
  description: "Music center",
};

export default function Home() {
  return (
    <div>
      <>
        <Body />
        <Footer />
      </>
    </div>
  );
}
