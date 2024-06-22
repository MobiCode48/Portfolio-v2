type experienceProps = {
  timeline: string;
  company: string;
  position: string;
  skills: string[];
};

export default function Experience() {
  const experiences: experienceProps[] = [
    {
      timeline: "April 2024 - Present",
      company: "Isalys Consulting - Infrabel",
      position: "Software Developer",
      skills: ["Python", "Git", "Azure DevOps", "SQL", "Kafka", "ORM"],
    },
    {
      timeline: "February 2022 - May 2022",
      company: "Engie (Internship)",
      position: "Software Developer",
      skills: ["Python", "Git", "Azure DevOps", "MQTT"],
    },
  ];

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-semibold text-slate-100">Experience</h1>
      {experiences.map(
        ({ timeline, company, position, skills }: experienceProps) => (
          <div key={timeline}>
            <Experiencelist
              timeline={timeline}
              company={company}
              position={position}
              skills={skills}
            />
          </div>
        )
      )}
    </div>
  );
}

function Experiencelist({
  timeline,
  company,
  position,
  skills,
}: experienceProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="flex flex-col pt-8">
        <p className="text-gray-400 text-md">{timeline}</p>
        <div className="flex flex-col gap-2 font-semibold text-md">
          <p className="text-slate-300">{company}</p>
          <p className="text-slate-300">{position}</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 ">
            {skills.map((skill) => (
              <p
                key={skill}
                className="p-2 text-sm border border-gray-600 rounded-md bg-zinc-800/60 hover:text-slate-100"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
