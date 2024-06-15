
type experienceProps = {
  timeline: string,
  company: string,
  position: string,
  skills: string[]
}

export default function Experience() {

  const experiences: experienceProps[] = [{
    timeline: "April 2024 - Present",
    company: "Isalys Consulting - Infrabel",
    position: "Software Developer",
    skills: ['Python', 'Git', 'Azure DevOps', 'SQL', 'Kafka', 'ORM']
  },
  {
    timeline: "February 2022 - May 2022",
    company: "Engie (Internship)",
    position: "Software Developer",
    skills: ['Python', 'Git', 'Azure DevOps', 'MQTT']
  }
  ]

  return (
    <div className='mt-10'>
      <h1 className='text-2xl font-semibold text-slate-100'>
        Experience
      </h1>
      {experiences.map(({ timeline, company, position, skills }) => (
        <div key={timeline}>
          <Experiencelist timeline={timeline} company={company} position={position} skills={skills} />
        </div>
      ))}
    </div>
  )
}


function Experiencelist({ timeline, company, position, skills }: experienceProps) {
  return (
    <div className="flex flex-col pt-8">
      <div className="flex gap-10">
        <p className="text-md text-gray-400">{timeline}</p>
        <div className="flex flex-col text-md  font-semibold gap-y-3">
          <p className=" text-slate-100">{company}</p>
          <p className=" text-slate-100">{position}</p>
          <div className="flex flex-wrap gap-x-2">
            {skills.map((skill) => (
              <p key={skill} className="text-sm bg-zinc-800/60 p-2 border  border-gray-600 outline-none  rounded-md hover:text-slate-100">{skill}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

