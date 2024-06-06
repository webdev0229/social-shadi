const Story = () => {
  return (
    <div
      style={{
        position: "relative",
        background: "linear-gradient(70deg, rgb(0, 0, 0) 10.6%, #831129 91.1%)",
        height: "800px",
      }}
      className="mt-5"
    >
      <svg
        className="absolute w-full"
        style={{ bottom: 0 }}
        viewBox="0 0 500 100"
      >
        <path
          stroke="transparent"
          style={{ fill: "rgba(255,255,255,0.3)" }}
          d="M0 50 C 50 60, 50 60, 100 50 C 150 40, 150 40, 200 50 C 250 60, 250 60, 300 50 C 350 40, 350 40, 400 50 C 450 60, 450 60, 500 50 L 500 100 L 0 100 z"
        ></path>
        <path
          style={{
            fill: "white",
            strokeWidth: "5px",
            stroke: "rgba(255,255,255,0.3)",
          }}
          d="M0 50 C 50 40, 50 40, 100 50 C 150 60, 150 60, 200 50 C 250 40, 250 40, 300 50 C 350 60, 350 60, 400 50 C 450 40, 450 40, 500 50 L 500 100 L 0 100 z"
        ></path>
      </svg>
      <div className="  flex  w-full flex  ">
        <div className="flex w-full   justify-content-end  p-5">
          <img
            style={{
              borderRadius: "8px",
              boxShadow:
                "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
              width: "40%",
            }}
            className="banner-hover  "
            src="pexels-photo-1026390.webp"
          ></img>
        </div>
        <div className="w-full p-3 flex flex-column  gap-4">
          <div style={{ color: "white", fontSize: "35px" }}>Success Story</div>
          <div className="flex flex-column gap-2">
            <span
              style={{ color: "white", fontWeight: "bolder", fontSize: "25px" }}
            >
              Jayanti & Rohit Kumar
            </span>
            <span style={{ color: "white", width: "50%", fontSize: "20px" }}>
              Bride says, "SocialShadi helped me meet my loving life partner
              Rohit. I took their e-meet your mate service and am super
              satisfied with its results....."
            </span>
            <div className="flex align-items-center gap-4 mt-4">
              <i
                className="fa fa-envelope"
                style={{ fontSize: "50px", color: "white" }}
              />
              <span
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "28px",
                }}
              >
                Jayanti & Rohit Kumar
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-content-center ">
        <button
          className="p-4 cursor-pointer banner-hover "
          style={{ borderRadius: "8px", fontSize: "20px" }}
        >
          View All Success Stories
        </button>
      </div>
      <div
        className="flex justify-content-center "
        style={{
          position: "relative",
          top: "150px",
        }}
      >
        <button
          className="p-4 cursor-pointer banner-hover "
          style={{
            zIndex: 1000,
            borderRadius: "8px",
            fontSize: "20px",
            color: "white",
            background:
              "linear-gradient(107.2deg, rgb(0, 0, 0) 10.6%, #831129 91.1%)",
          }}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Story;
