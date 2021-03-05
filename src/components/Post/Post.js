import s from "./post.module.sass";

import Pic from "../Pic";

const Post = (props) => (
  <div className={`${props.className} ${s.post}`}>
    <Pic className={s.pic} img="profile-ava.jpg" />
    <span className={s.text}>{props.text}</span>
    <span className={s.time}>{props.time}</span>
  </div>
);

export default Post;
