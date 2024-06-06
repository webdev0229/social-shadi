const Footer = () => {
  const array = [
    "Home",
    "About Us",
    "Register Here",
    "Find Partner",
    "Member Online",
    "Nri Matrimonials",
    "Login",
    "Advertise with us",
    "Testimonials",
    "FAQ's",
    "Terns & Conditions",
    "Post Your Profile",
    "Contact Us",
    "Wedding Planner",
    "Sitemap",
    "Resource",
    "RSS Feed",
    "Refer a Friend",
  ];
  return (
    <div
      style={{
        background:
          "linear-gradient(107.2deg, rgb(0, 0, 0) 10.6%, #831129 91.1%)",
        height: "800px",
      }}
    >
      <div className="w-full flex  p-8 ">
        <div className="w-full flex justify-content-center">
          <div cla>
            <div style={{ color: "white", fontSize: "25px" }}>QUICK INFO</div>
            <div className="mt-6 flex flex-column gap-2">
              {array.map((val, i) => {
                return <div style={{ color: "white" }}>{val}</div>;
              })}
            </div>
          </div>
        </div>

        <div className=" w-full">
          <div>
            <div style={{ color: "white", fontSize: "25px" }}>FOLLOW US</div>
            <div className="mt-5 flex flex-column gap-4">
              <div className="flex align-items-center gap-3">
                <i
                  className="fa-brands fa-square-facebook"
                  style={{ fontSize: "50px", color: "white" }}
                />
                <span style={{ fontSize: "30px", color: "white" }}>
                  Facebook
                </span>
              </div>
              <div className="flex align-items-center  gap-3">
                <i
                  className="fa-brands fa-square-twitter"
                  style={{ fontSize: "50px", color: "white" }}
                />
                <span style={{ fontSize: "30px", color: "white" }}>
                  Twitter
                </span>
              </div>
              <div className="flex align-items-center  gap-3">
                <i
                  className="fa-brands fa-square-instagram"
                  style={{ fontSize: "50px", color: "white" }}
                />
                <span style={{ fontSize: "30px", color: "white" }}>
                  Instagram
                </span>
              </div>
              <div className="flex align-items-center  gap-3">
                <i
                  className="fa-brands fa-square-google-plus"
                  style={{ fontSize: "50px", color: "white" }}
                />
                <span style={{ fontSize: "30px", color: "white" }}>
                  Google Plus
                </span>
              </div>
              <div className="flex align-items-center  gap-3">
                <i
                  className="fa-brands fa-linkedin"
                  style={{ fontSize: "50px", color: "white" }}
                />
                <span style={{ fontSize: "30px", color: "white" }}>
                  Linked In
                </span>
              </div>
              <div className="flex align-items-center  gap-3">
                <i
                  className="fa-brands fa-youtube "
                  style={{ fontSize: "50px", color: "white" }}
                />
                <span style={{ fontSize: "30px", color: "white" }}>
                  Youtube
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ color: "white" }} className="flex p-3">
        <span className="ml-auto">
          Cpoyright @ socialshadi.com All Rights Reserved.
        </span>
      </div>
    </div>
  );
};
export default Footer;
