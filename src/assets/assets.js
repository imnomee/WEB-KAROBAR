import logo from './logo.png';
import banner from './progressive_app.svg';

const menuLinks = [
    {
        id: 1,
        title: 'Home',
        url: '/home',
    },
    {
        id: 2,
        title: 'Services',
        url: '#services',
    },
    {
        id: 3,
        title: 'About Us',
        url: '/about',
    },
    {
        id: 4,
        title: 'Our Team',
        url: '/team',
    },
    {
        id: 5,
        title: 'Contact Us',
        url: '/contact',
    },
];

import {
    TbWorldWww,
    TbDeviceDesktop,
    TbLayout,
    TbShoppingCart,
    TbSearch,
    TbTools,
    TbBrandGoogleAnalytics,
    TbCode,
    TbBrandWordpress,
    TbCloudComputing,
    TbRocket,
    TbChartPie,
} from 'react-icons/tb';

const services = [
    {
        id: 1,
        title: 'Custom Website Development',
        link: '#',
        icon: TbWorldWww,
        delay: 0.2,
    },
    {
        id: 2,
        title: 'Web Application Solutions',
        link: '#',
        icon: TbDeviceDesktop,
        delay: 0.3,
    },
    {
        id: 5,
        title: 'Search Engine Optimization (SEO)',
        link: '#',
        icon: TbSearch,
        delay: 0.6,
    },
    {
        id: 6,
        title: 'Website Maintenance & Support',
        link: '#',
        icon: TbTools,
        delay: 0.7,
    },
    {
        id: 8,
        title: 'Custom Software Development',
        link: '#',
        icon: TbCode,
        delay: 0.9,
    },
    {
        id: 10,
        title: 'Cloud Integration & Hosting',
        link: '#',
        icon: TbCloudComputing,
        delay: 1.1,
    },
];

export { logo, menuLinks, banner, services };
