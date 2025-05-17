import type { Route } from "./+types/home";
import { Products } from "~/components/products/products";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="p-8">
      <Products />
    </div>
  );
}