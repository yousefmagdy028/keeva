import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import FeaturedWork from "../components/FeaturedWork";
import Footer from "../components/Footer";
export const metadata = {
  title: "portfolio",
}
const Featured = () => {
  return(
    <div>
      <Navbar/>
      <Dashboard/>
      <FeaturedWork/>
      <Footer/>
    </div>
  )
}
export default Featured