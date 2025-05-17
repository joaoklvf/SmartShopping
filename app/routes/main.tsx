import { Navbar } from "~/components/navbar/navbar";
import type { Route } from "./+types/main";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Main() {
  return (
    <Navbar />
  );
}
