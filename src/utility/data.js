import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaBriefcase,
} from "react-icons/fa";
import Photo1 from '../../public/images/expense1.webp';
import Photo2 from '../../public/images/expense3.webp';
import Photo3 from '../../public/images/expense2.webp';

export const contact = [
    {
        icon: FaEnvelope,
        text: "Email: sujeetgupta2801@gmail.com",
        url: "mailto:sujeetgupta2801@gmail.com",
    },
    {
        icon: FaGithub,
        text: "GitHub: Sujeet2801/Spendwise-website",
        url: "https://github.com/Sujeet2801/Spendwise-website",
    },
    // {
    //     icon: FaLinkedin,
    //     text: "LinkedIn",
    //     url: "https://www.linkedin.com/in/sujeet2801",
    // },
    {
        icon: FaBriefcase,
        text: "Portfolio: sujeettech.com",
        url: "https://portfolio.sujeettech.com",
    },
]

export const footerData = [
    {
        icon: FaGithub, url: "https://github.com/Sujeet2801/Spendwise-website",
        color: "hover:text-blue-400"
    },
    {
        icon: FaBriefcase, url: "https://portfolio.sujeettech.com/",
        color: "hover:text-blue-300"
    },
    { icon: FaEnvelope, url: "mailto:sujeetgupta2801@gmail.com", color: "hover:text-gray-300" },
    { icon: FaLinkedin, url: "https://www.linkedin.com", color: "hover:text-blue-500" },
]

const redirectToLink = () =>
    window.open(
        'https://www.lifehack.org/articles/featured/an-introduction-to-expense-tracking.html',
        '_blank'
    );
const article2 = () => window.open('https://ieeexplore.ieee.org/document/8628070', '_blank');
const article3 = () =>
    window.open('https://www.freshbooks.com/hub/accounting/expense-tracking', '_blank');

export const articlesData = [
    {
        title: 'What is Expense Tracking? How Will it Help Your Business?',
        desc: 'Expense tracking involves monitoring, recording, and analyzing all financial expenditures within a business...',
        image: Photo1,
        buttonAction: article3,
        reverse: false,
    },
    {
        title: 'A Smart Approach to Track Everyday Expense.',
        desc: 'Tracking everyday expenses is a smart financial practice that involves monitoring and recording daily spending...',
        image: Photo2,
        buttonAction: article2,
        reverse: true,
    },
    {
        title: 'An Introduction to Expense Tracking.',
        desc: 'Expense tracking is the art of monitoring and recording your financial transactions...',
        image: Photo3,
        buttonAction: redirectToLink,
        reverse: false,
    },
]