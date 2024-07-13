import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'CRM for Remy Tattoo Studio',
        description: "As a Full Stack Developer, I spearheaded the development of a custom CRM system tailored for Remy Tattoo Studio. Leveraging Next.js for robust frontend, MongoDB for flexible data storage, and Prisma ORM for efficient database management, I ensured seamless performance. Integration of Node Mailer facilitated effective communication, while Vercel enabled smooth deployment. Next Auth provided robust security, and Redux managed state effectively. This comprehensive solution enhances client management, scheduling, and operational workflows, optimizing the studio's efficiency and customer satisfaction.",
        tools: ['Next Js', 'MongoDB', 'Node Mailer', 'Vercel', 'Prisma ORM', 'Next Auth', 'Redux'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Feather Chat App',
        description: 'I led the development of Feather Chat App using React Native and Firebase. With Redux for state management, WebSocket for real-time communication, and TypeScript for type-safe code, the app ensures a seamless user experience. Leveraging Express.js and Firebase Functions facilitated backend operations and scalability. This mobile-first solution prioritizes secure messaging and user engagement, enhancing connectivity.',
        tools: ['React Native', 'Firebase', "Redux", "Web Socket", "TypeScript", "Express Js", "Firebase Functions"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
];
