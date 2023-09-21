import emoji from 'react-easy-emoji';
import {
    EducationType,
    ExperienceType,
    ProjectType,
    SkillsSectionType,
    SkillBarsType,
    SEODataType,
    SocialLinksType,
    GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
    name: 'Michael Ryan',
    title: "Hi 🖐all, I'm Mike",
    description:
        "I'm highly skilled and motivated Full Stack React Developer with 7 years of experience in software and web development, seeking a challenging position in a dynamic organization to contribute my expertise and grow professionally.",
    resumeLink: 'https://drive.google.com/file/d/1jPTl1CfoFWyVyRbiHjJV4ASkJ92A-Vds/view?usp=sharing',
};

export const openSource = {
    githubUserName: 'devmrwor',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
    // url: 'https://mjtechworks.github.io/',
    // linkedin: 'https://www.linkedin.com/in/mjtechworks/',
    github: 'https://github.com/devmrwor',
    // instagram: 'https://www.instagram.com/__hanzla100',
    // facebook: 'https://www.facebook.com/mjtechworks',
    // twitter: 'https://twitter.com/mjtechworks',
};

export const skillsSection: SkillsSectionType = {
    title: 'What I do',
    subTitle:
        'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
    data: [
        {
            title: 'Full Stack Development',
            lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
            skills: [
                emoji(
                    '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
                ),
                emoji('⚡ Building responsive static websites using Next.js'),
                emoji(
                    '⚡ Building RESTful APIs in Django & Django REST Framework'
                ),
            ],
            softwareSkills: [
                {
                    skillName: 'HTML-5',
                    fontAwesomeClassName: 'vscode-icons:file-type-html',
                },
                {
                    skillName: 'CSS-3',
                    fontAwesomeClassName: 'vscode-icons:file-type-css',
                },
                {
                    skillName: 'JavaScript',
                    fontAwesomeClassName: 'logos:javascript',
                },
                {
                    skillName: 'Reactjs',
                    fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
                },
                {
                    skillName: 'Nextjs',
                    fontAwesomeClassName: 'vscode-icons:file-type-light-next',
                },
                {
                    skillName: 'Python',
                    fontAwesomeClassName: 'logos:python',
                },
                {
                    skillName: 'Django',
                    fontAwesomeClassName: 'vscode-icons:file-type-django',
                },

                {
                    skillName: 'Redux',
                    fontAwesomeClassName: 'logos:redux',
                },
                {
                    skillName: 'NPM',
                    fontAwesomeClassName: 'logos:npm-icon',
                },
                {
                    skillName: 'Yarn',
                    fontAwesomeClassName: 'logos:yarn',
                },
            ],
        },
        {
            title: 'Cloud Infra-Architecture',
            lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
            skills: [
                emoji('⚡ Experience of working on multiple cloud platforms'),
                emoji(
                    '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
                ),
                emoji(
                    '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
                ),
            ],
            softwareSkills: [
                // ? Check README To get icon details
                {
                    skillName: 'AWS',
                    fontAwesomeClassName: 'logos:aws',
                },
                {
                    skillName: 'Azure',
                    fontAwesomeClassName: 'logos:microsoft-azure',
                },
                {
                    skillName: 'Heroku',
                    fontAwesomeClassName: 'logos:heroku-icon',
                },
                {
                    skillName: 'PostgreSQL',
                    fontAwesomeClassName: 'logos:postgresql',
                },
                {
                    skillName: 'Github',
                    fontAwesomeClassName: 'akar-icons:github-fill',
                },
                {
                    skillName: 'Docker',
                    fontAwesomeClassName: 'logos:docker-icon',
                },
                {
                    skillName: 'Github Actions',
                    fontAwesomeClassName: 'logos:github-actions',
                },
                {
                    skillName: 'Cloudinary',
                    fontAwesomeClassName: 'logos:cloudinary',
                },
                {
                    skillName: 'Nginx',
                    fontAwesomeClassName: 'logos:nginx',
                },
                {
                    skillName: 'Sentry',
                    fontAwesomeClassName: 'logos:sentry-icon',
                },
            ],
        },
        // {
        //     title: 'Blockchain',
        //     lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
        //     skills: [
        //         emoji(
        //             '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        //         ),
        //         emoji(
        //             '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        //         ),
        //         emoji(
        //             '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        //         ),
        //         emoji(
        //             '⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'
        //         ),
        //         emoji(
        //             '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        //         ),
        //     ],
        //     softwareSkills: [
        //         {
        //             skillName: 'Ethereum',
        //             fontAwesomeClassName: 'logos:ethereum',
        //         },
        //         {
        //             skillName: 'Solidity',
        //             fontAwesomeClassName: 'logos:solidity',
        //         },
        //         {
        //             skillName: 'Web3js',
        //             fontAwesomeClassName: 'logos:web3js',
        //         },
        //         {
        //             skillName: 'Metamask',
        //             fontAwesomeClassName: 'logos:metamask-icon',
        //         },
        //         {
        //             skillName: 'Ganache',
        //             fontAwesomeClassName: 'logos:ganache-icon',
        //         },
        //     ],
        // },
    ],
};

export const SkillBars: SkillBarsType[] = [
    {
        Stack: 'Frontend/Design', //Insert stack or technology you have experience in
        progressPercentage: '90', //Insert relative proficiency in percentage
    },
    {
        Stack: 'Backend',
        progressPercentage: '80',
    },
    {
        Stack: 'Blockchain', //Insert stack or technology you have experience in
        progressPercentage: '80', //Insert relative proficiency in percentage
    },
    {
        Stack: 'Programming',
        progressPercentage: '100',
    },
];

export const educationInfo: EducationType[] = [
    {
        schoolName: 'University College Dublin',
        subHeader: 'Bachelor of Science in Computer Science',
        duration: 'September 2011 - November 2015',
        desc: '',
        grade: 'Grade A',
        descBullets: [
            'Completed a capstone project on developing a web-based project management tool',
        ],
    },
];

export const experience: ExperienceType[] = [
    {
        role: 'Full-Stack React Developer',
        company: 'Corvil',
        companyLogo: '/img/icons/common/Corvil.png',
        date: 'November 2021 - Current',
        desc: '',
        descBullets: [
            `Developed and maintained web applications using React, Redux, and TypeScript, resulting in a 30% increase in user engagement.`,
            `Collaborated with cross-functional teams to design and implement RESTful APIs using Node.js and Express.`,
            `Implemented responsive designs using HTML5, CSS3, and Bootstrap, ensuring optimal user experience across various devices.`,
            `Utilized Agile methodologies, including Scrum and Kanban, to deliver high-quality software in a timely manner.`,
            `Conducted code reviews and provided mentorship to junior developers, improving overall team performance.`,
        ],
    },
    {
        role: 'Web Developer',
        company: 'Capgemini',
        companyLogo: '/img/icons/common/Capgemini.png',
        date: 'April 2019 – November 2021',
        desc: '',
        descBullets: [
            `Developed and maintained websites using HTML, CSS, and JavaScript, resulting in a 25% increase in web traffic.`,
            `Assisted in the development of web applications using PHP and MySQL, improving overall functionality and user experience.`,
            `Collaborated with the design team to create visually appealing and user-friendly interfaces.`,
            `Conducted user testing and gathered feedback to inform future development efforts.`,
        ],
    },
    {
        role: 'Full-Stack Developer',
        company: 'IBM',
        companyLogo: '/img/icons/common/IBM.png',
        date: 'February 2016 – April 2019',
        desc: '',
        descBullets: [
            `Developed web applications using Angular, JavaScript, and jQuery, leading to a 20% increase in client satisfaction.`,
            `Designed and implemented database schemas using MySQL and MongoDB, optimizing data storage and retrieval.`,
            `Collaborated with the QA team to identify and resolve software defects, resulting in a 15% reduction in reported issues.`,
            'Utilized Git for version control and JIRA for project management, ensuring efficient collaboration and timely delivery of projects.'
        ],
    },
];

export const projects: ProjectType[] = [
    {
        name: 'Ember Sword (06/2021 - 09/2021)',
        desc: `Wrote the Smart Contracts of weapons and developed Front-end for marketplace by using the React and
        Web3.js`,
        github: '',
        preview: '/img/icons/project/embersword.png',
        link: 'https://embersword.com',
    },
    {
        name: 'our health service (01/2021 - 03/2021)',
        desc: `Developed Front-end and Back-end for offering you protection from serious illness with COVID-19 (coronavirus) using React, Node.js`,
        github: '',
        preview: '/img/icons/project/React_vaccine.png',
        link: 'https://www.hse.ie/eng/',
    },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
    title: 'Michael Ryan',
    description: 'A passionate Full Stack React Developer.',
    author: 'Michael Ryan',
    image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
    url: 'https://mike-portfolio-devmrwor.vercel.app',
    keywords: [
        'Mike',
        'Michael Ryan',
        '@devmrwor',
        'devmrwor',
        'Portfolio',
        'Mike Portfolio ',
        'Michael Ryan Portfolio',
    ],
};
