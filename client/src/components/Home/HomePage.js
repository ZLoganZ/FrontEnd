import HomePagePic from "../../assets/images/homepage.png";

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <div className="homepage-main">
        <div className="homepage-text">
          <p>Đọc insight thực tế từ người trong ngành</p>

          <p className="homepage-text-inside">
            Careerly, <br /> cộng đồng cho người làm IT
          </p>
        </div>
        <img
          className="HomePagePic"
          src={HomePagePic}
          alt="homepage"
          width="520px"
        />
      </div>
    </div>
  );
};

export default HomePage;
