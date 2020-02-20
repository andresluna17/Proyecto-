import React, {Component} from 'react'
export default class Navigation extends Component {

    render() {
        return (
            <div>
                {/* top navigation */}
                <div className="top_nav">
                    <div className="nav_menu">
                        <nav className="nav navbar-nav">
                            <ul className=" navbar-right">
                                <li
                                    className="nav-item dropdown open"
                                    style={{
                                    paddingLeft: '15px'
                                }}>
                                    <p
                                        className="user-profile dropdown-toggle"
                                        aria-haspopup="true"
                                        id="navbarDropdown"
                                        data-toggle="dropdown"
                                        aria-expanded="false">
                                        <img src="images/img.jpg" alt=""/>John Doe
                                    </p>
                                    <div
                                        className="dropdown-menu dropdown-usermenu pull-right"
                                        aria-labelledby="navbarDropdown">
                                        <p className="dropdown-item" >
                                            Profile</p>
                                        <p className="dropdown-item" >
                                            <span className="badge bg-red pull-right">50%</span>
                                            <span>Settings</span>
                                        </p>
                                        <p className="dropdown-item" >Help</p>
                                        <p className="dropdown-item" ><i className="fa fa-sign-out pull-right"/>
                                            Log Out</p>
                                    </div>
                                </li>
                                <li role="presentation" className="nav-item dropdown open">
                                    <p
                                        
                                        className="dropdown-toggle info-number"
                                        id="navbarDropdown1"
                                        data-toggle="dropdown"
                                        aria-expanded="false">
                                        <i className="fa fa-envelope-o"/>
                                        <span className="badge bg-green">6</span>
                                    </p>
                                    <ul
                                        className="dropdown-menu list-unstyled msg_list"
                                        role="menu"
                                        aria-labelledby="navbarDropdown1">
                                        <li className="nav-item">
                                            <p className="dropdown-item">
                                                <span className="image"></span>
                                                <span>
                                                    <span>John Smith</span>
                                                    <span className="time">3 mins ago</span>
                                                </span>
                                                <span className="message">
                                                    Film festivals used to be do-or-die moments for movie makers. They were where...
                                                </span>
                                            </p>
                                        </li>
                                        <li className="nav-item">
                                            <p className="dropdown-item">
                                                <span className="image"></span>
                                                <span>
                                                    <span>John Smith</span>
                                                    <span className="time">3 mins ago</span>
                                                </span>
                                                <span className="message">
                                                    Film festivals used to be do-or-die moments for movie makers. They were where...
                                                </span>
                                            </p>
                                        </li>
                                        <li className="nav-item">
                                            <p className="dropdown-item">
                                                <span className="image"></span>
                                                <span>
                                                    <span>John Smith</span>
                                                    <span className="time">3 mins ago</span>
                                                </span>
                                                <span className="message">
                                                    Film festivals used to be do-or-die moments for movie makers. They were where...
                                                </span>
                                            </p>
                                        </li>
                                        <li className="nav-item">
                                            <p className="dropdown-item">
                                                <span className="image"></span>
                                                <span>
                                                    <span>John Smith</span>
                                                    <span className="time">3 mins ago</span>
                                                </span>
                                                <span className="message">
                                                    Film festivals used to be do-or-die moments for movie makers. They were where...
                                                </span>
                                            </p>
                                        </li>
                                        <li className="nav-item">
                                            <div className="text-center">
                                                <p className="dropdown-item">
                                                    <strong>See All Alerts</strong>
                                                    <i className="fa fa-angle-right"/>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* /top navigation */}
            </div>
        );
    }
}
