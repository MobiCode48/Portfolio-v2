
export default function Page() {

  type skillProps = {
    name: string
  }

  const skills: skillProps[] = [

    { name: "Python" },
    { name: "Java" },
    { name: "C" },
    { name: "C++" },
    { name: "Kotlin" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Next.js" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Tailwind CSS" },
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
        <h1 className="text-2xl font-bold text-white">
          About Me
        </h1>
        <hr className="w-[125px]" />
        <div className="pt-20 items-center justify-start px-40">
          <p className="text-slate-200 text-lg tracking-normals max-w-3xl"> I am a young software engineer and a digital craftsman living in Belgium. I enjoy building things that live on the internet. I discovered my passion for coding when I was in high school and I directly fell in love with it . </p>
          <div className="flex flex-col mt-10">
            <h1 className="text-2xl font-semibold text-slate-100">
              Skillset
            </h1>
            <div className="flex flex-wrap gap-2 mt-6 max-w-5xl ">
              {skills.map(({ name }) => (
                <div key={name} className="bg-zinc-800 p-2">
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex mt-10">
            <h1 className="text-semibold text-2xl text-slate-100">
              Experience
            </h1>
          </div>
        </div>

      </div>

    </div>
  );
}
