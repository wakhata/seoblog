import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Header>
      {children}
    </React.Fragment>
  );
};

export default Layout;
