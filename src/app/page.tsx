import Spinner from "@/components/Spinner";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
  loading: () => <Spinner />,
});

export default function Home() {
  return <Hero />;
}
