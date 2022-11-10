import { DataType } from "./types";
const data: DataType = {
  navBar: {
    button: {
      text: "Resume",
      target: "https://www.dropbox.com/s/hdn5quy34rwovdl/AlanLi2023.pdf?dl=0",
    },
    items: [
      {
        text: "About",
        target: "#about",
      },
      {
        text: "Experience",
        target: "#experience",
      },
      {
        text: "Projects",
        target: "#projects",
      },
      {
        text: "Contact",
        target: "#contact",
      },
    ],
  },
  sectionOne: {
    id: "",
    badge: "Hi! My name is",
    name: "Alan Li",
    slogan: "CS @ Cornell University",
    desc: "",
    button: {
      text: "Resume",
      target: "https://www.dropbox.com/s/hdn5quy34rwovdl/AlanLi2023.pdf?dl=0",
    },
  },
  social: {
    github: "https://github.com/alanli2001",
    instagram: "",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/alan~li/",
    codepen: "",
  },
  sectionAboutMe: {
    show: true,
    id: "about",
    title: "About Me",
    desc: `<p>Hello! I am currently an senior studying computer science at Cornell University, graduating in May 2023. I have previously interned at Cutler Group as a quantitative trading intern, and also at FINRA as a software engineering intern. I am seeking roles in: </p>`,
    list: ["Machine learning", "Quantitative trading", "Data Science", "Software Engineering"],
    picture: "/profile.jpg",
  },
  sectionWork: {
    show: true,
    title: "Work Experience",
    id: "experience",
    tabs: [
      {
        tabName: "Quantitative Trader @ IMC Trading",
        content: {
          title: "Quantitative Trader",
          company: { name: "IMC Trading", link: "https://www.imc.com/us/" },
          date: "Fall 2023",
          contentList: ["I will be an full time quantitative trader at IMC this fall."],
        },
      },
      {
        tabName: "Software Engineering Intern @ Datadog",
        content: {
          title: "Software Engineering Intern",
          company: { name: "Datadog", link: "https://www.datadoghq.com/" },
          date: "Spring 2023",
          contentList: ["I will be an incoming software engineer intern at Datadog this spring."],
        },
      },
      {
        tabName: "Quantitative Trading Intern @ Cutler Group",
        content: {
          title: "Quantitative Trading Intern",
          company: { name: "Cutler Group", link: "https://www.cutlerllc.com/" },
          date: "Summer 2022",
          contentList: ["I analyzed extremely hard to borrow stocks to see if Merrill Lynch’s loan rate is predictive of the terminal stock price through time with pandas, NumPy, statsmodels, and MySQL. I also helped increase profitabillity by analyzed trades and developing insights into edge retention and trade quality."],
        },
      },
      {
        tabName: "Software Engineering Intern @ FINRA",
        content: {
          title: "Software Engineering Intern",
          company: { name: "FINRA", link: "https://www.finra.org/#/" },
          date: "Summer 2021",
          contentList: ["I developed software for the Alfresco Content Services team, which helps store and manage over 30 billion financial documents for FINRA analysts to use while regulating the market. My main role was to rewrite automation tests with Typescript, Selenium, and Cucumber, which allowed my team to migrate to an updated version of the Alfresco Application Development Framework. I also wrote new JUnit tests in Java for their backend, increasing test coverage by more than 10%."],
        },
      },
    ],
  },
  sectionProjects: {
    show: true,
    id: "projects",
    title: "Projects",
    projects: [
      {
        image: "/battlecode.png",
        badge: "",
        title: "Battlecode",
        description:
          "I competed in MIT’s 2020 Battlecode competition, which features a turn-based strategy game where robots need to demonstrate a mastery of both resource management and combat tactics. Placed 27th in U.S. tournament, and 45th in scrim rankings out of 550+ teams.",
        tags: [],
        link: "",
        github: "",
        direction: "rtl",
      },
      {
        image: "/covid.gif",
        badge: "",
        title: "COVID-19 Prediction",
        description: "Developed a neural network regression model to predict number of hospitalizations due to Covid-19 in European countries using PyTorch. Achieved over 85% accuracy in predicting an increase/decrease in the number of Covid-19 cases in European countries by implementing a soft-margin SVM classifier with sklearn.",
        tags: [],
        link: "",
        github: "",
        direction: "rtl",
      },
      {
        image: "/monopoly.png",
        badge: "",
        title: "Monopoly",
        description: "Collaborated with other developers to build a customizable version of the board game Monopoly in OCaml. Implemented the backend, handling all user input and keeping track of game data.",
        tags: [],
        link: "",
        github: "",
        direction: "rtl",
      },
    ],
  },
  sectionContact: {
    show: true,
    id: "contact",
    badge: "",
    title: "Contact Me!",
    description:
      "You can always contact me at ahl88@cornell.edu. Feel free to add me on LinkedIn as well.",
    buttons: [
      {
        text: "Send Email",
        target: "mailto:ahl88@cornell.edu",
      },
    ],
  }
};

export const {
  sectionContact,
  navBar,
  social,
  sectionOne,
  sectionAboutMe,
  sectionWork,
  sectionProjects,
} = data;
export default data;
