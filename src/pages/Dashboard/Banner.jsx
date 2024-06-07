import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

const Banner = () => {
  const [registerVisible, setRegisterVisible] = useState(false);
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");
  const [value8, setValue8] = useState("");
  return (
    <div
      style={{
        background:
          "linear-gradient(107.2deg, rgb(0, 0, 0) 10.6%, #831129 91.1%)",
        height: "800px",
      }}
      className="w-full flex flex-column align-items-center justify-content-around"
    >
      <Dialog
        header="Register"
        visible={registerVisible}
        style={{ width: "25%", fontSize: "17px", fontWeight: "500" }}
        headerClassName="p-2"
        headerStyle={{ color: "#831129" }}
        onHide={() => {
          setRegisterVisible(false);
          setValue("");
          setValue1("");
          setValue2("");
          setValue3("");
          setValue4("");
          setValue5("");
          setValue6("");
          setValue7("");
          setValue8("");
        }}
      >
        <div className="p-4">
          <div className="p-2 flex  flex-column gap-1">
            <span style={{ color: "#831129" }}>Email </span>

            <InputText
              style={{ height: "40px" }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="p-2 flex  flex-column">
            <span style={{ color: "#831129" }}>Password </span>

            <InputText
              style={{ height: "40px" }}
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
            />
          </div>
          <div className="p-2 flex  flex-column">
            <span style={{ color: "#831129" }}>Date Of Birth </span>

            <InputText
              style={{ height: "40px" }}
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
            />
          </div>
          <div className="p-2 flex  flex-column">
            <span style={{ color: "#831129" }}>Height </span>

            <InputText
              style={{ height: "40px" }}
              value={value3}
              onChange={(e) => setValue3(e.target.value)}
            />
          </div>
          <div className="p-2 flex  flex-column">
            <span style={{ color: "#831129" }}>Maritial Status </span>

            <InputText
              style={{ height: "40px" }}
              value={value4}
              onChange={(e) => setValue4(e.target.value)}
            />
          </div>
          <div className="p-2 flex  flex-column">
            <span style={{ color: "#831129" }}>Religion </span>

            <InputText
              style={{ height: "40px" }}
              value={value5}
              onChange={(e) => setValue5(e.target.value)}
            />
          </div>
          <div className="p-2 flex  flex-column">
            <span style={{ color: "#831129" }}>City </span>

            <InputText
              style={{ height: "40px" }}
              value={value6}
              onChange={(e) => setValue6(e.target.value)}
            />
          </div>
          <div className="p-2 flex  flex-column">
            <span style={{ color: "#831129" }}>Pincode </span>

            <InputText
              style={{ height: "40px" }}
              value={value7}
              onChange={(e) => setValue7(e.target.value)}
            />
          </div>
          <div className="p-2 flex  flex-column">
            <span style={{ color: "#831129" }}>Phone </span>

            <InputText
              style={{ height: "40px" }}
              value={value8}
              onChange={(e) => setValue8(e.target.value)}
            />
          </div>
        </div>
        <div className="flex p-4 justify-content-center">
          <button className="custom-btn cursor-pointer ">Register</button>
        </div>
      </Dialog>
      <div style={{ color: "white" }} className="w-full flex">
        <div className="w-full flex flex-column justify-content-center align-items-center">
          <span style={{ fontSize: "35px" }}>Find Your Best</span>
          <span style={{ fontSize: "70px", color: "yellow" }}>
            Life Partner
          </span>
          <span style={{ fontSize: "25px" }}>with our matrimonial service</span>
          <button
            onClick={() => {
              setRegisterVisible(true);
            }}
            className="banner-hover p-4 mt-5 cursor-pointer"
            style={{ borderRadius: "8px", fontSize: "25px", color: "#831129" }}
          >
            <span>REGISTER NOW !</span>
            <div>it's free</div>
          </button>
        </div>
        <div className="w-full banner-hover flex align-items-center">
          <img
            style={{
              borderRadius: "8px",
              boxShadow:
                "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
            }}
            src="hands.webp"
          ></img>
        </div>
      </div>
      <div
        className="flex gap-3 flex-column justify-content-center align-items-center"
        style={{
          width: "50%",
          background: "white",
          borderRadius: "8px",
          height: "100px",
        }}
      >
        <div className="flex gap-3 justify-content-between align-items-center">
          <span>Looking For</span>
          <input
            className="cursor-pointer"
            type="radio"
            id="bride"
            name="customer"
          ></input>
          <label htmlFor="bride">Bride</label>
          <input
            className="cursor-pointer"
            type="radio"
            id="groom"
            name="customer"
          ></input>
          <label htmlFor="groom">Groom</label>
        </div>
        <div className="w-full flex justify-content-around gap-3">
          <input
            placeholder="Select Marital"
            className="custom-input cursor-pointer"
          ></input>
          <input
            placeholder="Select Country"
            className="custom-input cursor-pointer"
          ></input>
          <input
            placeholder="Select Age"
            className="custom-input cursor-pointer"
          ></input>
          <button className="custom-btn cursor-pointer">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
