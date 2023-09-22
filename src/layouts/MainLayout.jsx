import PropTypes from 'prop-types';
import Menu from '../components/Menu';

const MainLayout = ({ children }) => (
  <div>
    <Menu />
    <main className="main-section flex flex-col relative justify-center pt-8 lg:ml-[250px]">
      {children}
    </main>
  </div>
);

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
