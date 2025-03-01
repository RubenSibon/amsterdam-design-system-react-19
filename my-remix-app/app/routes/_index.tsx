import { MetaFunction } from "@remix-run/react";

import Welcome from "~/welcome/welcome";

import { docTitle } from "~/constants";

export const meta: MetaFunction = () => {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
};

export default function Home() {
  return <Welcome />;
}
