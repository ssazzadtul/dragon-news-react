import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div className="border">
      <div className="p-4 space-y-3">
        <h2 className="text-3xl ">Login with</h2>
        <button className="btn btn-outline w-full">
          <FcGoogle />
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Github
        </button>
      </div>

      <div className="p-4 ">
        <h2 className="text-3xl mb-4 ">Find Us On</h2>
        <a
          className="flex text-lg items-center border rounded-t-lg p-2"
          href=""
        >
          <FaFacebookSquare></FaFacebookSquare> Facebook
        </a>
        <a className="flex text-lg items-center border-x p-2" href="">
          <FaXTwitter></FaXTwitter> Twitter
        </a>
        <a
          className="flex text-lg items-center border p-2 rounded-b-lg"
          href=""
        >
          <FaInstagram></FaInstagram> Instagram
        </a>
      </div>

      <div className="p-4 space-y-3">
        <h2 className="text-3xl ">Qzone</h2>

        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};
export default RightSideNav;
