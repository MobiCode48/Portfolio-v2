import bio from '../../../assets/projects/bio.png';
import issueTracker from '../../../assets/projects/Issue tracker_list.png';
import movieList from '../../../assets/projects/movielist.png';
import notes from '../../../assets/projects/notes - fullstack.png';

type projectProps = {
  name: string
  description: string
  image: string
}
export default function ProjectCard() {

  const projects: projectProps[] = [
    {
      name: "Bio-Linktree",
      description: "This project was inspired by linktree",
      image: bio
    },
    {
      name: "Issue tracker",
      description: 'A fullstack issue tracker web application',
      image: issueTracker
    },
    {
      name: "MovieList",
      description: 'I built this project using the TMDB API',
      image: movieList
    },
    {
      name: "Notes",
      description: 'A fullstack notes web application with TRPC',
      image: notes
    }
  ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
      {projects.map(({ name, description, image }) => (
        <ProjectCardItem name={name} description={description} image={image} key={name} />
      ))}
    </div>
  )
}


function ProjectCardItem({ name, description, image }: projectProps) {
  return (
    <div className='rounded-md bg-[#1c1c1c]/20 border-1 border-[#1c1c1c] '>
      <div className='card h-fit w-fit'>
        <figure>
          <img src={image} alt={name} className='object-cover' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-slate-100'>{name}</h2>
          <p className='text-slate-300'>{description}</p>
        </div>
      </div>
    </div>
  )
}
