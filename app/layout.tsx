import type { Metadata } from "next";
import { Cascadia_Mono } from 'next/font/google';
import "./globals.css";

const cascadiaMono = Cascadia_Mono({
    subsets: ['latin'],
    variable: '--font-cascadia-mono',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://drian.my.id'),
    title: "Andrian Pratama - Full Stack Developer & Software Engineer",
    description: "Computer Science student at Bina Nusantara University specializing in fullstack development (React, Next.js, Node.js, Golang), cloud infrastructure (AWS, Docker, Kubernetes), and end-to-end IT project management. Software Engineer at Bina Nusantara IT Division with experience in Elasticsearch, ASP.NET, and modern web technologies.",
    applicationName: "Andrian Pratama Portfolio",
    referrer: "origin-when-cross-origin",
    category: "technology",
    alternates: {
        canonical: "https://drian.my.id",
        languages: {
            'en-US': 'https://drian.my.id',
            'id-ID': 'https://drian.my.id',
            'x-default': 'https://drian.my.id',
        },
    },
    keywords: [
        "Andrian Pratama",
        "Full Stack Developer",
        "Software Engineer",
        "React Developer",
        "Next.js Developer",
        "Node.js Developer",
        "Golang Developer",
        "Bina Nusantara",
        "BINUS",
        "Computer Science",
        "Web Development",
        "Cloud Infrastructure",
        "AWS",
        "Docker",
        "Kubernetes",
        "Elasticsearch",
        "ASP.NET",
        "Jakarta Developer",
        "Indonesian Developer",
        "Developer Indonesia",
        "Programmer Indonesia",
        "Web Developer Jakarta",
        "Software Engineer Jakarta",
        "Full Stack Developer Indonesia",
        "BINUS Developer",
        "BNCC Developer",
        "HIMTI BINUS",
        "IT Developer Jakarta",
        "Tech Talent Indonesia",
        "Indonesian Tech Professional",
        "Jakarta Software Engineer",
        "Indonesia Web Development",
        "Southeast Asia Developer",
        "ASEAN Developer"
    ],
    authors: [{ name: "Andrian Pratama", url: "https://github.com/Yanzz231" }],
    creator: "Andrian Pratama",
    publisher: "Andrian Pratama",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://drian.my.id",
        siteName: "Andrian Pratama Portfolio",
        title: "Andrian Pratama - Full Stack Developer & Software Engineer",
        description: "Computer Science student at Bina Nusantara University specializing in fullstack development, cloud infrastructure, and IT project management. Experienced in React, Next.js, Node.js, Golang, AWS, and modern web technologies.",
        images: [
            {
                url: "https://drian.my.id/og-image.png",
                width: 1200,
                height: 630,
                alt: "Andrian Pratama - Full Stack Developer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Andrian Pratama - Full Stack Developer & Software Engineer",
        description: "Computer Science student at Bina Nusantara University specializing in fullstack development, cloud infrastructure, and IT project management.",
        images: ["https://drian.my.id/og-image.png"],
        creator: "@iyanmikasa",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "google49b65a6fa7624a45",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Andrian Pratama",
        "url": "https://drian.my.id",
        "image": "https://drian.my.id/profile.jpg",
        "sameAs": [
            "https://github.com/Yanzz231",
            "https://linkedin.com/in/andrian-pratama-27795431b",
            "https://instagram.com/iyanmikasa"
        ],
        "jobTitle": "Software Engineer",
        "worksFor": {
            "@type": "Organization",
            "name": "Bina Nusantara IT Division",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jakarta",
                "addressRegion": "DKI Jakarta",
                "addressCountry": "ID"
            }
        },
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Bina Nusantara University",
            "department": "Computer Science"
        },
        "knowsAbout": [
            "Full Stack Development",
            "React.js",
            "Next.js",
            "Node.js",
            "Golang",
            "TypeScript",
            "JavaScript",
            "Elasticsearch",
            "ASP.NET",
            "Cloud Infrastructure",
            "AWS",
            "Docker",
            "Kubernetes",
            "DevOps",
            "CI/CD",
            "Tailwind CSS",
            "MySQL",
            "PostgreSQL",
            "Redis",
            "Web Development",
            "Software Engineering",
            "API Development",
            "Microservices"
        ],
        "description": "Computer Science student at Bina Nusantara University specializing in fullstack development, cloud infrastructure, and end-to-end IT project management. Currently working as Software Engineer at Bina Nusantara IT Division, developing advanced search functionality using Elasticsearch and building modern web applications with React and ASP.NET.",
        "email": "andrianpratama843@gmail.com",
        "nationality": {
            "@type": "Country",
            "name": "Indonesia"
        },
        "workLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jakarta",
                "addressRegion": "DKI Jakarta",
                "addressCountry": "ID"
            }
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jakarta",
            "addressRegion": "DKI Jakarta",
            "addressCountry": "ID"
        },
        "homeLocation": {
            "@type": "Place",
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-6.2088",
                "longitude": "106.8456"
            },
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jakarta",
                "addressCountry": "Indonesia"
            }
        }
    };

    const organizationJsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
            "@type": "Person",
            "name": "Andrian Pratama",
            "alternateName": "Yanzz231",
            "description": "Full Stack Developer and Software Engineer specializing in React, Next.js, Node.js, Golang, and Cloud Infrastructure",
            "knowsLanguage": ["Indonesian", "English"],
            "hasOccupation": [
                {
                    "@type": "Occupation",
                    "name": "Software Engineer",
                    "occupationLocation": {
                        "@type": "City",
                        "name": "Jakarta"
                    },
                    "skills": "React.js, Next.js, Node.js, Golang, TypeScript, Elasticsearch, ASP.NET, AWS, Docker, Kubernetes"
                },
                {
                    "@type": "Occupation",
                    "name": "Full Stack Developer",
                    "skills": "Frontend Development, Backend Development, Cloud Infrastructure, DevOps, Database Management"
                }
            ]
        }
    };

    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
                />
                <link rel="canonical" href="https://drian.my.id" />
            </head>
            <body className={`${cascadiaMono.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
