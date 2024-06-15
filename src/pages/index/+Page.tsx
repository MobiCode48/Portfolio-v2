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
    <div className="flex">
      <div className="flex flex-col space-y-4">
        <HeaderTitle title="About Me" />
        <div className="pt-20 items-center justify-start px-40">
          <p className="text-slate-200 text-lg tracking-normals max-w-2xl"> Hello World, I am a young software developer  living in Belgium. I enjoy building things that live on the internet. I discovered my passion for coding when I was in high school and I directly fell in love with it. </p>
          <div className="flex flex-col mt-10">
            <h1 className="text-2xl font-semibold text-slate-100">
              Skillset
            </h1>
            <div className="flex flex-wrap gap-2 mt-6 max-w-5xl ">
              {skills.map(({ name }) => (
                <div key={name} className="bg-zinc-800 p-2 border border-gray-600 outline-none  hover:text-white rounded-md">
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
          <Experience />
        </div>
      </div>
    </div>
  );
}
