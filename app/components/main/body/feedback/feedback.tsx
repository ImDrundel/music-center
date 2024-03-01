import Image from "next/image";
import styles from "./feedback.module.scss";
import React from "react";
import CatAvatar from "@/public/cat-avatar.jpg";

interface FeedbackProps {
  state: Array<{ id: string; feedbackText: string; likesCount: string }>;
  className: any;
}

export default function Feedback({ state, className }: FeedbackProps) {
  return (
    <>
      {state.map((data) => {
        return (
          <div key={data.id}>
            <div className={styles.container}>
              <div className={styles.feedbackBlock}>
                <div className={styles.avatarBlock}>
                  <Image
                    className={styles.avatar}
                    src={CatAvatar}
                    alt="Avatar"
                  />
                </div>
                <div className={styles.text}>{data.feedbackText}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
