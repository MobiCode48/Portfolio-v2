import HeaderTitle from '../../components/common/headerTitle'
import ProjectCard from './_components/projectCard'

export default function Page() {

  return (
    <div className='flex flex-col w-full'>
      <HeaderTitle title='Projects' />
      <div className='mt-10'>
        <ProjectCard />
      </div>
    </div>
  )
}
