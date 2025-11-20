import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/frankenspalter.png",
    tags: ["Nextjs", "TailwindCSS", "Magento"],
    demoUrl:
      "https://www.frankenspalter.ch/?srsltid=AfmBOoo9BfZ7CLxdan2KGwMaLFdqC7vX-9sGwo69JmJnTAA-3JTTMP87",
    githubUrl: "",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/bugnard.png",
    tags: ["Nextjs", "Material UI", "Magento"],
    demoUrl: "https://bnew.storefront.itmd.dev/de",
    githubUrl: "",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/eec.png",
    tags: ["Nextjs", "Material UI", "Magento"],
    demoUrl: "https://www.eecinc.ca/en",
    githubUrl: "",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication",
    image: "/projects/room360.png",
    tags: ["Reactjs", "css", "Magento"],
    demoUrl: "https://roomthreesixty.com/",
    githubUrl: "",
  },
  {
    id: 5,
    title: "E-commerce Platform",
    description:
      "FOH Worldwide – Corporate Website (CMS-Driven Development)",
    image: "/projects/FOH.png",
    tags: ["Nextjs", "Material UI", "Magento"],
    demoUrl: "https://fohworldwide.com/",
    githubUrl: "",
  },
  {
    id: 6,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/food-ordering-app.png",
    tags: ["Nextjs", "TailwindCss", "Aws"],
    demoUrl: "https://food-ordering-app-nine-beta.vercel.app/",
    githubUrl: "https://github.com/mhdalrefaiy/food-ordering-app",
  },
  {
    id: 7,
    title: "Foodies – Recipe & Meals App",
    description:
      "A simple meals app built with dynamic data, allowing users to browse, view, and manage recipes with a clean and responsive UI.",
    image: "/projects/foodies-app.png",
    tags: ["Nextjs", "Css"],
    demoUrl: "https://foodies-app-vert.vercel.app/",
    githubUrl: "https://github.com/mhdalrefaiy/foodies-app/tree/main",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    {project?.githubUrl !== "" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/mhdalrefaiy"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
