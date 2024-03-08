"use client";
import styles from "./body.module.scss";
import React, { useContext, useRef, useState } from "react";
import Feedback from "./feedback/feedback";
import { FeedbackContext } from "@/app/feedbackContext";


let currentFeedbackId = 11;

export default function Body(props: any) {
  const {feedbackData, setFeedbackData} = useContext(FeedbackContext);
  // const [feedbackData, setFeedbackData] = useState(constFeedbackData);

  let newPostText: any = useRef();
  let onClick = () => {
    let text = newPostText.current.value;
    let newFeedback = {
      id: `${currentFeedbackId}`,
      feedbackText: text,
      likesCount: "0",
    };
    
    setFeedbackData([...feedbackData, newFeedback]);
    console.log(text);
  };
  currentFeedbackId++;
  return (
    <>
      <div className={styles.feedbackArea}>
        <textarea
          className={styles.textarea}
          ref={newPostText}
          name="Text"
          id="1"
        />
        <button onClick={onClick}>Sent message</button>
      </div>
      <div className={styles.container}>
        <Feedback state={feedbackData} className={styles.feedbackSide} />
      </div>
    </>
  );
}
