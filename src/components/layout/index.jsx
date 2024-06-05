import styles from './Layout.module.scss'
import Navbar from "./Navbar";
import Footer from "./Footer";
function Layout(props) {
    return (
      <div className={`${styles.app} `}>
        <Navbar />
        <main className={`${styles.main} container`}>
          {props.children}
        </main>
        <Footer />
      </div>
    );
  }
  
  export default Layout;