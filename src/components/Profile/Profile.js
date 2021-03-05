import "./profile.scss";

import Pic from "../Pic";
import Feature from "../Feature";
import Icon from "../Icons";
import Post from "../Post";

const Profile = () => (
  <div className="profile">
    <Pic className="profile__bg" img="profile-bg.jpg" />
    <Pic
      className="profile__ava"
      img="profile-ava.jpg"
      width="100px"
      height="100px"
    />
    <div className="profile-info card">
      <div className="profile-info__name">Artem Samarin</div>
      <div className="profile-info-props">
        <Feature
          className="profile-info-props-item"
          data={[
            ["Tort", "12.10.2001"],
            ["City", "Samara"],
            ["Edu", "CMaE"],
            ["Web", "ancla.dev"],
          ]}
        />
      </div>
    </div>
    <div className="profile-posts">
      <input
        className="profile-posts-new__text"
        type="text"
        placeholder="How are you, old boy?"
      />

      <button className="profile-posts-new-send">
        <Icon className="profile-posts-new-send__icon" name="Send" />
      </button>

      <div className="profile-posts-wrapper">
        <Post
          className="profile-posts-item"
          text="How stupid that is."
          time="March 4, 19:35"
        />
        <Post
          className="profile-posts-item"
          text="Hey, what are you doing?!"
          time="March 4, 19:37"
        />
      </div>
    </div>
  </div>
);

export default Profile;
