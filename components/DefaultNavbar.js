import { useState } from "react";
import Link from "next/link";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";

export default function DefaultNavbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar color="transparent" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <Link href="/">
            <a rel="noreferrer">
              <NavbarBrand>Tangly1024</NavbarBrand>
            </a>
          </Link>
          <NavbarToggler
            onClick={() => setOpenNavbar(!openNavbar)}
            color="white"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            <div className="flex flex-col z-50 lg:flex-row lg:items-center">
              <NavLink
                href="https://blog.tangly1024.com?ref=home"
                target="_blank"
                rel="noreferrer"
                ripple="light"
              >
                <Icon name="description" size="2xl" />
                &nbsp;Blog
              </NavLink>
              <NavLink
                href="https://game.tangly1024.com?ref=home"
                target="_blank"
                rel="noreferrer"
                ripple="light"
              >
                <Icon name="apps" size="2xl" />
                &nbsp;Playground
              </NavLink>
              <div className="text-white">
                <Dropdown
                  color="transparent"
                  size="sm"
                  buttonType="link"
                  buttonText={
                    <div className="py-2.5 font-medium flex items-center">
                      <Icon name="view_carousel" size="2xl" color="white" />
                      <span className="ml-2">Templates</span>
                    </div>
                  }
                  ripple="light"
                >
                  <Link href="/login" passHref>
                    <DropdownItem color="lightBlue">Login</DropdownItem>
                  </Link>
                  <Link href="/register" passHref>
                    <DropdownItem color="lightBlue">Register</DropdownItem>
                  </Link>
                </Dropdown>
              </div>
              <NavLink
                href="https://github.com/tangly1024/tangly1024?ref=home"
                target="_blank"
                rel="noreferrer"
                ripple="light"
              >
                <Icon family="font-awesome" name="fab fa-github" size="xl" />
                &nbsp;Github
              </NavLink>
              <NavLink
                href="https://github.com/tangly1024/tangly1024/issues?ref=home"
                target="_blank"
                rel="noreferrer"
                ripple="light"
              >
                Issues
              </NavLink>
              <Link href="/profile">
                <a rel="noreferrer">
                  <Button
                    color="transparent"
                    className="bg-white text-black ml-4"
                    ripple="dark"
                  >
                    Profile
                  </Button>
                </a>
              </Link>
            </div>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
