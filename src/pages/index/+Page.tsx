import HeaderTitle from "../../components/common/HeaderTitle";
import Experience from "./_components/Experience";

export default function Page() {

  type skillProps = {
    name: string
  }

  const skills: skillProps[] = [

    { name: "Python" },
    { name: "Java" },
    { name: "Kotlin" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React.js" },
    { name: "Next.js" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Tailwind CSS" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "Firebase" },
    { name: "REST API" },
    { name: "Zustand" },
    { name: "Scrum" },
    { name: "Postman " },

  ]

  return (
    <div className="flex flex-col w-full px-4 lg:px-0">
      <div className="w-full space-y-4">
        <HeaderTitle title="About Me" />
        <div className="flex flex-col items-start justify-start pt-10 lg:pt-20 lg:items-center lg:justify-center">
          <p className="text-md text-slate-200 lg:max-w-5xl lg:text-lg">
            Hello World, I am a young software developer living in Belgium. I enjoy building things that live on the internet. I discovered my passion for coding when I was in high school and I directly fell in love with it.
          </p>
          <div className="flex flex-col mt-10">
            <h1 className="text-2xl font-semibold text-slate-100">
              Skillset
            </h1>
            <div className="grid w-full grid-cols-2 gap-2 mt-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {skills.map(({ name }) => (
                <div key={name} className="p-2 border border-gray-600 rounded-md bg-zinc-800 hover:text-white">
                  <span>{name}</span>
                </div>
              ))}
            </div>
            <Experience />
          </div>
        </div>
      </div>

    </div>
  );
}
