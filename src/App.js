import React,{useState}from 'react';
import Heroimg from '../src/images/login.png';
import Searchimg from '../src/images/search.png';
import Dowloadimg from '../src/images/dowload1.png';
import Initstate from '../src/images/inistate.png';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import LazyLoad from "react-lazyload";

function App() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const [loadedImages, setLoadedImages] = useState([]);

    const handleImageLoad = (src) => {
        setLoadedImages((prevLoadedImages) => [...prevLoadedImages, src]);
    };

    return (
        <div className="App">
            <div className="header">
                <div className="div-1">
                    <ScrollLink to="top" smooth={true} duration={500}>
                        <h1 className="brand">ICONOASIS</h1>
                    </ScrollLink>
                </div>

                <div className="div-2">
                    <ScrollLink to="about2" smooth={true} duration={500}>
                        <span className="sp-1">About</span>
                    </ScrollLink>
                    <ScrollLink to="feature1" smooth={true} duration={500}>
                        <span className="sp-2">Features</span>
                    </ScrollLink>
                    <a href="http://ec2-3-21-134-116.us-east-2.compute.amazonaws.com" className="link">
                        <span className="sp-2">Try For Free</span>
                    </a>
                </div>
            </div>

            <div className="hero" id="top">
                <div className="herocontents">
                    <div className="herotext">Your one-stop Photo destination</div>

                    <div className="heroimg">
                        <LazyLoad offset={100} once>
                        <img src={Heroimg} alt=""
                             className={`lazy-image ${loadedImages.includes(Heroimg) ? "" : "image-placeholder"}`}
                             onLoad={() => handleImageLoad(Heroimg)}
                        />
                        </LazyLoad>
                    </div>
                </div>
                <div className="button--try">
                    <a href="http://ec2-3-21-134-116.us-east-2.compute.amazonaws.com" className="link">
                        <div>Try for free</div>
                    </a>
                </div>
            </div>

            <div className="feature" id="feature1">
                <div className="herotext spec">FEATURES</div>
                <div className="searchImage">
                    <div className="ftcont">
                        <div className="ftimg">
                            <LazyLoad offset={100} once>
                                <img src={Searchimg}  alt=""
                                     className={`lazy-image scaleimg ${loadedImages.includes(Searchimg) ? "" : "image-placeholder"}`}
                                     onLoad={() => handleImageLoad(Searchimg)}
                                />
                            </LazyLoad>
                        </div>
                        <div className="fttext">
                            <div className="ftheadertext">Searchable Images</div>
                            <div className="ftextcont">
                                Quickly locate the ideal image or icon using our powerful, top-of-page search feature for instant results.
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="searchImage dowloadimg">
                    <div className="ftcont">
                        <div className="ftimg">
                            <LazyLoad offset={100} once>
                                <img src={Dowloadimg} alt=""
                                     className={`lazy-image scaleimg ${loadedImages.includes(Dowloadimg) ? "" : "image-placeholder"}`}
                                     onLoad={() => handleImageLoad(Dowloadimg)}
                                />
                            </LazyLoad>
                        </div>
                        <div className="fttext">
                            <div className="ftheadertext">Downloadable Images</div>
                            <div className="ftextcont">
                                Access our content effortlessly through the prominent download button for an instant and hassle-free experience.
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="searchImage">
                    <div className="ftcont">
                        <div className="ftimg">
                            <LazyLoad offset={100} once>
                            <img src={Initstate} alt=""
                                 className={`lazy-image scaleimg ${loadedImages.includes(Initstate) ? "" : "image-placeholder"}`}
                                 onLoad={() => handleImageLoad(Initstate)}
                            />
                            </LazyLoad>
                        </div>
                        <div className="fttext">
                            <div className="ftheadertext">Responsive Design</div>
                            <div className="ftextcont">Effortlessly access our responsive website on any device for optimal viewing.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about" id="about2">
                <div className="herotext spec1">ABOUT</div>
                <div className="ftextcont diff abttext" id="diff">
                    This website is made to have a user-friendly interface for
                    browsing and downloading photos. The website is a marketplace
                    where designers and users can search, and download photos for
                    personal or commercial use. The website has a clean, modern design
                    and will be optimized for performance, speed, and search engine
                    visibility.
                </div>
                <h1 className="herotext spec1">DEVELOPERS</h1>
                <div className="devaccount">
                    <div className="seyi pad abttext">
                        <div className="name ftextcont">Odediran Philip Oluseyi</div>
                        <div className="handles">
                            <a href="https://github.com/Akin125" className="dd">
                                <i className="fa-brands fa-github ftextcont"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/philip-odediran-777914246/" className="dd">
                                <i className="fa-brands fa-linkedin ftextcont"></i>
                            </a>
                            <a href="https://twitter.com/philipoluseyi" className="dd">
                                <i className="fa-brands fa-twitter ftextcont"></i>
                            </a>
                        </div>
                    </div>
                    <div className="Marv pad abttext">
                        <div className="name ftextcont">Ajadi Oladayo Marvellous</div>
                        <div className="handles">
                            <a href="https://github.com/Optimustprime" className="dd">
                                <i className="fa-brands fa-github ftextcont"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/oladayo-marvellous" className="dd">
                                <i className="fa-brands fa-linkedin ftextcont"></i>
                            </a>
                            <a href="https://twitter.com/theoptimust?t=PXBM61_qZUqlZ75Nv3GXFw&s=09" className="dd">
                                <i className="fa-brands fa-twitter ftextcont"></i>
                            </a>
                        </div>
                    </div>
                    <div className="Temi pad abttext">
                        <div className="name ftextcont">Temitayo Omolayo</div>
                        <div className="handles">
                            <a href="" className="dd">
                                <i className="fa-brands fa-github ftextcont"></i>
                            </a>
                            <a href="" className="dd">
                                <i className="fa-brands fa-linkedin ftextcont"></i>
                            </a>
                            <a href="" className="dd">
                                <i className="fa-brands fa-twitter ftextcont"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="projectlink">
                    <a className="link esc" href="https://github.com/Optimustprime/Iconoasis">
                        <i className="fa-solid fa-code-commit"></i>Github Repository
                    </a>
                </div>
            </div>
            <div className="back-to-top" onClick={scrollToTop}>
                <i className="fa-solid fa-arrow-up"></i>
            </div>
        </div>
    );
}

export default App;
