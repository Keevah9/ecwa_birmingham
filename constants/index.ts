import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Sunday Services",
  "Bible studies",
  "Frida night vigil",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Children's Ministries",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    color: '#FCCE33',
    url: "/ministries/childrens-ministries"
  },
  {
    id: "1",
    title: "Men's Ministries",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,

    url: "/ministries/men-ministries"
  },
  {
    id: "2",
    title: "Women's Ministries",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
    url: "/ministries/women-ministries"
  },
  {
    id: "4",
    title: "Drama's Ministries",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
    url: "/ministries/drama-ministries"
  },
  {
    id: "3",
    title: "Choir's Ministries",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
    url: "/ministries/choir-ministries"
  },
  
];

export const collabText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.Personalized recommendations based on your preferences",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Outreach",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
    backgroundUrl: "#032F70",
    iconUrl: "/benefits/icon-1.svg",
    imageUrl: "/ecwa-logo.png",
    // url: '/volunteer/sound',
   
  },
  {
    id: "1",
    title: "Children",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
    backgroundUrl: "#FCCE33",
    imageUrl: "/ecwa-logo.png",
    iconUrl: "/benefits/icon-2.svg",
    url: '/ministries/children-ministries',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
  },
  // FF6A47
  {
    id: "2",
    title: "Guest Services",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
    backgroundUrl: "#FF6A47",
    iconUrl: "/benefits/icon-3.svg",
    imageUrl: "/ecwa-logo.png",
    // url: '/volunteer/guest-services',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
  }, 
  // FFD08B  FF6A47 7ADB78  7B30CF 
  {
    id: "3",
    title: "Choir",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
    backgroundUrl: "#DD90F0",
    iconUrl: "/benefits/icon-4.svg",
    imageUrl: "/ecwa-logo.png",
    url: '/ministries/choir-ministries',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
  }, 
  {
    id: "4",
    title: "Ushering",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
    backgroundUrl: "#7ADB78",
    iconUrl: "/benefits/icon-1.svg",
    imageUrl: "/ecwa-logo.png",
    // url: '/volunteer/ushering',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
  },
  {
    id: "5",
    title: "Logistics",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
    backgroundUrl: "#FA8D41 ",
    iconUrl: "/benefits/icon-2.svg",
    imageUrl: "/ecwa-logo.png",
    // url: '/volunteer/logistics',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
  },
  {
    id: "6",
    title: "Social media",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "#032F70",
    iconUrl: "/benefits/icon-1.svg",
    imageUrl: "/ecwa-logo.png",
    // url: '/volunteer/outreach',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
  },
  {
    id: "7",
    title: "Drama",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "#FF6A47",
    imageUrl: "/ecwa-logo.png",
    iconUrl: "/benefits/icon-2.svg",
    url: '/ministries/drama',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
  },
  {
    id: "8",
    title: "Events",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "#7ADB78 ",
    iconUrl: "/benefits/icon-3.svg",
    imageUrl: "/ecwa-logo.png",
    // url: '/volunteer/events',
     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
  },
  {
    id: "9",
    title: "Prayer team",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "#DD90F0",
    iconUrl: "/benefits/icon-4.svg",
    imageUrl: "/ecwa-logo.png",
    // url: '/volunteer/prayer-team',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
  },
  {
    id: "10",
    title: "Media",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "#7B30CF",
    iconUrl: "/benefits/icon-1.svg",
    imageUrl: "/ecwa-logo.png",
    // url: '/volunteer/media',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
  },
  {
    id: "11",
    title: "Welfare",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "#FA8D41 ",
    iconUrl: "/benefits/icon-2.svg",
    imageUrl: "/ecwa-logo.png",
    // url: '/volunteer/welfare',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/about-us', key: 'about_us', label: 'About Us' },
  { href: '/sermons', key: 'sermons', label: 'Sermons' },
  { href: '/ministries', key: 'ministries ', label: 'Ministries' },
  { href: '/contact-us', key: 'contact_us', label: 'Contact Us' },
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'We Learn about God',
    icon: '/map.svg',
    variant: 'blue',
    description:
      'Reiciendis voluptatib laund dium maiores aliasueim ueim ipsum consequat laundium eiciendis volup laundium maiores aliasueim.',
  },
  {
    title: 'We commune with God in fellowship',
    icon: '/calendar.svg',
    variant: 'blue',
    description:
      "Reiciendis voluptatib laund dium maiores aliasueim ueim ipsum consequat laundium eiciendis volup laundium maiores aliasueim.",
  },
  {
    title: 'Strong and friendly community',
    icon: '/tech.svg',
    variant: 'blue',
    description:
      'Reiciendis voluptatib laund dium maiores aliasueim ueim ipsum consequat laundium eiciendis volup laundium maiores aliasueim.',
  },
  {
    title: 'Bible Studies',
    icon: '/location.svg',
    variant: 'orange',
    description:
      'Reiciendis voluptatib laund dium maiores aliasueim ueim ipsum consequat laundium eiciendis volup laundium maiores aliasueim.',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      {
        id: 5,
        url: "/services",
        label: 'Services',
      },
      {
        id: 2,
        url: "/sermons",
        label: 'Sermons',
      },
      
      {
        id: 3,
        url: "/ministries",
        label: 'Ministries',
      },
      {
        id: 4,
        url: "/events",
        label: 'Events',
      },
      {
        id: 6,
        url: "/frequently-asked-questions",
        label: 'FAQs',
      },
    ],
  }
  // {
  //   title: 'Our Community',
  //   links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
  // },
];
export const About_LINKS = [
  {
    title: 'About us',
    links: [
      {
        id: 1,
        url: "/about-us",
        label: 'About Us',
      },
      {
        id: 4,
        url: "/about-us/#our-history",
        label: 'ECWA history',
      },
      {
        id: 2,
        label: "Vision",
        url: '/about-us/#vision',
      },
      {
        id: 5,
        url: "/about-us/#misions",
        label: 'Misions',
      },
      {
        id: 3,
        url: "/about-us/#leaders",
        label: 'Leaders',
      },
      
    ],
  }
  
];
export const Invloved_LINKS = [
  {
    title: 'Get Involved',
    links: [

      {
        id: 1,
        url: "/Volunteer",
        label: 'Serve',
      },
      {
        id: 2,
        url: "/join-us",
        label: 'I am new',
      },
      {
        id: 3,
        url: "/donate",
        label: 'Give',
      },
    ],
  }
  ]
export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Church', url: '123-456-7890' },
    { label: 'Email Officer', url: 'ecwa@gmail.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    {
      id: 1,
      url: "/facebook.com",
      label: '/fb.svg',
    },
    {
      id: 2,
      url: "/instagram.com",
      label: '/ig.svg',
    },
   
    {
      id: 4,
      url: '/youtube.com',
      label: '/yt.svg',
    }
  ],
};

// import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: '/ecwa-logo.png',
    title: "Lorem ipsum dolor ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
  },
  {
    id: "feature-2",
    icon: '/ecwa-logo.png',
    title: "Lorem ipsum dolor ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
  },
  {
    id: "feature-3",
    icon: '/ecwa-logo.png',
    title: "Lorem ipsum dolor ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: '/twitter.svg',
  },
  {
    id: "feedback-2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: '/twitter.svg',
  },
  {
    id: "feedback-3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: '/twitter.svg',
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  // {
  //   id: "social-media-4",
  //   icon: linkedin,
  //   link: "https://www.linkedin.com/",
  // },
];

export const clients = [
  {
    id: "client-1",
    logo: '/twitter.svg',
  },
  {
    id: "client-2",
    logo: '/twitter.svg',
  },
  {
    id: "client-3",
    logo: '/twitter.svg',
  },
  {
    id: "client-4",
    logo: '/twitter.svg',
  },
];
