import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import ContactForm from "../components/ContactFrom";
export const metadata = {
  title: "form",
}

const FormPage = () => {
  return (
    <div>
      <Navbar/>
      <Dashboard/>
      <ContactForm/>
    </div>
  )
}
export default FormPage;