import "./post.sass";

import Pic from "../Pic";

const Post = (props) => (
  <div className={`${props.className} post`}>
    <Pic
      className={`${props.className}__pic post__pic`}
      img="profile-ava.jpg"
      width="40px"
      height="40px"
    />
    <span className={`${props.className}__text post__text`}>{props.text}</span>
    <span className={`${props.className}__time post__time`}>{props.time}</span>
  </div>
);

export default Post;
