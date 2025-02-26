import { ReactElement } from 'react';
import { Code, Laptop, Smartphone } from 'lucide-react';

type Review = {
    name: string;
    role: string;
    content: string;
    rating: number;
};

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

export { reviews, services };
