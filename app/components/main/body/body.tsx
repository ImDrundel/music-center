"use client";
import styles from "./body.module.scss";
import React, { useState } from "react";
import Feedback from "./feedback/feedback";

const constFeedbackData = [
  { id: "1", feedbackText: "I like this site!", likesCount: "25" },
  { id: "2", feedbackText: "Its amazing!", likesCount: "17" },
  { id: "3", feedbackText: "Wow! Really cool", likesCount: "7" },
  { id: "4", feedbackText: "Love music", likesCount: "7" },
  { id: "5", feedbackText: "Sabaton best!", likesCount: "7" },
  { id: "6", feedbackText: "Im from Kharkiv", likesCount: "7" },
  { id: "7", feedbackText: "Spotify beter:(", likesCount: "7" },
  { id: "8", feedbackText: "Thanks!", likesCount: "7" },
  { id: "9", feedbackText: "Best player ever", likesCount: "7" },
  { id: "10", feedbackText: "Ill be back", likesCount: "7" },
];
let currentFeedbackId = 11;

export default function Body(props: any) {
  const [feedbackData, setFeedbackData] = useState(constFeedbackData);

  let newPostText: any = React.createRef();
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
