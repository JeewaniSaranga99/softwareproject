import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.jpeg';
import dashboardicon from '../assets/dashboardicon.png';
import warehouse from '../assets/warehouse.png';
import customer from '../assets/customer.png';
import categories from '../assets/categories.png';
import order from '../assets/order.png';
import settings from '../assets/settings.png';
import logout from '../assets/logout.png';

function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-b from-[#006d00] to-[#00cc00] text-white h-screen fixed top-0 left-0 w-1/5 pt-20">
            <div className="flex flex-col items-center justify-center">
                <div>
                <img src={logo} alt="logo" className="mx-auto mb-10 hover:scale-125 hover:border-6 border-emerald-400" />


                </div>

                <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`md:block ${menuOpen ? "block" : "hidden"}`}>
                    
                    <li className="nav-item" onClick={() => setMenuOpen(false)}>
                        <NavLink to="/" className="flex items-center py-5 hover:bg-emerald-400 hover:text-black">
                            <img src={dashboardicon} alt="dashboard" width="20" height="20" className="mr-2" />
                            Dashboard
                        </NavLink>
                    </li>
                    
                    <li className="nav-item" onClick={() => setMenuOpen(false)}>
                        <NavLink to="/customer" className="flex items-center py-5 hover:bg-emerald-400 hover:text-black">
                            <img src={customer} alt="customer" width="20" height="20" className="mr-2" />
                            Customers
                        </NavLink>
                    </li>
                    
                    <li className="nav-item" onClick={() => setMenuOpen(false)}>
                        <NavLink to="/categories" className="flex items-center py-5 hover:bg-emerald-400 hover:text-black">
                            <img src={categories} alt="categories" width="20" height="20" className="mr-2" />
                            Categories
                        </NavLink>
                    </li>
                    <li className="nav-item" onClick={() => setMenuOpen(false)}>
                        <NavLink to="/order" className="flex items-center py-5 hover:bg-emerald-400 hover:text-black">
                            <img src={order} alt="order" width="20" height="20" className="mr-2" />
                            Orders
                        </NavLink>
                    </li>
                    <li className="nav-item" onClick={() => setMenuOpen(false)}>
                        <NavLink to="/warehouse" className="flex items-center py-5 hover:bg-emerald-400 hover:text-black">
                            <img src={warehouse} alt="warehouse" width="20" height="20" className="mr-2" />
                            Warehouses
                        </NavLink>
                    </li>

                    <br></br>

                    <div className="settings_logout">
                        <li className="nav-item" onClick={() => setMenuOpen(false)}>
                            <NavLink to="/settings" className="flex items-center py-5 hover:bg-emerald-400 hover:text-black">
                                <img src={settings} alt="settings" width="20" height="20" className="mr-2" />
                                Settings
                            </NavLink>
                        </li>
                        <li className="nav-item" onClick={() => setMenuOpen(false)}>
                            <NavLink to="/logout" className="flex items-center py-5 hover:bg-emerald-400 hover:text-black">
                                <img src={logout} alt="logout" width="20" height="20" className="mr-2" />
                                Logout
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;