import { useEffect, useRef, useState } from "react";

const TabItem = ({ children, title }) => children;

const TabView = ({ children = [], onChange }) => {
  if (!children.length) children = [children];
  else children = children.filter((val) => val);

  const [active, setActive] = useState(0);
  const [position, setPosition] = useState({});
  const underlineRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const element = document.getElementById("tab-" + active);
    const box = element.getBoundingClientRect();
    underlineRef.current.style.width = element.offsetWidth + "px";
    underlineRef.current.style.left =
      box.left - containerRef.current.getBoundingClientRect().left + "px";
    onChange && onChange(children[active].props.title);
  }, [active]);

  useEffect(() => {
    window.scrollTo(0, containerRef.current.offsetTop + position);
  }, [active, position]);

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="flex align-items-center relative"
        style={{
          fontSize: "25px",
          lineHeight: "14px",
          fontWeight: 500,
          gap: "20px",
        }}
      >
        {children.map((val, idx) => (
          <span
            style={{ color: active === idx ? "#831129" : "#000000" }}
            key={idx}
            id={"tab-" + idx}
            className="cursor-pointer select-none"
            onClick={() => {
              setPosition(window.scrollY - containerRef.current.offsetTop);
              setActive(idx);
            }}
          >
            {val.props.title}
          </span>
        ))}
        <div
          ref={underlineRef}
          className="absolute"
          style={{
            transition: "500ms",
            height: "2px",
            background: "#831129",
            bottom: "-12px",
          }}
        ></div>
      </div>
      <div style={{ marginTop: "20px" }}>{children && children[active]}</div>
    </div>
  );
};

export default TabView;
export { TabItem };
