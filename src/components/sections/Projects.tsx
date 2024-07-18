export default function Projects() {
  const Projects = [
    {
      title: "Leiner Hoyos",
      img: "/og.png",
      description:
        "Este portafolio es una muestra de mi trabajo y habilidades como desarrollador web. Diseñado y desarrollado por mí, este sitio web refleja mi experiencia y conocimientos en tecnologías modernas de desarrollo web.",
      demo: "https://leinerhoyos.netlify.app/",
      repo: "https://github.com/leinerdavidhc/LeinerHC",
      skills: [
        { name: "Typescript", icon: "/typescript.svg" },
        { name: "Astro", icon: "/astro.svg" },
        { name: "Tailwind", icon: "/tailwindcss.svg" },
        { name: "React", icon: "/react.svg" },
      ],
    },
    {
        title: "Clon api Rick and Morty",
        img: "/rickandmorty.png",
        description:
          "Clon de la famosa API de Rick and Morty, que proporciona información detallada sobre los personajes, episodios y ubicaciones del popular programa de televisión.",
        demo: "https://clone-api-rickandmorty.netlify.app/",
        repo: "https://github.com/leinerdavidhc/rickandmorty",
        skills: [
          { name: "Typescript", icon: "/typescript.svg" },
          { name: "Angular", icon: "/angular.svg" },
          { name: "Tailwind", icon: "/tailwindcss.svg" },
        ],
      },
      {
        title: "Pollo way",
        img: "/pollo-way.png",
        description:
          "Pagina web de inversion social para comunidades wayuú, comecializacion de pollo de engorde.",
        demo: "https://www.polloway.com/",
        repo: "https://github.com/leinerdavidhc/Pollo-way",
        skills: [
          { name: "React", icon: "/react.svg" },
          { name: "express", icon: "/expressjs.svg" },
          { name: "Tailwind", icon: "/tailwindcss.svg" },
          { name: "mongodb", icon: "/mongodb.svg" },
        ],
      },
      {
        title: "Clon api Rick and Morty",
        img: "/rickandmorty.png",
        description:
          "Clon de la famosa API de Rick and Morty, que proporciona información detallada sobre los personajes, episodios y ubicaciones del popular programa de televisión.",
        demo: "https://clone-api-rickandmorty.netlify.app/",
        repo: "https://github.com/leinerdavidhc/rickandmorty",
        skills: [
          { name: "Typescript", icon: "/typescript.svg" },
          { name: "Angular", icon: "/angular.svg" },
          { name: "Tailwind", icon: "/tailwindcss.svg" },
        ],
      },
      {
        title: "Clon api Rick and Morty",
        img: "/rickandmorty.png",
        description:
          "Clon de la famosa API de Rick and Morty, que proporciona información detallada sobre los personajes, episodios y ubicaciones del popular programa de televisión.",
        demo: "https://clone-api-rickandmorty.netlify.app/",
        repo: "https://github.com/leinerdavidhc/rickandmorty",
        skills: [
          { name: "Typescript", icon: "/typescript.svg" },
          { name: "Angular", icon: "/angular.svg" },
          { name: "Tailwind", icon: "/tailwindcss.svg" },
        ],
      },
      {
        title: "Clon api Rick and Morty",
        img: "/rickandmorty.png",
        description:
          "Clon de la famosa API de Rick and Morty, que proporciona información detallada sobre los personajes, episodios y ubicaciones del popular programa de televisión.",
        demo: "https://clone-api-rickandmorty.netlify.app/",
        repo: "https://github.com/leinerdavidhc/rickandmorty",
        skills: [
          { name: "Typescript", icon: "/typescript.svg" },
          { name: "Angular", icon: "/angular.svg" },
          { name: "Tailwind", icon: "/tailwindcss.svg" },
        ],
      },
  ];
  return (
    <section className="min-h-[90vh] flex flex-col gap-5 w-full" id="proyectos">

      <h2 className="md:text-4xl text-3xl font-bold text-tertiary">
        <i className="bx bx-code-alt md:text-3xl text-2xl"></i> Proyectos
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        {Projects.map((project, index) => (
          <div key={index} className="bg-card overflow-hidden relative group h-72">
            <img
              src={project.img}
              alt={project.title}
              className="object-cover size-full"
            />
            <div className="absolute bottom-[-50px] left-0 flex flex-col group-hover:bg-primary group-hover:bottom-0 transition-all duration-500">
              <h3 className="font-semibold text-2xl p-2.5 w-max rounded-se-md group-hover:bg-transparent backdrop-filter backdrop-blur-sm bg-black bg-opacity-50">{project.title}</h3>

              <div className="flex flex-col gap-3 p-2.5 bg-primary">
              <p className="text-base font-normal text-gray-500 dark:text-gray-400 transition-all duration-300 group-hover:h-32 h-12 group-hover:overflow-auto line-clamp-2 group-hover:line-clamp-none decription-project">
  {project.description}
</p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <div className="flex gap-2  bg-zinc-900 p-1 rounded-md justify-center items-center">
                    <img src={skill.icon} alt={skill.name} className="size-5" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center gap-3">
                <a href={project.repo} className="bg-button p-1 flex gap-2 justify-center items-center max-w-max"><i className='bx bxl-github text-xl'></i> Github</a>
                <a href={project.demo} className="bg-button bg-button p-1 flex gap-2 justify-center items-center max-w-max"><i className='bx bx-globe text-xl'></i> Demo</a>
              </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
