import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-24"/>
      <Skeleton className="h-screen" />
    </div>
  );
};

export default LoadingSkeleton;
