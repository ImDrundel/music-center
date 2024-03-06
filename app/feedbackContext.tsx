import { createContext } from "react";
import Body from "./components/main/body/body";

export const FeedbackContext = createContext({} as any);

export default function BodyContext() {
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

  return (
    <FeedbackContext.Provider value={constFeedbackData}>
      <Body />
    </FeedbackContext.Provider>
  );
}
