import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../page/HomePage";
import UserContainer from "../page/users/UserContainer";
import FoodContainer from "../page/foods/FoodContainer";

class HeaderComponent extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <div className="container">
                            <a href="/" className="navbar-brand">
                                KedaiMakan
                            </a>
                            <div className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={"/"} className="nav-link">
                                        Home
                                    </Link>
                                </li><li className="nav-item">
                                    <Link to={"/user"} className="nav-link">
                                        User
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/food"} className="nav-link">
                                        Food
                                    </Link>
                                </li>
                            </div>
                        </div>
                    </nav>

                    <div className="container mt-3">
                        <Switch>
                            <Route exact path={["/", "/"]} component={HomePage} />
                            <Route exact path={["/", "/user"]} component={UserContainer} />
                            <Route exact path={["/", "/food"]} component={FoodContainer} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default HeaderComponent;