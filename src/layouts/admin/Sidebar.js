import React from 'react'
import {Link} from 'react-router-dom';

export const Sidebar = () => {
  return (
    <>
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="index.html">
              <i className="mdi mdi-home menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" data-bs-toggle="collapse" to="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i className="mdi mdi-circle-outline menu-icon"></i>
              <span className="menu-title">UI Elements</span>
              <i className="menu-arrow"></i>
            </Link>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className="nav-link" to="pages/ui-features/buttons.html">Buttons</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="pages/ui-features/typography.html">Typography</Link></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="pages/forms/basic_elements.html">
              <i className="mdi mdi-view-headline menu-icon"></i>
              <span className="menu-title">Form elements</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="pages/charts/chartjs.html">
              <i className="mdi mdi-chart-pie menu-icon"></i>
              <span className="menu-title">Charts</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="pages/tables/basic-table.html">
              <i className="mdi mdi-grid-large menu-icon"></i>
              <span className="menu-title">Tables</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="pages/icons/mdi.html">
              <i className="mdi mdi-emoticon menu-icon"></i>
              <span className="menu-title">Icons</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" data-bs-toggle="collapse" to="#auth" aria-expanded="false" aria-controls="auth">
              <i className="mdi mdi-account menu-icon"></i>
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow"></i>
            </Link>
            <div className="collapse" id="auth">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className="nav-link" to="pages/samples/login.html"> Login </Link></li>
                <li className="nav-item"> <Link className="nav-link" to="pages/samples/login-2.html"> Login 2 </Link></li>
                <li className="nav-item"> <Link className="nav-link" to="pages/samples/register.html"> Register </Link></li>
                <li className="nav-item"> <Link className="nav-link" to="pages/samples/register-2.html"> Register 2 </Link></li>
                <li className="nav-item"> <Link className="nav-link" to="pages/samples/lock-screen.html"> Lockscreen </Link></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="documentation/documentation.html">
              <i className="mdi mdi-file-document-box-outline menu-icon"></i>
              <span className="menu-title">Documentation</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
