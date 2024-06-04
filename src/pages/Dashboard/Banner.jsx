const Banner = () => {
  return (
    <div
      style={{
        background: "linear-gradient(107.2deg, rgb(0, 0, 0) 10.6%, #831129 91.1%)",
        height: "800px"
      }}
      className="w-full flex flex-column align-items-center justify-content-around">
      <div style={{ color: "white" }} className="w-full flex">
        <div className="w-full flex flex-column justify-content-center align-items-center">
          <span style={{ fontSize: "25px" }}>Find Your Best</span>
          <span style={{ fontSize: "50px", color: "yellow" }}>Life Partner</span>
          <span style={{ fontSize: "18px" }}>with our matrimonial service</span>
        </div>
        <div className="w-full banner-hover flex align-items-center">
          <img style={{ borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)" }} src="hands.webp" ></img>
        </div>
      </div>
      <div className="flex gap-3 flex-column justify-content-center align-items-center" style={{ width: "50%", background: "white", borderRadius: "8px", height: "100px" }}>
        <div className="flex gap-3 justify-content-between align-items-center">
          <span>Looking For</span>
          <input className="cursor-pointer" type="radio" id="bride" name="customer"></input>
          <label htmlFor="bride">Bride</label>
          <input className="cursor-pointer" type="radio" id="groom" name="customer"></input>
          <label htmlFor="groom">Groom</label>
        </div>
        <div className="w-full flex justify-content-around gap-3">
          <input placeholder="Select Marital" className="custom-input"></input>
          <input placeholder="Select Country" className="custom-input"></input>
          <input placeholder="Select Age" className="custom-input"></input>
          <button className="custom-btn">Search</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
