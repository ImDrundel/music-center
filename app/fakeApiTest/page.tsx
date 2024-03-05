"use client";
import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
type Posts = Array<Post>;

export default function SongPreview() {
  const [posts, setPosts] = useState<Posts | null>(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts: Posts) => {
        setPosts(posts);
      });
  }, []);

  return (
    <>
      {!posts ? (
        <div>loading</div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <div>User: {post.userId}</div>
            <div>Title: {post.title}</div>
            <div>Body: {post.body}</div>
            <div>---------</div>
          </div>
        ))
      )}
    </>
  );
}
