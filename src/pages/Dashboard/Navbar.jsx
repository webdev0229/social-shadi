import TabView, { TabItem } from "../../components/Tabview/TabView"

const Navbar = () => {
  return (
    <div style={{ padding: "20px 20px 0 20px" }} className="flex align-items-center justify-content-between">
      <div style={{ fontFamily: "Allura, cursive", color: "#831129", fontWeight: 600, fontSize: "25px", marginBottom: "5px" }} className="flex gap-2 align-items-center">
        <span >Social</span>
        <i className="fa-solid fa-heart"></i>
        <span>Shadi</span>
      </div>
      <div className="mt-1">
        <TabView>
          <TabItem title="HOME"></TabItem>
          <TabItem title="FIND PARTNER"></TabItem>
          <TabItem title="WEDDING PLANNER"></TabItem>
        </TabView>
      </div>
    </div>
  )
}

export default Navbar
