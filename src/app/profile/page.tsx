import "./Profile.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Image from "next/image";
import profile from "../../../public/profile.jpeg";

const Profile = () => {
  return (
    <div className="profile-block">
      <div className="profile-card">
        <h3>Account Settings</h3>

        <div className="profile">
            <div className="profile-image">
              <Image src={profile} alt="img" width={100} height={100} />
              <div className="camera-icon">
                  <CameraAltIcon />
              </div>
            </div>

            <div>
              <h4>Marry Doe</h4>
              <p>Marry@Gmail.Com</p>
            </div>
        </div>

        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
          Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
    </div>
    </div>
  )
}

export default Profile
