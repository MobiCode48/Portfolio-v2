import HeaderTitle from "@/components/common/headerTitle";
import { Fragment } from "react/jsx-runtime";
import ServiceCard from "./_components/serviceCard";
export default function Page() {
  return (
    <Fragment>
      <HeaderTitle title="My Services" />
      <div className="mt-10">
        <ServiceCard />
      </div>
    </Fragment>
  );
}
