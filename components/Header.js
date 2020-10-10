import { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import ".././node_modules/nprogress/nprogress.css";
import Search from "./blog/Search";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <React.Fragment>
      <Navbar color="light" light expand="md">
        <Link href="/">
          <img
            src={`../../static/images/uclalogo.png`}
            style={{ height: "50px" }}
          />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <React.Fragment>
              <NavItem style={{ cursor: "pointer" }}>
                <Link href="/">
                  <NavLink>Home</NavLink>
                </Link>
              </NavItem>
              {/* <NavItem style={{ cursor: "pointer" }}>
                <Link href="/about">
                  <NavLink>About</NavLink>
                </Link>
              </NavItem> */}
              <NavItem style={{ cursor: "pointer" }}>
                <Link href="/members">
                  <NavLink>Members</NavLink>
                </Link>
              </NavItem>

              <NavItem style={{ cursor: "pointer" }}>
                <Link href="/blogs">
                  <NavLink>Blogs</NavLink>
                </Link>
              </NavItem>

              <NavItem style={{ cursor: "pointer" }}>
                <Link href="/contact">
                  <NavLink>Contact</NavLink>
                </Link>
              </NavItem>
            </React.Fragment>

            {!isAuth() && (
              <React.Fragment>
                <NavItem style={{ cursor: "pointer" }}>
                  <Link href="/signin">
                    <NavLink>Login</NavLink>
                  </Link>
                </NavItem>
                <NavItem style={{ cursor: "pointer" }}>
                  <Link href="/signup">
                    <NavLink>Signup</NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>
            )}

            {isAuth() && isAuth().role === 0 && (
              <NavItem style={{ cursor: "pointer" }}>
                <Link href="/user">
                  <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}
            {isAuth() && isAuth().role === 1 && (
              <NavItem style={{ cursor: "pointer" }}>
                <Link href="/admin">
                  <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}
            {isAuth() && (
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  onClick={() => signout(() => Router.replace(`/signin`))}
                >
                  Logout
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
