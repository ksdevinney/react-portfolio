// alternate way to import projects
import weatherFlix from "../../assets/weather-flix-hero.jpeg";
import sproutPage from "../../assets/homepage.png";
import dailyPlanner from "../../assets/planner-preview.png";
import weatherDash from "../../assets/weather-dashboard-screenshot.png";
import passGen from "../../assets/password-generator-screenshot.png";
import budgetTracker from "../../assets/budget-tracker.png";

const projectList = [
    {
        "id":1,
        "App":"WeatherFlix",
        "description": "Pick the perfect movie for you!",
        "image": weatherFlix,
        "github":"https://github.com/mirrorlessmind/WeatherFlix",
        "live":"https://mirrorlessmind.github.io/WeatherFlix/"
    },
    {
        "id":2,
        "App":"Sprout of This World",
        "description": "Full-stack app to help you keep track of your houseplants.",
        "image": sproutPage,
        "github":"https://github.com/ksdevinney/sprout-of-this-world",
        "live":"https://sprout-of-this-world.herokuapp.com/"
    },
    {
        "id":3,
        "App":"Daily Planner",
        "description": "JS app for scheduling your day",
        "image": dailyPlanner,
        "github":"https://github.com/ksdevinney/daily-planner",
        "live":"https://ksdevinney.github.io/daily-planner/"
    },
    {
        "id":4,
        "App":"Weather Dashboard",
        "description": "Track weather conditions for multiple locations",
        "image": weatherDash,
        "github":"https://github.com/ksdevinney/fuzzy-spork",
        "live":"https://ksdevinney.github.io/fuzzy-spork/"
    },
    {
        "id":5,
        "App":"Password Generator",
        "description": "Generates a unique and secure password using JavaScript",
        "image": passGen,
        "github":"https://github.com/ksdevinney/password-generator",
        "live":"https://ksdevinney.github.io/password-generator/"
    },
    {
        "id":6,
        "App":"Budget Tracker",
        "description": "Track expenses, even when offline",
        "image": budgetTracker,
        "github":"https://github.com/ksdevinney/budget-tracker",
        "live":"https://fast-fortress-79737.herokuapp.com/"
    }
]

export default projectList;