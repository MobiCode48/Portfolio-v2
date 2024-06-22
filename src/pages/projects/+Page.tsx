import { Fragment } from "react/jsx-runtime";
import HeaderTitle from "../../components/common/headerTitle";
import ProjectCard from "./_components/projectCard";

export default function Page() {
  return (
    <Fragment>
      <HeaderTitle title="Projects" />
      <div className="mt-10">
        <ProjectCard />
      </div>
    </Fragment>
  );
}
