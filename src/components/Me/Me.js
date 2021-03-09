import React from "react";
import s from "./me.module.scss";

import Pic from "../Elems/Pic";
import Feature from "./Feature";

import Post from "./Post";

import Textbox from "../Elems/Textbox";
import SendButton from "../Elems/SendButton";

const Me = (props) => {
  let posts = props.posts.map((el) => (
    <Post className={s.posts__item} text={el.text} time={el.time} />
  ));

  let postText = React.createRef();

  let AddPost = () => {
    props.addPost(postText.current.value);
  };

  return (
    <div className={s.me}>
      <Pic className={s.bg} img="profile-bg.jpg" />
      <Pic className={s.ava} img="profile-ava.jpg" />
      <div className={s.info}>
        <div className={s.name}>Artem Samarin</div>
        <div className={s.props}>
          <Feature
            className={s.props__item}
            data={[
              ["Tort", "12.10.2001"],
              ["City", "Samara"],
              ["Edu", "CME"],
              ["Web", "ancla.dev"],
            ]}
          />
        </div>
      </div>
      <div className={s.posts}>
        <div className={s.new}>
          <Textbox placeholder="How are you, old boy?" refVal={postText} />
          <SendButton click={AddPost} />
        </div>
        <div className={s.wrapper}>{posts}</div>
      </div>
    </div>
  );
};

export default Me;
