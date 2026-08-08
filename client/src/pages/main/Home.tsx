import { useCount } from "@/contexts/CountContext";

export function Home() {
  const { count } = useCount();

  return <div>{count}</div>;
}
