"use client";
import { comments } from '../libs/comments'
//import { Reply } from './Reply';
import { ReplyProps } from "@/libs/types";

export default function Comment({
  // userImagePath: comments.UserImagePath,
  // username: comments.Username,
  // commentText: comments.CommentText,
  // likeNum: comments.LikeNum,
  // replies: []
}) {
  return (
    <div>
      <div className="d-flex gap-2 my-2">
        <img
          src="/profileImages/lisa.jpg"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#3A3B3C" }}
        >
          <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
            Lisa
          </span>
          <br />
          <span style={{ color: "#E4E6EB" }}>จริงค่า</span>
          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span style={{ color: "#B0B3B8" }}>999 คน</span>
          </div>
        </div>
        {/* You can use map-loop to render Reply component here */}
        {/* <div>
          {comments.map((Reply: ReplyProps) => (<Reply {...Reply} />))}
        </div> */}
      </div>
      <div className="d-flex gap-2 my-2">
        <img
          src="/profileImages/charliebrown.jpg"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#3A3B3C" }}
        >
          <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
          Charlie Brown
          </span>
          <br />
          <span style={{ color: "#E4E6EB" }}>บ้าไปแล้ว</span>
          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span style={{ color: "#B0B3B8" }}>0 คน</span>
          </div>
        </div>
        </div>
    </div>
  );
}
