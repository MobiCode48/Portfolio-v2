import { Fragment } from "react";
import logoUrl from "../assets/myAvatar.svg";

export default function HeadDefault() {
  return (
    <Fragment>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="portfolio made with Vike" />
      <link rel="icon" href={logoUrl} />
    </Fragment>
  );
}
