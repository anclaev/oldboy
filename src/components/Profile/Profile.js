import s from "./profile.module.scss";

import Pic from "../Pic";
import Feature from "../Feature";
import Icon from "../Icons";
import Post from "../Post";

const Profile = () => (
  <div className={s.profile}>
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
            ["Edu", "CMaE"],
            ["Web", "ancla.dev"],
          ]}
        />
      </div>
    </div>
    <div className={s.posts}>
      <input
        className={s.new__text}
        type="text"
        placeholder="How are you, old boy?"
      />

      <button className={s.send}>
        <Icon className={s.icon} name="Send" />
      </button>

      <div className={s.wrapper}>
        <Post
          className={s.posts__item}
          text="How stupid that is."
          time="March 4, 19:35"
        />
        <Post
          className={s.posts__item}
          text="Hey, what are you doing?!"
          time="March 4, 19:37"
        />
      </div>
    </div>
  </div>
);

export default Profile;
