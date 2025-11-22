const users = [
    {
        fullname: "Aarav Mehta",
        profession: "Full Stack Developer",
        image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
        description:
            "Developer specializing in MERN stack, cloud deployments, and AI-powered applications.",
        tags: ["JavaScript", "Node.js", "React", "AWS", "AI"],
    },
    {
        fullname: "Sara Thomas",
        profession: "UI/UX Designer",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        description:
            "Designer focused on creating intuitive digital experiences with minimal clean UI.",
        tags: ["Figma", "Design", "Prototyping", "UI", "UX"],
    },
    {
        fullname: "Rohan Kapoor",
        profession: "Data Scientist",
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
        description:
            "Works with machine learning, predictive modeling, and deep data analysis.",
        tags: ["Python", "ML", "Pandas", "TensorFlow", "Analytics"],
    },
    {
        fullname: "Priya Sharma",
        profession: "Marketing Strategist",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        description:
            "Builds brand strategies, manages campaigns, and studies consumer behavior.",
        tags: ["Marketing", "Branding", "SEO", "Ads", "Content"],
    },
    {
        fullname: "Aditya Verma",
        profession: "Mobile App Developer",
        image: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
        description:
            "Flutter and React Native developer creating seamless cross-platform apps.",
        tags: ["Flutter", "Dart", "React Native", "Mobile", "Firebase"],
    },
];

const main = document.querySelector("main");

let sum = "";
users.forEach(({ fullname, profession, image, description, tags }) => {
    sum += ` <div class="card">
                <img
                    src=${image}
                    alt=""
                />
                <h1>${fullname}</h1>
                <h2>${profession}</h2>
                <p>
                    ${description}
                </p>
            </div>`;
});


main.innerHTML = sum;