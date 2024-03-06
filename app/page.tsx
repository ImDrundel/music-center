"use client";
import Footer from "./components/footer/footer";
import BodyContext from "./feedbackContext";

export default function Home() {
  return (
    <>
      <BodyContext />
      <Footer />
    </>
  );
}
