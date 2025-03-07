const projectSection = [
  {
    img: "",
    title: "Mocha movies",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    tools: "PHP, API, Figma, JavaScript, CSS",
  },
  {
    img: "",
    title: "Gyllende kringlan",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    tools: "PHP, API, Figma, JavaScript, CSS",
  },
  {
    img: "",
    title: "Studerience",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    tools: "PHP, API, Figma, JavaScript, CSS",
  },
  {
    img: "",
    title: "Scrollytelling",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    tools: "PHP, API, Figma, JavaScript, CSS",
  },
];
const Projects = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectSection.map((project) => (
          <div key={project.title} className="flex flex-col items-start max-w-lg mx-auto">
            {/* Lägg in bilden i en wrapper med overflow-hidden */}
            <div className="w-full max-h-72 overflow-hidden mb-4">
              <img
                src={project.img || "/placeholder-image.png"}
                className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                // alt={project.title}
              />
            </div>
            <h3 className="font-semibold text-2xl mb-2">{project.title}</h3>
            <p className="mb-4">{project.text}</p>
            <h3 className="text-lg font-semibold">{project.tools}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

