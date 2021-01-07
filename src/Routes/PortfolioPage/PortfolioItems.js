import nSpired1 from '../../images/project-screenshots/nspired-screenshot-1.jpg';
import nSpired2 from '../../images/project-screenshots/nspired-screenshot-2.jpg';
import nSpired3 from '../../images/project-screenshots/nspired-screenshot-3.jpg';
import nSpired4 from '../../images/project-screenshots/nspired-screenshot-4.jpg';
import nSpired5 from '../../images/project-screenshots/nspired-screenshot-5.jpg';

import cN1 from '../../images/project-screenshots/caternaturals-screenshot-1.jpg';
import cN2 from '../../images/project-screenshots/caternaturals-screenshot-2.jpg';
import cN3 from '../../images/project-screenshots/caternaturals-screenshot-3.jpg';
import cN4 from '../../images/project-screenshots/caternaturals-screenshot-4.jpg';

import sQ1 from '../../images/project-screenshots/spacequiz-screenshot-1.jpg';
import sQ2 from '../../images/project-screenshots/spacequiz-screenshot-2.jpg';
import sQ3 from '../../images/project-screenshots/spacequiz-screenshot-3.jpg';

export const PortfolioItems = [
    {
        title: 'nSpired',
        description: 'nSpired was created to offer a platform specifically to meeting goals independently, while connecting and sharing with others who want to achieve the same.',
        tech: ['HTML', 'CSS', 'React', 'Node.js', 'PostgreSQL', 'Git / GitHub', 'ExpressJS', 'KnexJS', 'Heroku', 'Vercel'],
        liveLink: 'https://nspired-app.vercel.app/',
        repo: 'https://github.com/jenna-chestnut/nspired-client',
        images: [ nSpired1, nSpired2, nSpired3, nSpired4, nSpired5 ]
    },
    {
        title: 'Cater Naturals Website',
        description: 'Cater Naturals is a small catering business located in Brooklyn NY. This is their website - features include a pop up form and client side routing.',
        tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'AWS S3', 'AWS Route 53', 'AWS CLoudFront'],
        liveLink: 'https://caternaturals.com/',
        repo: null,
        images: [cN1, cN2, cN3, cN4]
    },
    {
        title: 'Don\'t Space Out! Quiz',
        description: 'Think you know enough about the cosmos? Test your space knowledge with this simple 6 question quiz!',
        tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Git / GitHub'],
        liveLink: 'https://t.co/fVB7g99Jy9?amp=1',
        repo: 'https://github.com/jenna-chestnut/quizapp-ei',
        images: [sQ1, sQ2, sQ3]
    },
]