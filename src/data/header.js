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

export const headerMenus = [
    {
        title: "My Yutube",
        icon: <CiCoffeeCup />,
        src: "/"
    },
    {
        title: "추천 영상",
        icon: <CiStreamOff />,
        src: "/today"
    },
    {
        title: "추천 음악",
        icon: <CiVolumeMute />,
        src: "/music"
    },
    {
        title: "추천 영화",
        icon: <CiPhone />,
        src: "/movie"
    },
    {
        title: "추천 도서",
        icon: <CiMoneyBill />,
        src: "/Book"
    },
    {
        title: "추천 매니",
        icon: <CiDumbbell />,
        src: "/Anime"
    },
    {
        title: "유튜브 사이트",
        icon: <CiDark />,
        src: "/Youtube"
    }
]

export const searchKeyword = [
    {
        title: "MyYoutube",
        src: "/youtube"
    },
    {
        title: "HTML",
        src: "/search/html"
    },
    {
        title: "CSS",
        src: "/search/css"
    },
    {
        title: "JavaScript",
        src: "/search/javascript"
    },
    {
        title: "React.Js",
        src: "/search/react.js"
    },
    {
        title: "JAVA",
        src: "/search/java"
    },
    {
        title: "ORACLE",
        src: "/search/oracle"
    },
    {
        title: "SPRING",
        src: "/search/spring"
    }
]

export const snsLink = [
    {
        title: "github",
        url: "https://github.com",
        icon: <FaGithub />
    },
    {
        title: "youtube",
        url: "https://youtube.com",
        icon: <FaYoutube />
    },
    {
        title: "google",
        url: "https://google.com",
        icon: <FaGoogle />
    },
    {
        title: "instagram",
        url: "https://instagram.com",
        icon: <FaInstagram />
    }
]