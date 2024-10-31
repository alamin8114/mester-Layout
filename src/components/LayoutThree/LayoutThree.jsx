import { Outlet } from "react-router-dom"
import Navbar2 from "../Navbar/Navbar2"

const LayoutThree = () => {
  return (
  <>
    <Navbar2/>
    <Outlet/>
  </>
  )
}

export default LayoutThree