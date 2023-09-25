import PropTypes from "prop-types";
import { Menu, MobileMenu } from "../components/navigation";
import Header from "../components/auth/Header";

const MainLayout = ({ children }) => (
  <div>
    <Menu />
    <MobileMenu />
    <main className='main-section flex flex-col relative justify-center lg:ml-[250px]'>
      <Header />
      {children}
    </main>
  </div>
);

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
