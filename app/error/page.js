import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Error.module.css";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
export const metadata = {
  title: "error",
}
const ErrorPage = () => {
  return (
    <div className={styles.errorcontainer}>
    <Navbar/>
    <Dashboard/>
    <div className={styles.error}>
      <Image src="/Images/error.png" alt="404 Page Not Found" width={630} height={630} />
    </div>
  </div>
  )
}
export default ErrorPage