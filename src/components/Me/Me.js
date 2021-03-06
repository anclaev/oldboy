import s from "./me.module.scss";

import Pic from "../Pic";
import Feature from "../Feature";

import Post from "../Post";

import Textbox from "../Textbox";
import SendButton from "../SendButton";

let Posts = [
  { id: 1, text: "How stupid that is.", time: "March 4, 19:35" },
  { id: 2, text: "Hey, what are you doing?", time: "March 4, 19:37" },
];

let PostsEl = Posts.map((el) => (
  <Post className={s.posts__item} text={el.text} time={el.time} />
));

const Me = () => (
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
        <Textbox placeholder="How are you, old boy?" />
        <SendButton />
      </div>
      <div className={s.wrapper}>{PostsEl}</div>
    </div>
  </div>
);

export default Me;
