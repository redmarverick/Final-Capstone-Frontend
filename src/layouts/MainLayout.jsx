import PropTypes from "prop-types";
import { Menu, MobileMenu } from "../components/navigation";
import Header from "../components/auth/Header";

const MainLayout = ({ children }) => (
  <div>
    <Menu />
    <MobileMenu className='z-50' />
    <main className=' flex flex-col relative justify-center lg:ml-[250px]'>
      <Header className='z-20' />
      <div className='mt-20 flex flex-col justify-center'>{children}</div>
    </main>
  </div>
);

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
