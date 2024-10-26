import {
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
    text: "Our Children's Ministry is dedicated to nurturing the faith and growth of young hearts. We provide a safe, engaging, and educational environment where children can learn about God's love through interactive lessons, creative activities, and joyful worship. Our dedicated team is committed to supporting each child’s spiritual journey, helping them build a strong foundation for their faith while having fun and making lifelong friends.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    img: "church4.jpg",
    color: '#FCCE33',
    url: "/ministries/childrens-ministries"
  },
  {
    id: "1",
    title: "Men's Ministries",
    text: "Our Men's Ministry is a vibrant community where men come together to grow spiritually, support one another, and make a meaningful impact. We offer engaging events, Bible studies, and fellowship opportunities designed to strengthen faith, build lasting friendships, and equip men to lead with integrity and purpose. Join us as we unite in service, growth, and brotherhood.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
    img: "church4.jpg",
    url: "/ministries/men-ministries"
  },
  {
    id: "2",
    title: "Women's Ministries",
    text: "Our Women’s Ministry is dedicated to empowering and supporting women of all ages in their spiritual and personal journeys. Through dynamic events, fellowship gatherings, and inspirational teaching, we aim to strengthen faith, build community, and encourage growth. Join us to connect with other women, share experiences, and make a meaningful impact together.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
    url: "/ministries/women-ministries",
    img: "church4.jpg",
  },
  {
    id: "4",
    title: "Drama's Ministries",
    text: "Our Drama Ministry brings Biblical stories and Christian values to life through dynamic and inspiring performances. By blending faith with the arts, we create impactful experiences that resonate deeply with audiences. Whether through skits, plays, or dramatic readings, our ministry aims to engage, entertain, and edify, fostering a deeper connection to God's message.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
    url: "/ministries/drama-ministries",
    img: "church4.jpg",
  },
  {
    id: "3",
    title: "Choir's Ministries",
    text: "Our Choir Ministry is the vibrant heartbeat of our worship services, infusing every gathering with soulful music and divine harmony. Comprising talented singers and musicians, our choir leads us in praise and worship, creating an atmosphere of spiritual connection and celebration. Whether through traditional hymns or contemporary worship songs, the choir ministry enriches our worship experience and uplifts our community in faith and unity. Join us in sharing the gift of music and spreading the message of God's love through song.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
    url: "/ministries/choir-ministries",
    img: "church4.jpg",
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
    text: "Our Outreach Team is dedicated to connecting with our community and beyond, bringing support, resources, and hope to those in need. With a passion for service and a commitment to making a difference, we engage in various initiatives to uplift and assist individuals and families.",
    content: "Outreach is an essential part of our mission, allowing us to extend love and support to those in need. We engage with our community through various programs, offering assistance, sharing hope, and spreading the message of faith. Whether it's through food drives, mentoring, or simply lending a helping hand, our goal is to make a positive impact and reflect the love of Christ in all that we do. Join us in making a difference!",
    backgroundUrl: "#032F70",
    iconUrl: "/benefits/icon-1.svg",
    imageUrl: "/ecwa-logo.png",
    // url: '/volunteer/sound',
   
  },
  {
    id: "1",
    title: "Children",
    text: "Our dedicated Children’s Team is committed to creating a nurturing and fun environment for young ones. With a focus on engaging activities, learning opportunities, and spiritual growth, we strive to support each child’s development and make their experience enriching and joyful.",
    backgroundUrl: "#FCCE33",
    imageUrl: "/ecwa-logo.png",
    iconUrl: "/benefits/icon-2.svg",
    url: '/ministries/children-ministries',
    content: "At our church, we cherish the joy and innocence of children.Our dedicated programs provide a safe, nurturing environment where kids can learn about God's love, make friends, and grow in faith. We believe in guiding the younger generation with compassion, teaching them the values of kindness, respect, and community. Join us as we explore Bible stories, sing uplifting songs, and create wonderful memories together!",
  },
  // FF6A47
  {
    id: "2",
    title: "Guest Services",
    text: "Our Guest Services Team ensures a welcoming and smooth experience for every attendee. From greeting guests to addressing inquiries, they are dedicated to providing exceptional support and ensuring that every visitor feels valued and cared for.",
    backgroundUrl: "#FF6A47",
    iconUrl: "/benefits/icon-3.svg",
    imageUrl: "/ecwa-logo.png",
    // url: '/volunteer/guest-services',
    content: "Our Guest Services team is dedicated to creating a welcoming and memorable experience for every attendee. From greeting guests with a warm smile to handling inquiries and resolving any issues, they ensure a seamless and enjoyable visit. Their commitment to exceptional service and attention to detail ensures that every guest feels valued and well-cared for throughout their time with us.",
  }, 
  // FFD08B  FF6A47 7ADB78  7B30CF 
  {
    id: "3",
    title: "Choir",
    text: "Our choir team brings vibrant energy and harmony to our worship services. With a diverse range of voices and a passion for music, they lead us in song, enhancing our spiritual experience. Their dedication and talent shine through in every performance.",
    backgroundUrl: "#DD90F0",
    iconUrl: "/benefits/icon-4.svg",
    imageUrl: "/ecwa-logo.png",
    url: '/ministries/choir-ministries',
    content: "The choir at our church is a vibrant and passionate group dedicated to worship through music. With harmonious voices and a heartfelt spirit, they lead the congregation in praise, uplifting and inspiring all who listen. Whether singing traditional hymns or contemporary worship songs, the choir's mission is to glorify God and enrich our worship experience. Their dedication and talent shine through in every performance, inspiring our congregation and creating a joyful atmosphere for all.",
  }, 
  {
    id: "4",
    title: "Ushering",
    text: "Our Ushering Team plays a crucial role in creating a welcoming and organized environment during our services. They assist with seating, guide attendees, and ensure that everyone feels comfortable and cared for.",
    backgroundUrl: "#7ADB78",
    iconUrl: "/benefits/icon-1.svg",
    imageUrl: "/ecwa-logo.png",
    // url: '/volunteer/ushering',
    content: "Ushering is a vital ministry in our church, dedicated to providing a warm and welcoming environment for all attendees. Our ushers assist with seating, distribute materials, and offer support during services and events. They ensure that everything runs smoothly and everyone feels comfortable, creating a space where we can all come together to worship and grow in faith.",
  },
  {
    id: "5",
    title: "Logistics",
    text: "Our dedicated logistics team ensures the smooth and efficient movement of members and instruments from point A to point B. With expertise in transportation coordination.",
    backgroundUrl: "#FA8D41 ",
    iconUrl: "/benefits/icon-2.svg",
    imageUrl: "/ecwa-logo.png",
    // url: '/volunteer/logistics',
    content: "Our logistics team is the backbone of smooth operations, ensuring every event runs seamlessly. They handle everything from transportation and setup to on-the-day coordination. With their keen eye for detail and problem-solving skills, they make sure all logistical aspects are managed efficiently, allowing our events to shine without a hitch. Trust our experts to take care of the behind-the-scenes tasks so you can focus on enjoying the occasion.",
  },
  {
    id: "7",
    title: "Drama",
    text: "Our Drama Team brings stories to life with creativity and passion. Through engaging performances and theatrical excellence, they inspire, entertain, and convey powerful messages that resonate with audiences.",
    backgroundUrl: "#FF6A47",
    imageUrl: "/ecwa-logo.png",
    iconUrl: "/benefits/icon-2.svg",
    url: '/ministries/drama',
    content: "Our drama team is a dynamic group of talented performers dedicated to bringing stories to life. With their exceptional acting skills, creativity, and passion, they captivate audiences and deliver memorable performances. Whether it’s a powerful play, a heartfelt drama, or an engaging skit, our team’s commitment to excellence shines through every production. They transform each performance into an unforgettable experience, making the stage come alive with their talent and dedication.",
  },
  {
    id: "8",
    title: "Events",
    text: "Our dedicated event team ensures every gathering is seamless and memorable. With expertise in planning, coordination, and execution, they handle all aspects of event management, from logistics to guest experience.",
    backgroundUrl: "#7ADB78 ",
    iconUrl: "/benefits/icon-3.svg",
    imageUrl: "/ecwa-logo.png",
    // url: '/volunteer/events',
    content: "Our dedicated event team is the heartbeat behind every memorable occasion we host. With a blend of creativity, meticulous planning, and passion, they ensure every detail is perfect. From coordinating logistics to designing unforgettable experiences, our team is committed to delivering excellence and making every event a success. Whether it's a grand celebration or an intimate gathering, trust our experts to bring your vision to life with professionalism and flair.",
  },
  {
    id: "9",
    title: "Prayer team",
    text: "Our Prayer Team is dedicated to supporting and uplifting our community through prayer. Whether you have a personal request or need spiritual guidance, our team is here to stand with you, offering heartfelt prayers and encouragement. ",
    backgroundUrl: "#DD90F0",
    iconUrl: "/benefits/icon-4.svg",
    imageUrl: "/ecwa-logo.png",
    // url: '/volunteer/prayer-team',
    content: "At ECWA Birmingham, our dedicated Prayer Team is committed to supporting our community through prayer. We believe in the power of prayer to bring hope, healing, and guidance. Whether you have a personal request or need support during challenging times, our team is here to lift you up in prayer. We meet regularly to pray for the needs of our congregation and the world, believing that through prayer, we can make a meaningful impact and foster a sense of unity and peace. Feel free to reach out to us with your prayer requests, or volunteer in the group to  help people experience the strength and comfort of collective prayer.",
  },
  {
    id: "10",
    title: "Media",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "#7B30CF",
    iconUrl: "/benefits/icon-1.svg",
    imageUrl: "/ecwa-logo.png",
    // url: '/volunteer/media',
    content: "Our church's media ministry plays a vital role in spreading the message of hope and love. Through live streams, social media, and other digital platforms, we connect with our community and share inspiring sermons, worship music, and updates on church events. Join us to help members online to stay connected and uplifted wherever they are!",
  },
  {
    id: "11",
    title: "Welfare",
    text: "Our dedicated Welfare Team works tirelessly to support and uplift those in need within our community. From organizing essential resources to providing compassionate assistance, they ensure that every individual receives the help and care they deserve.",
    backgroundUrl: "#FA8D41 ",
    iconUrl: "/benefits/icon-2.svg",
    imageUrl: "/ecwa-logo.png",
    // url: '/volunteer/welfare',
    content: "The welfare team is dedicated to ensuring everyone feels supported and cared for. They handle everything from providing essential services to offering a friendly smile and a helping hand. With their commitment to the well-being of our community, they create a welcoming and nurturing environment at every event. Trust our welfare team to provide the comfort and assistance needed to make every experience positive and memorable.",
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
      // {
      //   id: 4,
      //   url: "/events",
      //   label: 'Events',
      // },
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
        id: 2,
        label: "Vision",
        url: '/about-us#visions',
      },
      {
        id: 5,
        url: "/about-us#missions",
        label: 'Misions',
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
      }
    ],
  }
  ]
export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    {  label: ' 07727 239477' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    {
      id: 1,
      url: "/https://www.facebook.com/ecwabirminghamuk/videos/2781727922003051/?mibextid=WC7FNe&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2FFs6AREBvYZmZ4ovK%2F%3Fmibextid%3DWC7FNe&rdid=XplpCbb3a98DTsSs",
      label: '/fb.svg',
    },
    {
      id: 2,
      url: "/https://www.instagram.com/reel/DBWe2N6oinF/?igsh=czJleTU1a3l4emVo",
      label: '/ig.svg',
    },
   
    {
      id: 4,
      url: '/yhttps://www.tiktok.com/@ecwabirminghamuk/video/7427898038439464224?_r=1&_t=8qhrvLo8kgy',
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
    title: "Our faith ",
    content:
      "Our faith empowers us to overcome obstacles, endure trials, and walk in confidence, knowing that God is with us every step of the way. It's the assurance that God's love never fails and His plans for us are good. As we grow in our faith, we discover the depth of God's love and the power of His grace to transform our lives.",
  },
  {
    id: "feature-2",
    icon: '/ecwa-logo.png',
    title: "Our belief",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.",
  },
  {
    id: "feature-3",
    icon: '/ecwa-logo.png',
    title: "Our hope ",
    content:
      "Our hope sustains us through trials, strengthens us in adversity, and fills our hearts with joy. It's the assurance that God's plans for us are greater than we can imagine, and His purposes will prevail. As we place our hope in God, we find courage to face each day with confidence, knowing that He is with us, guiding us, and working all things together for our good. Let us hold fast to our hope, for it is the anchor of our souls, steadfast and sure",
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
