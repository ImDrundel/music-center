"use client";
import Footer from "./components/footer/footer";
import Body from "./components/main/body/body";
import { addFeedback } from "./state";
import state from "./state";

export default function Home() {
  return (
    <div>
      <>
        <Body state={state} addFeedback={addFeedback} />
        <Footer />
      </>
    </div>
  );
}
