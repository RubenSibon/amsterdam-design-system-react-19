import VulAan3 from "~/signalen/vul-aan-3";

import { docTitle } from "~/constants";
import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
};

export default function SingalenPagina() {
  return <VulAan3 />;
}
