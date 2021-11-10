import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    
    const menuClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    return (
        <>
            <header className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" onClick={closeMenu}>
                        Style
                        <i class="fas fa-tshirt" />
                    </Link>
                    <div className="menu-icon" onClick={menuClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to='/' className="nav-items" onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/basket' className="nav-items" onClick={closeMenu}>
                                장바구니
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login' className="nav-items" onClick={closeMenu}>
                                로그인
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/member' className="nav-items" onClick={closeMenu}>
                                회원가입
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>  
            <nav className="style">
                <div className="style-container">
                    <ul className="style-menu">
                        <li className="style-item">
                            <Link to='/' className="style-items">
                                인기
                            </Link>
                        </li>
                        <li className="style-item">
                            <Link to='/' className="style-items">
                                상의
                            </Link>
                        </li>
                        <li className="style-item">
                            <Link to='/' className="style-items">
                                아우터
                            </Link>
                        </li>
                        <li className="style-item">
                            <Link to='/' className="style-items">
                                바지
                            </Link>
                        </li>
                        <li className="style-item">
                            <Link to='/' className="style-items">
                                신발
                            </Link>
                        </li>
                        <div className="sub">
                            <div className="sub-clothes">
                                <ul className="sub-box">
                                    <li className="pop">
                                        <Link to='/' className="pop-item">
                                        후드 티셔츠
                                        </Link>
                                        <Link to='/' className="pop-item">
                                        겨울 싱글 코트
                                        </Link>
                                        <Link to='/' className="pop-item">
                                        맨투맨
                                        </Link>
                                        <Link to='/' className="pop-item">
                                        조거 팬츠
                                        </Link>
                                    </li>
                                    <li className="top">
                                        <Link to='/' className="top-item">
                                        반팔 티셔츠
                                        </Link>
                                        <Link to='/' className="top-item">
                                        긴팔 티셔츠
                                        </Link>
                                        <Link to='/' className="top-item">
                                        맨투맨
                                        </Link>
                                        <Link to='/' className="top-item">
                                        후드 티셔츠
                                        </Link>
                                        <Link to='/' className="top-item">
                                        셔츠
                                        </Link>
                                    </li>  
                                    <li className="outer">
                                        <Link to='/' className="outer-item">
                                        후드집업
                                        </Link>
                                        <Link to='/' className="outer-item">
                                        코트
                                        </Link>
                                        <Link to='/' className="outer-item">
                                        패딩
                                        </Link>
                                        <Link to='/' className="outer-item">
                                        무스탕
                                        </Link>
                                        <Link to='/' className="outer-item">
                                        블루종
                                        </Link>
                                    </li>  
                                    <li className="bottom">
                                        <Link to='/' className="bottom-item">
                                        데님 팬츠
                                        </Link>
                                        <Link to='/' className="bottom-item">
                                        숏 팬츠
                                        </Link>
                                        <Link to='/' className="bottom-item">
                                        레깅스
                                        </Link>
                                        <Link to='/' className="bottom-item">
                                        트레이닝
                                        </Link>
                                        <Link to='/' className="bottom-item">
                                        조거 팬츠
                                        </Link>
                                    </li>  
                                    <li className="shoes">
                                        <Link to='/' className="shoes-item">
                                        구두
                                        </Link>
                                        <Link to='/' className="shoes-item">
                                        샌들
                                        </Link>
                                        <Link to='/' className="shoes-item">
                                        슬리퍼
                                        </Link>
                                        <Link to='/' className="shoes-item">
                                        부츠
                                        </Link>
                                        <Link to='/' className="shoes-item">
                                        운동화
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
            <hr />
        </>
    )
}

export default Navbar;
