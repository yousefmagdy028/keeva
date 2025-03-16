import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import AboutUs from "../components/AboutUs";
export const metadata = {
  title: "About us",
}
const AboutPage = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh", paddingBottom: "100px" }}>
      <Navbar />
      <Dashboard />
      <AboutUs />
    </div>
  );
};

export default AboutPage;