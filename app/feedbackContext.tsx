import { createContext } from "react";

export interface FeedbackContexType {
  feedbackData: typeof constFeedbackData;
  setFeedbackData: (_: typeof constFeedbackData) => void;
}

export const constFeedbackData = [
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

export const FeedbackContext = createContext<FeedbackContexType>({
  feedbackData: {} as typeof constFeedbackData,
  setFeedbackData: () => {},
});
