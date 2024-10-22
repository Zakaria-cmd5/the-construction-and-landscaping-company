import LoadingSkeleton from "@/components/LoadingSkeleton";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
  loading: () => <LoadingSkeleton />,
});

export default function Home() {
  return <Hero />;
}
