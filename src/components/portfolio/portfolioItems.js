const portfolioItems = [
    {
        feat: <img src="icons/star.png" alt="" className="starIcon" />,
        title: "Day Planner",
        image: "/images/dayPlanner.png",
        pTag1: "This is a nice Day-Planner where I utilized jQuery and Local storage.",
        pTag2: "Here is a link to the ",
        link: "https://mdu830.github.io/Day-Planner/", 
        linkText: "Day-Planner",
        pTag3: "Github repository: ",
        github: "https://github.com/mdu830/Day-Planner"
    },
    {
        feat: <img src="icons/star.png" alt="" className="starIcon" />,
        title: "Team Profile Generator",
        image: "/images/teamProfileGen.gif",
        pTag1: "The Team Profile Generator is a node.js application that helps you generate a team profile (in html) with individual employee information on each card.",
        pTag2: "",
        link: "",
        linkText: "",
        pTag3: "Github repository: ",
        github: "https://github.com/mdu830/Team-Profile-Generator"
    },
    {
        feat: <img src="icons/star.png" alt="" className="starIcon" />,
        title: "Eat Da Burger",
        image: "/images/eatdaburger.gif",
        pTag1: "Eat Da Burger is a web application (deployed on Heroku) that utilizes Express, mySQL, orm, Handlebars, and Node.js",
        pTag2: "Here is a link to ",
        link: "https://eat-da-booger.herokuapp.com/burgers",
        linkText: "Eat-Da-Burger",
        pTag3: "Github repository: ",
        github: "https://github.com/mdu830/eat-da-burger"
    },
    {
        feat: <img src="icons/star.png" alt="" className="starIcon" />,
        title: "Weather Dashboard",
        image: "/images/weatherDashboard.png",
        pTag1: "This is an easy to use Weather-Dashboard I made. Using the Open Weather Map API to gather weather information. Other technologies used: Javascript, jQuery, HTML, CSS, Bootstrap, Google Fonts.",
        pTag2: "Here is a link to the ",
        link: "https://mdu830.github.io/Weather-Dashboard/",
        linkText: "Weather Dashboard",
        pTag3: "Github repository: ",
        github: "https://github.com/mdu830/Weather-Dashboard"
    },
    {
        feat: <img src="icons/star.png" alt="" className="starIcon" />,
        title: "Note Taker",
        image: "/images/noteTaker.gif",
        pTag1: "This is a simple Note Taker application that uses node js and express to store and retrieve notes from a heroku server.",
        pTag2: "Here is a link to ",
        link: "https://stark-sierra-82180.herokuapp.com/",
        linkText: "Note Taker",
        pTag3: "Github repository: ",
        github: "https://github.com/mdu830/note-taker"
    },
    {
        feat: <img src="icons/star.png" alt="" className="starIcon" />,
        title: "Workout Tracker",
        image: "/images/workoutTracker.gif",
        pTag1: "This application helps you keep track of all your exercises with a graph that summarizes your weekly workouts. ",
        pTag2: "Here is a link to ",
        link: " https://afternoon-cove-01786.herokuapp.com/",
        linkText: "Workout-Tracker",
        pTag3: "Github repository: ",
        github: "https://github.com/mdu830/workout-tracker"
    },
    {
        title: "Password Generator",
        image: "/images/passwordGen.png",
        pTag1: "This is a random password generator I made with vanilla Javascript, HTML, and CSS",
        pTag2: "Here is a link to the ",
        link:  "https://mdu830.github.io/Password-Gen/",
        linkText: "Password Generator",
        pTag3: "Github repository: ",
        github: "https://github.com/mdu830/Password-Gen"
    },
    {
        title: "Coding Quiz",
        image: "/images/codingQuiz.png",
        pTag1: "Here is a small coding quiz game i also made with vanilla javascript, html and css.",
        pTag2: "Here is a link to the ",
        link: "https://mdu830.github.io/CodingQuizGame/", 
        linkText: "Coding Quiz",
        pTag3: "Github repository: ",
        github: "https://github.com/mdu830/CodingQuizGame"
    },
    {
        title: "Readme Generator",
        image: "/images/readmeGen.gif",
        pTag1: "This is a small node.js Readme Generator designed to help developers quickly generate a quality readme markdown for their projects.",
        pTag2: "",
        link: "",
        linkText: "",
        pTag3: "Github repository: ",
        github: "https://github.com/mdu830/Readme-Generator"
    },
    {
        title: "Employee Tracker",
        image: "/images/employeeTracker.gif",
        pTag1: "The Employee Tracker application uses node js to view, save, and delete data from a mySQL database of employees.",
        pTag2: "",
        link: "",
        linkText: "",
        pTag3: "Github repository: ",
        github: "https://github.com/mdu830/employee-tracker"
    },
    {
        title: "Budget Tracker",
        image: "/images/budgetTracker.gif",
        pTag1: "This application helps you to keep track of your budget online and off. While offline your transactions are stored in the indexDB of your web browser. Then when you are connected to the internet again, the stored transactions are automatically updated to a mongoDB Atlas database. ",
        pTag2: "Here is a link to ",
        link: " https://stormy-mesa-84948.herokuapp.com/",
        linkText: "Budget-Tracker",
        pTag3: "Github repository: ",
        github: "https://github.com/mdu830/budget-tracker"


    },
    {
        title: "Employee Directory",
        image: "/images/employeeDirectory.gif",
        pTag1: "This is a React application that allows managers to sort though an API of their employees, and help them find their information quickly. ",
        pTag2: "Here is a link to ",
        link: " https://mdu830.github.io/employee-directory/",
        linkText: "Employee-Directory",
        pTag3: "Github repository: ",
        github: "https://github.com/mdu830/employee-directory"


    },
    {
        title: "Travel Buddy",
        image: "/images/travelBuddy.png",
        pTag1: "Travel Buddy is a project I contributed to. It is a web application that utilizes multiple APIs to help the user find the best prices on flights and hotels.",
        pTag2: "Here is a link to ",
        link: "http://kmh8827.github.io/project1-team2",
        linkText: "Travel Buddy",
        pTag3: "Github repository: ",
        github: "https://github.com/kmh8827/project1-team2"


    },
    {
        title: "Surf Weasel",
        image: "/images/surfWeasel.gif",
        pTag1: "Surf Weasel is another project that i contributed to. It is a web application that utilizes: express, my sql databases, html, css, jquery, javascript, node.js, and more. Surf Weasel is a surf report application where surfers can search and veiw weather conditions for the beach they want to visit ",
        pTag2: "Here is a link to ",
        link: "https://surfweasel.herokuapp.com/",
        linkText: "Surf Weasel",
        pTag3: "Github repository: ",
        github: "https://github.com/sr70079/surf-weasel"


    },
    {
        title: "",
        image: "/images/large-quadcopter.jpeg",
        pTag1: "This is the Pixhawk 4 Autopilot that i built, designed and programmed. It has several features. Of the most desired are the Return To Home, the long flight times (about 30 minutes), and the 4k FPV video camera.",
        pTag2: "Here is an example video from a test flight we did: ",
        link:  "https://youtu.be/pbIMcGK4tOE",
        linkText: "video",
    },
    {
        title: "",
        image: "/images/3D-printers.jpeg",
        pTag1: "I've had quite a bit of experience with 3D Printing and 3D Design/cad. I use these to create new drone frames and covers among other electric designs",
        pTag2: "",
        link: "", 
    },
    {
        title: "",
        image: "/images/small-super-computer.jpeg",
        pTag1: "I also have experience with building computers, and network penetration testing. This is a picture of a super computer I built for penetration testing and other large computational needs.",
        pTag2: "",
        link: "", 
    }

];

export default portfolioItems