import { FaCheckCircle } from "react-icons/fa";
import { Badge } from "../ui/badge";

function Badges() {
  return (
    <section className="my-16 flex flex-col-reverse items-center gap-32 sm:my-32 sm:gap-48">
      <Badge className="flex items-center gap-2 opacity-0 sm:gap-4">
        <FaCheckCircle className="sm:size-6!" />
        <span className="sm:text-lg">Free to Start</span>
      </Badge>
      <Badge className="flex items-center gap-2 opacity-0 sm:gap-4">
        <FaCheckCircle className="sm:size-6!" />
        <span className="sm:text-lg">Instant notifications</span>
      </Badge>
      <Badge className="flex items-center gap-2 opacity-0 sm:gap-4">
        <FaCheckCircle className="sm:size-6!" />
        <span className="sm:text-lg">Work across major stores</span>
      </Badge>
    </section>
  );
}

export default Badges;
