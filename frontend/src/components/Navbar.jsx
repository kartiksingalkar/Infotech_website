import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu"
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../media/logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri'
import { IoIosArrowForward } from 'react-icons/io'
import Images from './Imgimport';

function OffcanvasExample() {

    const [open, setOpen] = useState(true);

    const closeDropdown = () => {

        document.getElementsByClassName('more').style.display = 'none'
        document.getElementsByClassName('navbar-liks').style.display = 'none'


    }


    return (
        <>
            <Navbar sticky='true' expand='lg' className="navbar">
                <Container fluid>
                    <Navbar.Brand href="/"><img src={Logo} alt="logo" className='img-fluid' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas id={`offcanvasNavbar-expand-lg`} aria-labelledby={`offcanvasNavbarLabel-expand-lg`} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                <Link to='/'><img src={Logo} alt="logo" className='img-fluid' /></Link>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-center flex-grow-1 pe-3 nav-container">
                                {/* <Nav.Link href="/"  >Home</Nav.Link> */}
                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/about'  >About Us</NavLink>

                                <div class="navbar-dd">
                                    <div class="nav-links-dd">
                                        <ul class="links-dd">
                                            <li>
                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/market' onClick={closeDropdown}>Marketing Solution <RiArrowDownSLine /></NavLink>
                                                <ul class="htmlCss-sub-menu sub-menu-dd" >
                                                    <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/digital-marketing' onClick={closeDropdown} >
                                                        <li class="more" >
                                                            <span >Digital Marketing</span><span><IoIosArrowForward /></span>

                                                            <ul class="more-sub-menu sub-menu-dd">
                                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/digital-marketing/sem' onClick={closeDropdown}><li><span>Search Engine Marketing</span></li></NavLink>

                                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/digital-marketing/seo' onClick={closeDropdown}><li><span>Search Engine Optimization</span></li></NavLink>

                                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/digital-marketing/smm' onClick={closeDropdown}><li><span>Social Media Marketing</span></li></NavLink>

                                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/digital-marketing/smo' onClick={closeDropdown}><li><span>Social Media  Optimization</span></li></NavLink>

                                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/digital-marketing/sms_marketing' onClick={closeDropdown}><li><span>SMS Marketing</span></li></NavLink>

                                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/digital-marketing/em' onClick={closeDropdown}><li><span>Email Marketing</span></li></NavLink>

                                                            </ul>
                                                        </li>
                                                    </NavLink>

                                                    <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/b2b_marketing' onClick={closeDropdown} >
                                                        <li class="more">
                                                            <span>B2B Marketing Solutions </span><span><IoIosArrowForward /></span>

                                                            <ul class="more-sub-menu sub-menu-dd">
                                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/b2b/mils' onClick={closeDropdown}><li><span>MILs MQLs SQLs & SRL</span></li></NavLink>

                                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/b2b/content_syndication' onClick={closeDropdown}><li><span>Content Syndication</span></li></NavLink>

                                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/b2b/appointment_generation' onClick={closeDropdown}><li><span>Appointment Generation </span></li></NavLink>

                                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/b2b/bant' onClick={closeDropdown}><li><span>BANT & CHAMP Leads</span></li></NavLink>

                                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/b2b/intet_leads' onClick={closeDropdown}><li><span>Intent Leads</span></li></NavLink>

                                                            </ul>
                                                        </li>
                                                    </NavLink>


                                                    <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/event_support' onClick={closeDropdown}>
                                                        <li class="more">
                                                            <span>Event Support Services </span><span><IoIosArrowForward /></span>

                                                            <ul class="more-sub-menu sub-menu-dd">
                                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/event_support/seminar' onClick={closeDropdown}><li><span>Seminar & Webinar Invitations & Registrations </span></li></NavLink>

                                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/event_support/trade_show' onClick={closeDropdown}><li><span>Trade Show Visitor Invitations & Registrations</span></li></NavLink>

                                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/event_support/webcast' onClick={closeDropdown}><li><span>Webcast Invitations & Registrations</span></li></NavLink>

                                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/event_support/exhibition' onClick={closeDropdown} ><li><span>B2B Exhibition Booth Lead Generation</span></li></NavLink>

                                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/event_support/invitations' onClick={closeDropdown} ><li><span>Delegate Invitations & Registrations</span></li></NavLink>

                                                            </ul>
                                                        </li>

                                                    </NavLink>

                                                    <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/database_services' onClick={closeDropdown}>
                                                        <li class="more">
                                                            <span>B2B Database Services</span><span><IoIosArrowForward /></span>

                                                            <ul class="more-sub-menu sub-menu-dd">
                                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/database_services/account_profiling' onClick={closeDropdown} ><li><span>Account Profiling</span></li></NavLink>

                                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/database_services/db_mining' onClick={closeDropdown}><li><span>B2B Database Mining & Extraction</span></li></NavLink>

                                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/database_services/db_research' onClick={closeDropdown}><li><span>B2B Database Research</span></li></NavLink>

                                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/database_services/db_cleansing' onClick={closeDropdown}><li><span>B2B Database Cleansing</span></li></NavLink>

                                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/database_services/db_validation' onClick={closeDropdown}><li><span>B2B Database Validation</span></li></NavLink>

                                                            </ul>
                                                        </li>
                                                    </NavLink>
                                                </ul>
                                            </li>
                                            <li>
                                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/it-solutions' onClick={closeDropdown} >IT Solution <RiArrowDownSLine /></NavLink>
                                                <ul class="js-sub-menu sub-menu-dd">
                                                    <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/mobile-development' onClick={closeDropdown}><li><span>Mobile App Development</span></li></NavLink>

                                                    <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/web-development' onClick={closeDropdown}><li><span>Web Development</span></li></NavLink>

                                                    <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/uiux' onClick={closeDropdown} ><li><span>UI/UX Designing</span></li></NavLink>

                                                    <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/hrms' onClick={closeDropdown} ><li><span>Custom HRMS Solutions</span></li></NavLink>

                                                    <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/erp' onClick={closeDropdown} ><li><span>Custom ERP Solutions</span></li></NavLink>

                                                    <NavLink activeClassName='active-nav-tab' className='navbar-liks' to='/crm' onClick={closeDropdown} ><li><span>Custom CRM Solutions</span></li></NavLink>

                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to="/career">Career</NavLink>
                                <NavLink activeClassName='active-nav-tab' className='navbar-liks' to="/contactus">Contact Us</NavLink>
                                {/* <NavLink activeClassName='active-nav-tab' className='navbar-liks' to="/blogs">Blogs</NavLink> */}
                                {/* <NavLink activeClassName='active-nav-tab' className='navbar-liks' to="/casestudies">Case Studies</NavLink> */}
                            </Nav>
                            <div className="navbar-social-icons">
                                <ul>
                                    <a href="#"><li><img src={Images.instaicon} alt='' /></li></a>
                                    <a href="#"><li><img src={Images.fbicon} alt='' /></li></a>
                                    <a href="#"><li><img src={Images.twittericon} alt='' /></li></a>
                                    <a href="#"><li><img src={Images.linkedinicon} alt='' /></li></a>
                                </ul>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>



        </>
    );
}

export default OffcanvasExample;