/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Shilpa",
  logo_name: "Shilpa",
  nickname: "Shilpa465",
  full_name: "Shilpa Shelton",
  subTitle:
    "Full Stack Developer, React|Java|Spring|Spring Boot|SQL|Azure ",
  resumeLink:
    "https://drive.google.com/file/d/1U4FIs61svaSDRCySlmIGHV4q37c2yBmD/view?usp=sharing",
  mail: "mailto:shilpa.darrell.ann@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Shilpa465",
  linkedin: "www.linkedin.com/in/shilpaannshelton",
  gmail: "shilpa.darrell.ann@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: " ",
  instagram: " ",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing back-end applications using Java, Spring, Spring Boot",
        "⚡ Performing analysis and creating dashboards using SQL, Python, Power BI",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "Swift",
          fontAwesomeClassname: "simple-icons:swift",
          style: {
            color: "#F05138",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:openjdk",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#5FA04E",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Postgre SQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#4169E1",
          },
        },

        {
          skillName: "Apache Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: {
            color: "#231F20",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Certified Azure Developer and Cloud Practioner",
        "⚡ Experience hosting and managing web apps on Azure and AWS"
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:azuredevops",
          style: {
            color: "#0078D7",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Data Analysis & Dashboards",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Employed data preprocessing, ETL procedures and generated reports to drive business decisions.",
        "⚡ Generated dashboard using Tableau and Power BI ",
        "⚡ Experience working on projects using Python, PL/SQL and, SQL",
      ],
      softwareSkills: [
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            backgroundColor: "transparent",
            color: "#E97627",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            backgroundColor: "transparent",
            color: "#F2C811",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    { 
      id:"1",
      title: "Fanshawe College",
      subtitle: "Post Graduate in Technical Systems Analysis",
      logo_path: "fanshawe.png",
      alt_name: "FAN",
      duration: "2022 - 2023",
      descriptions: [
      ],
      website_link: "https://www.fanshawec.ca/",
    },
    {
      id:"2",
      title: "Fanshawe College",
      subtitle: "Post Graduate in Business Analysis",
      logo_path: "fanshawe.png",
      alt_name: "FAN",
      duration: "2021 - 2022",
      descriptions: [
      ],
      website_link: "https://www.fanshawec.ca/",
    },
    {
      title: "Rajagiri School of Engineering and Technology",
      subtitle: "B.Tech. in Electronics and Communication Engineering",
      logo_path: "rajagiri.jpg",
      alt_name: "SETI",
      duration: "2017 - 2021",
      descriptions: [
      ],
      website_link: "https://www.rajagiritech.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Azure Fundamentals",
      subtitle: "Microsoft Azure",
      logo_path: "azure.png",
      alt_name: "AWS",
      color_code: "#ffc475",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "I have around 6 years of experience with 4 years in IT. I am currently working as a Freelancer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Business Analyst",
          company: "McDonald's",
          company_url: "",
          logo_path: "mcdonalds.png",
          duration: "May 2022 - May 2024",
          location: "London, Ontario",
          description:
            "Responsible for composing strategic business plans, extracting and transforming data using SQL and producing comprehensive analysis to identify new service offerings.",
          color: "#f10000",
        },
        {
          title: "Full Stack Developer",
          company: "Infosys",
          company_url: "",
          logo_path: "infosys.png",
          duration: "October 2017 - April 2021",
          location: "Ahmedabad",
          description:
            "Crafted, Developed and managed full stack applications using React,Spring, Spring Boot, Hibernate and SQL in a DevOps role in an Agile environment",
          color: "#2962FF",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {

};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "shilpaImg.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
  }
};

const projects = {};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
