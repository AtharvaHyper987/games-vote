import { useState } from "react";
export default function ({ gameName }) {
  const [count, setCount] = useState(0);
  const [likes, setLikeIcon] = useState("bi bi-hand-thumbs-up");

  function newCount() {
    setCount(count + 1);
  }

  function filledLike() {
    setLikeIcon("bi bi-hand-thumbs-up-fill");
  }
  function emptyLike() {
    setLikeIcon("bi bi-hand-thumbs-up");
  }

  return (
    <div
      style={{
        backgroundColor: "lightblue",
        width: "60%",
        border: "solid",
        margin: "auto",
        marginBottom: "18px",
        padding: "10px",
        borderRadius: "10px",
      }}
      onClick={newCount}
      className="count"
    >
      <p>
        <span className="gameName"> {gameName}</span> has {count} likes
        <span
          className="likes"
          onMouseOver={filledLike}
          onMouseLeave={emptyLike}
        >
          <i class={likes}></i>
        </span>
      </p>
    </div>
  );
}
