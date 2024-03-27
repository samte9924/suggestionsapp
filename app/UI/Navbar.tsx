"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { MdChecklist } from "react-icons/md";
import { RiAdminLine, RiUser3Fill, RiUserLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

interface Props {
  icon?: React.ReactNode;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

let useClickOutside = (handler: Function) => {
  let domNode = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let maybeHandler = (event: MouseEvent) => {
      if (domNode.current && !domNode.current.contains(event.target as Node)) {
        handler(event);
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

export default function Navbar() {
  return (
    <div className="sticky top-0 w-full p-8 flex justify-between items-center">
      <Logo />
      <DropdownMenu icon={<FiEye />} />
    </div>
  );
}

function NavItem(props: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-item" onClick={() => setOpen(!open)}>
      <button className="icon-button">
        {open ? <IoMdClose /> : props.icon}
      </button>
      {open && props.children}
    </div>
  );
}

function DropdownMenu(props: Props) {
  const [open, setOpen] = useState(false);
  let domNode = useClickOutside(() => setOpen(false));
  return (
    <div
      onClick={() => setOpen(!open)}
      className="dropdown-selector"
      ref={domNode}
    >
      <button className="selector-button">
        {open ? <FiEyeOff /> : props.icon}
      </button>
      {open ? (
        <div className="dropdown">
          <DropdownItem href="/user/account" leftIcon={<RiUser3Fill />}>
            Account
          </DropdownItem>
          <hr className="menu-divider" />
          <DropdownItem href="/admin/dashboard" leftIcon={<RiAdminLine />}>
            Admin Dashboard
          </DropdownItem>
          <hr className="menu-divider" />
          <DropdownItem href="/newsletter" leftIcon={<IoMailOutline />}>
            Newsletter
          </DropdownItem>
          <hr className="menu-divider" />
          <DropdownItem href="/changelog" leftIcon={<MdChecklist />}>
            Changelog
          </DropdownItem>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

function DropdownItem(props: Props) {
  return (
    <Link href={props.href ?? ""} className="menu-item">
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
      <span className="icon-right">{props.rightIcon}</span>
    </Link>
  );
}
