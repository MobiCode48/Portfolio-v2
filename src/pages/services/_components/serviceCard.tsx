type serviceProps = {
  name: string;
  description: string;
  tools: string[];
  price: number;
};

const services: serviceProps[] = [
  {
    name: "Backend Development",
    description: "I will take care of the backend development of your project.",
    tools: ["Node", "Typescript", "Bun", "Trpc", "Postgresql", "Prisma"],
    price: 300,
  },
  {
    name: "Frontend Development",
    description:
      "I will take care of the frontend development of your project.",
    tools: ["React", "Vite", "React.js", "Tailwind CSS", "Daisy UI"],
    price: 300,
  },
];

export default function ServiceCard() {
  return (
    <div className="flex flex-col gap-3">
      {services.map(({ name, description, tools, price }) => (
        <ServiceCardItem
          name={name}
          description={description}
          tools={tools}
          price={price}
          key={name}
        />
      ))}
    </div>
  );
}

function ServiceCardItem({ name, description, tools, price }: serviceProps) {
  return (
    <div className="card w-full rounded-md bg-[#1c1c1c] border border-[#1c1c1c] shadow-md">
      <div className="card-body justify-center items-center md:justify-start md:items-start">
        <div className="flex gap-3">
          <h2 className="card-title text-slate-100 text-md">{name}</h2>
          <div className="badge badge-sm sm:badge-md lg:badge-lg h-fit bg-zinc-700 m-auto">
            <a href="/contact">
              <p className="text-slate-300 cursor-pointer hover:underline">
                As from <span>{price}€/day</span>
              </p>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-slate-300 text-sm md:text-md">{description}</p>
          <div className="grid grid-cols-1 md:flex gap-3">
            {tools.map((tool) => (
              <p
                key={tool}
                className="p-2 text-sm border text-center border-gray-600 rounded-md bg-zinc-800/60 hover:text-slate-100"
              >
                {tool}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
