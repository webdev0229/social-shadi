const Story = () => {
  return (
    <div
      style={{
        position: "relative",
        background: "linear-gradient(70deg, rgb(0, 0, 0) 10.6%, #831129 91.1%)",
        height: "800px"
      }}>
      <svg className="absolute w-full" style={{ bottom: 0 }} viewBox="0 0 500 100">
        <path stroke="transparent" style={{ fill: "rgba(255,255,255,0.3)" }} d="M0 50 C 50 60, 50 60, 100 50 C 150 40, 150 40, 200 50 C 250 60, 250 60, 300 50 C 350 40, 350 40, 400 50 C 450 60, 450 60, 500 50 L 500 100 L 0 100 z"></path>
        <path style={{ fill: "white", strokeWidth: "5px", stroke: "rgba(255,255,255,0.3)" }} d="M0 50 C 50 40, 50 40, 100 50 C 150 60, 150 60, 200 50 C 250 40, 250 40, 300 50 C 350 60, 350 60, 400 50 C 450 40, 450 40, 500 50 L 500 100 L 0 100 z"></path>
      </svg>
    </div>
  )
}

export default Story
