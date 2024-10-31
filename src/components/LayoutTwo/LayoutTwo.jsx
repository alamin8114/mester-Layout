import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import SideNav from "../Navbar/SideNav"
import Footer from "../Footer/Footer"

const LayoutTwo = () => {
  return (
    <>
    <Navbar/>
    <div className="flex">
    <SideNav/>
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default LayoutTwo