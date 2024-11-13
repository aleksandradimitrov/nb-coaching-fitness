import {
    Book,
    Drumstick,
    Dumbbell,
    Instagram,
    Mail,
    MessageCircle,
    Monitor,
    Phone,
    PhoneCall,
    SquareChartGantt,
} from "lucide-react";

export const navbarLinks = [
    {
        name: "Начало",
        path: "/",
    },
    {
        name: "NBcoaching",
        path: "/nb-coaching",
    },
    {
        name: "За мен",
        path: "/about",
    },
 
    {
        name: "Блог",
        path: "/blog",
    },
 
    {
        name: "Контакт",
        path: "/contact",
    },
 
];

export const headerDataText = {
    title: "Добре дошли в NBscoaching",
    subtitle: "NBcoaching Fitness",
    description:
        "Тази платформа е тук, за да Ви предостави необходимите ресурси и насоки за постигане на Вашите фитнес цели. С акцент на практичността и ефективността, услугата предлага разнообразие от стратегии, които ще Ви помогнат да постигнете желаните резултати. Тук ще намерите полезна информация и подкрепа, за да реализирате пълния си потенциал.",
};

export const footerLinks = [
    {
        name: "Бързи Линкове",
        links: [
            {
                name: "Начало",
                path: "/",
                icon: ""
            },
            {
                name: "NBcoaching",
                path: "/nb-coaching",
                icon: ""
            },
            {
                name: "За мен",
                path: "#forme",
                icon: ""
            },
         
            {
                name: "Блог",
                path: "/blog",
                icon: ""
            },
         
            {
                name: "Quiz",
                path: "/quiz",
                icon: ""
            },
        ],
    },
    {
        name: "Контакти",
        links: [
            {
                name: "+359 878920042",
                path: "/",
                icon: <Phone/>
            },
            {
                name: "nbcoachingfitness@gmail.com",
                path: "/",
                icon: <Mail/>
            },
        ],
    },
];

export const aboutCards = [
    {
        heading: "Наръчник за хранене",
        p: "Информативен ресурс, който Ви помага да се справите с хранителния план и да направите правилния избор на храни.",
        icon: <Drumstick size={25} />,
    },
    {
        heading: "Наръчник за суплементация",
        p: "Информация за хранителни добавки и как да ги използвате ефективно.",
        icon: <Book size={25} />,
    },
    {
        heading: "Хранителен план",
        p: "Индивидуално съставен план, който отговаря на Вашите цели и предпочитания.",
        icon: <SquareChartGantt size={25} />,
    },
    {
        heading: "Тренировъчен план",
        p: "Персонализирана програма, адаптирана към Вашето ниво и желания.",
        icon: <Dumbbell size={25} />,
    },
    {
        heading: "Мониторинг",
        p: "Проследяване на напредъка Ви и корекции на плановете.",
        icon: <Monitor  size={25} />,
    },
    {
        heading: "Постоянна връзка с мен",
        p: "Непрекъсната подкрепа и отговори на Вашите въпроси по всяко време.",
        icon: <Phone size={25} />,
    },
];

export const contactFormGridThree = [
    {
        heading: "",
        p: "",
        add: [
            {
                icon: <Mail />,
                text: "nbcoachingfitness@gmail.com",
            },
            {
                icon: <Instagram />,
                text: "Message us on Instagram",
            },
            {
                icon: <MessageCircle />,
                text: "Message us on WhatsApp",
            },
        ],
    },
    {
        heading: "Call Us",
        add: [
            {
                icon: <PhoneCall />,
                text: "+359 878920042",
            },
        ],
    },
];

export const brochures = [
    {
        path: "/assets/brochureTwo/",
        link: `/nb-coaching/brochure/2`,
        img: "/assets/brochureTwo/naruchnik-1.png",
    },
    {
        path: "/assets/brochureOne/",
        link: `/nb-coaching/brochure/1`,
        img: "/assets/brochureOne/dobavki-1.png",
    },
];

export const userRoles = [
    {
        name: "Admin",
        role: "Admin",
        id: "",
    },
    {
        name: "Super-Admin",
        role: "Super-Admin",
        id: "",
    },
    {
        name: "Registered",
        role: "Registered",
        id: "",
    },
    {
        name: "Blocked",
        role: "Blocked",
        id: "",
    },
];
export const programInputs = [
    { name: "Name", value: "name" },
    { name: "URL", value: "url" },
    { name: "Description", value: "description" },
];

export const toastContainerStyle = {
    backgroundColor: "#202020", // Custom background color
    color: "#fff", // Text color
    padding: "16px", // Custom padding
    borderRadius: "8px", // Rounded corners
};

export const coachAchievements = [
    {
        name: "Coach",
        color: "#83AEFF",
    },
    {
        name: "Fitness Trainer",
        color: "#95CFFF",
    },
    {
        name: "Nutrienist",
        color: "#71FFA7",
    },
]

export const aboutText = [
    {
        heading: '',
        textOne: 'Аз съм Никола Бугов, сертифициран фитнес треньор с повече от 2 години опит в работата с клиенти от различни нива на физическа подготовка. През това време съм помогнал на много хора да постигнат своите фитнес цели, независимо дали става въпрос за отслабване, изграждане на мускулна маса или просто за подобряване на общото им здравословно състояние.',
        textTwo: 'Аз съм Квалифициран с Level 4, EUFA.',
        span: '',
    },
    {
        heading: 'Подход и успехи',
        textOne: 'Ценя изключително много добрите взаимоотношения между треньор и трениращ, защото вярвам, че те са основният фактор за постигането на успешни резултати. Разполагам с нужните знания и опит, за да ви помогна да постигнете целта си – независимо дали става дума изграждане на атлетична физика или подобряване на цялостната ви форма. ',
        textTwo: 'Ще бъда до вас на всяка крачка от процеса, осигурявайки индивидуален подход и професионална подкрепа, които ще ви дадат сигурност и мотивация да се развивате и да постигате желаните резултати.',
        span: '',
    },
    {
        heading: 'Мисия',
        textOne: 'Като виждам колко много млади хора са загърбили движението, още повече се амбицирам да им покажа, че дори с малко усилие, но с редовна дисциплина могат да изградят устойчиво здраве и сила. Малките стъпки, подкрепени с дисциплина, водят до големи резултати!”',
        textTwo: '',
        span: '',
    },
    {
        heading: 'Визия',
        textOne: 'Визията ми е чрез тази платформа да помогна на всеки мотивиран човек да постигне своите фитнес и здравословни цели – било то за ежедневен баланс или за състезателни успехи. Създадена за сериозно ангажираните, платформата предоставя инструменти и подкрепа, за да превърне усилията в реални резултати и да изгради повече победители – в залата и в живота.',
        textTwo: '',
        span: 'Винаги можеш повече!',
    }
]


export const questions = [
    {
        question: "Име и фамилия",
        type: "multi-input",
        subquestions: [
            {
                label: "Име",
                placeholder: "Въведете вашето име",
                type: "text",
            },
            {
                label: "Фамилия",
                placeholder: "Въведете вашата фамилия",
                type: "text",
            },
        ],
    },
    {
        question: "Възраст",
        type: "text",
        placeholder: "Въведете вашата възраст",
    },
    {
        question: "Пол",
        type: "single-choice",
        options: ["Мъж", "Жена", "Друго"],
    },
    {
        question: "От колко време тренирате?",
        type: "single-choice",
        options: ["6 месеца - 1 година", "1 - 3 години", "3 - 5 години", "Над 5 години"],
    },
    {
        question: "Каква е вашата основна цел?",
        type: "single-choice",
        options: [
            "Изграждане на мускулна маса",
            "Намаляване на телесните мазнини",
            "Подобряване на симетрията и пропорциите",
            "Подобряване на здравословното състояние",
            "Друго (моля, уточнете)",
        ],
    },
    {
        question: "Каква е вашата текуща тренировъчна програма?",
        type: "textarea",
        placeholder: "Опишете тренировъчната програма тук",
    },
    {
        question: "Колко пъти тренирате седмично?",
        type: "single-choice",
        options: ["1-2 пъти", "3 - 4 пъти", "5 - 6 пъти", "Повече от 6 пъти"],
    },
    {
        question:
            "Кои мускулни групи искате да подобрите най-много? Може да изброите специфична група или цялостно тонизиране на тялото",
        type: "textarea",
        placeholder: "Опишете тук",
    },
    {
        question: "Изпълнявате ли кардио тренировки?",
        type: "single-choice",
        options: ["Да", "Не"],
    },
    {
        question: "Колко пъти седмично изпълнявате кардио тренировки?",
        type: "single-choice",
        options: ["1 - 2 пъти", "3 - 4 пъти", "5 - 6 пъти", "Не изпълнявам кардио тренировки"],
    },
    {
        question: "Каква е основната ви цел с кардио тренировките?",
        type: "multiple-choice",
        options: [
            "Намаляване на телесни мазнини",
            "Подобряване на сърдечносъдовото здраве",
            "Подобряване на издръжливостта",
            "Повишаване на метаболизма",
            "Подготовка за състезание",
            "Друго (моля уточнете)",
        ],
    },
    {
        question: "Какъв тип кардио тренировки предпочитате?",
        type: "single-choice",
        options: [
            "Бавно и равномерно кардио (LISS)",
            "Кардио с висока интензивност (HIIT)",
            "Комбинация от двете",
            "Друго (моля уточнете)",
        ],
    },
    {
        question: "Колко време отделяте за кардио тренировка?",
        type: "single-choice",
        options: ["Под 20 минути", "20 - 30 минути", "30 - 45 минути", "Над 45 минути"],
    },
    {
        question: "Колко крачки изминавате средно на ден?",
        type: "single-choice",
        options: [
            "Под 3 000 крачки",
            "3 000 - 6 000 крачки",
            "6 000 - 10 000 крачки",
            "10 000 - 15 000 крачки",
            "Над 15 000 крачки",
            "Не ги следя",
        ],
    },
    {
        question: "Каква е вашата височина и тегло?",
        type: "multi-input",
        subquestions: [
            {
                label: "Височина",
                placeholder: "см.",
                type: "text",
            },
            {
                label: "Тегло",
                placeholder: "кг.",
                type: "text",
            },
        ],
    },
    {
        question: "Следвате ли определен тип хранителен режим в момента?",
        type: "single-choice",
        options: [
            "Високопротеинова диета",
            "Балансирана диета",
            "Кетогенна диета",
            "Циклиране на въглехидрати",
            "Друго (моля, уточнете)",
        ],
    },
    {
        question: "Колко калории приемате средно на ден?",
        type: "text",
        placeholder: "Напишете, напр. 3500 кал./ден или 'Не съм сигурен/Не следя'",
    },
    {
        question: "Колко пъти се храните на ден?",
        type: "single-choice",
        options: ["1 - 2 пъти", "3 - 4 пъти", "5 - 6 пъти", "Над 6 пъти"],
    },
    {
        question: "Какви добавки приемате в момента?",
        type: "single-choice",
        options: ["В момента не приемам добавки", "Опишете тук добавките, които приемате"],
    },
    {
        question:
            "Имате ли специфични здравословни проблеми или наранявания, които трябва да се вземат предвид?",
        type: "single-choice",
        options: ["Няма здравословни проблеми", "Опишете тук специфичните здравословни проблеми или наранявания"],
    },
    {
        question: "Колко часа спите средно на нощ?",
        type: "single-choice",
        options: ["Под 6 часа", "6 - 7 часа", "7 - 8 часа", "Над 8 часа"],
    },
    {
        question: "Колко вода пиете на ден?",
        type: "single-choice",
        options: ["Под 2 литра", "2 - 3 литра", "3 - 4 литра", "Над 4 литра"],
    },
];

// ------------------------------------data table styles ---------------------------------------------//
export const customStyles = {
    tableWrapper: {
        style: {
            backgroundColor: "#202020", // Background color for the entire table
            borderTopLeftRadius: "12px", // Rounded border for the top-left corner
            borderTopRightRadius: "12px", // Rounded border for the top-right corner
            borderBottom: "none", // No border on the bottom to keep it flat
            overflow: "hidden", // Ensure content inside respects the border radius
        },
    },
    rows: {
        style: {
            backgroundColor: "#202020", // Background color for rows
            color: "#a8a29e", // Text color for rows
            borderTop: "1px solid #3f3f3f", // Border between rows
            padding: "8px", // Padding for rows
        },
    },
    headCells: {
        style: {
            backgroundColor: "#202020", // Background color for head cells
            color: "#a8a29e", // Text color for head cells
            border: "none", // No border for head cells
            padding: "12px", // Padding for head cells
        },
    },
    cells: {
        style: {
            backgroundColor: "#202020", // Background color for cells
            color: "#a8a29e", // Text color for cells
            padding: "12px", // Padding for cells
        },
    },
    pagination: {
        style: {
            backgroundColor: "#202020", // Pagination background color
            color: "#a8a29e", // Text color for pagination
            borderTop: "1px solid #3f3f3f", // Optional border top for separation
            padding: "8px 16px", // Padding around pagination controls
        },
        pageButtonsStyle: {
            color: "#ffffff", // Change page button icons/text to white
            borderRadius: "5px", // Button border radius
            padding: "5px 10px", // Padding inside buttons
            margin: "0 4px", // Space between buttons
            cursor: "pointer",
            transition: "0.3s", // Smooth hover transition

            "&:disabled": {
                cursor: "not-allowed", // Cursor style for disabled buttons
                display: "none",
            },
            "&.active": {
                fontWeight: "bold", // Make active button text bold
                color: "#ffffff", // Ensure active button is also white
            },
        },
    },
};
