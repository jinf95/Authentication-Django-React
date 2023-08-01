import Navbar from "./Navbar";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

const Layout = ({ title, content, children }) => {
  return (
    <>
      <Helmet>
        <title> {title} </title>
        <meta name="description" content={content} />
      </Helmet>
      <Navbar />
      <div className="container mt5">{children}</div>
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
