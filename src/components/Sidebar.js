import React, { Fragment, useState } from 'react';
import { VscHome } from 'react-icons/vsc';
import { FiUser } from 'react-icons/fi';
import { BsCode } from 'react-icons/bs';
import { MdOutlineDashboard, MdOutlineContactPage, MdEmail } from 'react-icons/md';
import { AiFillLinkedin, AiOutlineUnorderedList } from 'react-icons/ai';
import { HiOutlineMenuAlt3, HiOutlineArrowLeft } from 'react-icons/hi';

import { Link, NavLink } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <div className={`sidebar-container ${isOpen ? 'open' : 'closed'} bg-dark`}>
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          {/* Toggle Button */}
          <button className="toggle-btn text-white mb-3" onClick={toggleSidebar}>
            {isOpen ? <HiOutlineArrowLeft className="fs-4" /> : <HiOutlineMenuAlt3 className="fs-4" />}
          </button>

          {/* Sidebar Logo with Name */}
          <Link
            to="/"
            className={`d-flex align-items-center pb-1 mb-md-0 me-md-auto text-white text-decoration-none ${isOpen ? '' : 'justify-content-center'}`}
          >
            <span className={`fs-5 ff-jost fw-600 transition-name ${isOpen ? 'd-inline' : 'd-none'}`}>
              Shoail
            </span>
          </Link>

          {/* Navigation Links */}
          <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
            <li className="nav-item">
              <NavLink to="/" className="nav-link align-middle px-0 text-white">
                <VscHome className="fs-5" />
                {isOpen && <span className="ms-2">Home</span>}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link align-middle px-0 text-white">
                <FiUser className="fs-5" />
                {isOpen && <span className="ms-2">About</span>}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/skills" className="nav-link align-middle px-0 text-white">
                <BsCode className="fs-5" />
                {isOpen && <span className="ms-2">Skills</span>}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/mywork" className="nav-link align-middle px-0 text-white">
                <MdOutlineDashboard className="fs-5" />
                {isOpen && <span className="ms-2">My Work</span>}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/resume" className="nav-link align-middle px-0 text-white">
                <AiOutlineUnorderedList className="fs-5" />
                {isOpen && <span className="ms-2">Resume</span>}
              </NavLink>
            </li>
          </ul>
          <hr />

          {/* Contact Dropdown */}
          <div className="dropdown pb-4 dropup">
            <a
              href="/"
              className={`d-flex align-items-center text-white text-decoration-none dropdown-toggle ${isOpen ? '' : 'justify-content-center'}`}
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <MdOutlineContactPage className="fs-5" />
              {isOpen && <span className="d-none d-sm-inline mx-1">Contact</span>}
            </a>
            <ul className="dropdown-menu shadow" aria-labelledby="dropdownUser1">
              <li>
                <a className="dropdown-item text-black" href="mailto:shoailu02@gmail.com" target="/blank">
                  <MdEmail className="fs-5" /> Email
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item text-black" href="https://www.linkedin.com/in/shoail/" target="/blank">
                  <AiFillLinkedin className="fs-5" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Sidebar;
