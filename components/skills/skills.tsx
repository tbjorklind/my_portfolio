const skillsSection = [
  {
    title: "Front-End",
    skillBox: [
      {
        img: "",
        skill: "Html",
      },
      {
        img: "",
        skill: "Css",
      },
      {
        img: "",
        skill: "JavaScript",
      },
      {
        img: "",
        skill: "Next.js",
      },
      {
        img: "",
        skill: "Wordpress",
      },
      {
        img: "",
        skill: "Webflow",
      },
      {
        img: "",
        skill: "Vix",
      },
    ],
  },
  {
    title: "Back-End",
    skillBox: [
      {
        img: "",
        skill: "PHP",
      },
      {
        img: "",
        skill: "C",
      },
      {
        img: "",
        skill: "C#",
      },
      {
        img: "",
        skill: "SQL",
      },
      {
        img: "",
        skill: "Firebase",
      },
    ],
  },
  {
    title: "UX/UI and other",
    skillBox: [
      {
        img: "",
        skill: "Figma",
      },
      {
        img: "",
        skill: "Adobe bla bla",
      },
      {
        img: "",
        skill: "Adobe bla bla",
      },
      {
        img: "",
        skill: "Adobe bla bla",
      },
      {
        img: "",
        skill: "Maya",
      },
      {
        img: "",
        skill: "Blender",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section>
      <div className="flex-row">
        {skillsSection.map((skills) => (
          <div key={skills.title} className="pb-8">
            <h2 className="font-semibold text-2xl mb-4">{skills.title}</h2>
            <div className="flex flex-wrap gap-8">
              {skills.skillBox.map((skill) => (
                <div
                  key={skill.skill}
                  className="flex flex-col items-center w-25 h-25"
                >
                  <img
                    src={skill.img || "/placeholder-image.png"}
                    className="w-12 h-12 mb-2"
                  />
                  <p className="text-lg text-center">{skill.skill}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
