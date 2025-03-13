import React from 'react'

import { CiCoffeeCup } from "react-icons/ci";
import { CiStreamOff } from "react-icons/ci";
import { CiVolumeMute } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header_logo'>
                <a href='/'>
                    <em aria-hidden = 'true'></em>
                    <span>my<br/>youtube</span>
                </a>
            </h1>
            <nav className='header_menu'>
                <ul className='menu'>
                    <li className='active'>
                        <a href='/'><CiCoffeeCup />My Youtube</a>
                    </li>
                    <li>
                        <a href='/today'><CiStreamOff />추천 영상</a>
                    </li>
                    <li>
                        <a href='/music'><CiVolumeMute />추천 음악</a>
                    </li>
                    <li>
                        <a href='/movie'><CiPhone />추천 영화</a>
                    </li>
                    <li>
                        <a href='/Book'><CiMoneyBill />추천 도서</a>
                    </li>
                    <li>
                        <a href='/Anime'><CiDumbbell />추천 매니</a>
                    </li>
                    <li>
                        <a href='/Youtube'><CiDark />유튜브 사이트</a>
                    </li>
                </ul>
                <ul className='keyword'>
                    <li>
                        <a href='/youtube'>MyYoutube</a>
                    </li>
                    <li>
                        <a href='/search/html'>HTML</a>
                    </li>
                    <li>
                        <a href='/search/css'>CSS</a>
                    </li>
                    <li>
                        <a href='/search/javascript'>JavaScript</a>
                    </li>
                    <li>
                        <a href='/search/react.js'>React.Js</a>
                    </li>
                    <li>
                        <a href='/search/java'>JAVA</a>
                    </li>
                    <li>
                        <a href='/search/oracle'>ORACLE</a>
                    </li>
                    <li>
                        <a href='/search/vue.js'>Vue.Js</a>
                    </li>
                </ul>
            </nav>
            <div className='header_sns'>
                <ul>
                    <li>
                        <a href='https://github.com'>
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href='https://youtube.com'>
                            <FaYoutube />
                        </a>
                    </li>
                    <li>
                        <a href='https://google.com'>
                            <FaGoogle />
                        </a>
                    </li>
                    <li>
                        <a href='https://instagram.com'>
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header