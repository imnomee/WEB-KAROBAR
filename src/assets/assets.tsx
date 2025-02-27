import { ReactElement } from 'react';
import {
    Code,
    Laptop,
    Smartphone,
    Users,
    Rocket,
    Target,
    CheckCircle,
    Phone,
    Mail,
    MapPin,
    Clock,
} from 'lucide-react';
import amjad from './amjad_farooq.jpg';
import nauman from './nauman.jpg';

type ContactType = {
    icon: () => ReactElement;
    title: string;
    content: string;
    link?: string;
};
const contacts: ContactType[] = [
    {
        icon: () => <Phone className="h-6 w-6" />,
        title: 'Phone',
        content: '+92 335 276 5432',
        link: 'tel:+923352765432',
    },
    {
        icon: () => <Mail className="h-6 w-6" />,
        title: 'Email',
        content: 'contact@WebKarobar.com',
        link: 'mailto:contact@WebKarobar.com',
    },
    {
        icon: () => <MapPin className="h-6 w-6" />,
        title: 'Location',
        content: 'Kamalabad, Rawalpindi, Pakistan',
        link: 'https://maps.google.com/?q=Aslam+Market,Kamalabad,Rawalpindi,Pakistan',
    },
    {
        icon: () => <Clock className="h-6 w-6" />,
        title: 'Business Hours',
        content: 'Mon - Fri: 9:00 - 18:00',
    },
];

type Value = {
    icon: () => ReactElement;
    title: string;
    description: string;
};
const values: Value[] = [
    {
        icon: () => <Users className="h-8 w-8 text-blue-600" />,
        title: 'Client-Focused',
        description:
            'Your success is our priority. We work closely with you to understand and meet your needs.',
    },
    {
        icon: () => <Rocket className="h-8 w-8 text-blue-600" />,
        title: 'Innovation',
        description:
            'We stay ahead of technology trends to deliver cutting-edge solutions.',
    },
    {
        icon: () => <Target className="h-8 w-8 text-blue-600" />,
        title: 'Excellence',
        description:
            'We maintain high standards in everything we do, from code quality to client communication.',
    },
    {
        icon: () => <CheckCircle className="h-8 w-8 text-blue-600" />,
        title: 'Reliability',
        description:
            'Count on us to deliver projects on time and within budget, every time.',
    },
];

type menuItem = {
    path: string;
    label: string;
};

const menuItems: menuItem[] = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
];

type Review = {
    name: string;
    role: string;
    content: string;
    rating: number;
};

type Member = {
    name: string;
    role: string;
    image: string;
    bio: string;
};

const teamMembers: Member[] = [
    {
        name: 'Amjad Farooq',
        role: 'Founder & CEO',
        image: amjad,
        bio: 'With over 15 years of experience in web development and digital strategy.',
    },
    {
        name: 'Noman Rafiq',
        role: 'Lead Developer',
        image: nauman,
        bio: 'Expert in full-stack development and cloud architecture.',
    },
    {
        name: 'M. Usman Rafique',
        role: 'UI/UX Designer',
        image: nauman,
        bio: 'Creating beautiful and intuitive user experiences for over 8 years.',
    },
];

const reviews: Review[] = [
    {
        name: 'Sarah Johnson',
        role: 'CEO, TechStart',
        content:
            'WebKarobar transformed our online presence. Their team delivered beyond our expectations.',
        rating: 5,
    },
    {
        name: 'Michael Chen',
        role: 'Founder, GrowthLabs',
        content:
            "Professional, responsive, and incredibly talented. They're our go-to agency for all things digital.",
        rating: 5,
    },
    {
        name: 'Emma William',
        role: 'Marketing Director, InnovateCo',
        content:
            'Outstanding service and results. Our website traffic has doubled since working with them.',
        rating: 5,
    },
];

type Service = {
    icon: () => ReactElement;
    title: string;
    description: string;
};
const services: Service[] = [
    {
        icon: () => <Code className="h-8 w-8 text-blue-600" />,
        title: 'Web Development',
        description:
            'Custom websites built with modern technologies and best practices.',
    },
    {
        icon: () => <Smartphone className="h-8 w-8 text-blue-600" />,
        title: 'Mobile Apps',
        description:
            'Native and cross-platform mobile applications for iOS and Android.',
    },
    {
        icon: () => <Laptop className="h-8 w-8 text-blue-600" />,
        title: 'Digital Marketing',
        description:
            'Strategic marketing solutions to boost your online presence.',
    },
];

type Package = {
    name: string;
    price: string;
    description: string;
    features: string[];
    highlighted?: boolean;
    note: string;
};

const packages: Package[] = [
    {
        name: 'Basic',
        price: 'PKR 20,000',
        description:
            'Perfect for small businesses just starting their digital journey',
        features: [
            'Responsive Website Design',
            'Up to 5 Pages',
            'Basic SEO Setup',
            'Contact Form',
            'Mobile Optimization',
            'Security Optimization',
        ],
        highlighted: true,
        note: '*Domain & Hosting Fees Not Included*',
    },
    {
        name: 'Standard',
        price: 'PKR 50,000',
        description:
            'Ideal for growing businesses needing more features and customization',
        features: [
            'Everything in Basic',
            'Up to 10 Pages',
            'Advanced SEO Package',
            'WordPress or Custom CMS',
            'Social Media Integration',
            'Analytics Setup',
            'E-commerce Lite (Up to 10 Products)',
            'Speed Optimization',
        ],
        note: '*Includes 1-Year Domain & Cloud Hosting*',
    },
    {
        name: 'Premium',
        price: 'PKR 90,000',
        description: 'Complete digital solution for established businesses',
        features: [
            'Everything in Standard',
            'Unlimited Pages',
            'Custom Functionality',
            'Full E-commerce Solution (Unlimited Products, Cart & Checkout)',
            'Multiple Payment Gateways',
            'Premium Hosting',
            'Priority Support',
            'Monthly Maintenance',
            'Multilingual Support',
            'Custom Admin Dashboard',
            'Blog/News Section',
        ],
        note: '*Includes 2-Year Domain & Cloud Hosting*',
    },
];

type Project = {
    id: number;
    title: string;
    category: string;
    image: string;
    challenge: string;
    solution: string;
    results: string;
    technologies: string[];
};

const projects: Project[] = [
    {
        id: 1,
        title: 'E-commerce Platform',
        category: 'E-commerce',
        image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
        challenge:
            'Outdated platform with poor user experience and low conversion rates.',
        solution:
            'Built a modern e-commerce solution with optimized checkout flow and mobile-first design.',
        results:
            '150% increase in mobile conversions, 40% reduction in cart abandonment.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
        id: 2,
        title: 'Healthcare Portal',
        category: 'Healthcare',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
        challenge:
            'Complex patient management system with accessibility issues.',
        solution:
            'Developed an intuitive portal with focus on accessibility and HIPAA compliance.',
        results:
            '90% positive user feedback, 30% reduction in administrative time.',
        technologies: ['React', 'TypeScript', 'PostgreSQL', 'AWS'],
    },
    {
        id: 3,
        title: 'Real Estate Platform',
        category: 'Real Estate',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
        challenge: 'Inefficient property listing and search functionality.',
        solution:
            'Created a modern platform with advanced search and virtual tour features.',
        results:
            '200% increase in user engagement, 45% faster property search time.',
        technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Google Maps API'],
    },
];

export {
    reviews,
    services,
    packages,
    projects,
    menuItems,
    teamMembers,
    values,
    contacts,
};
