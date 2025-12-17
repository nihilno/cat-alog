import { FaCheckCircle } from "react-icons/fa";
import { Badge } from "../ui/badge";

function Badges() {
  return (
    <div className="flex items-center gap-4">
      <div className="mb-2 flex items-center gap-1.25">
        <FaCheckCircle />
        <Badge>Free to start</Badge>
      </div>
      <div className="mb-2 flex items-center gap-1.25">
        <FaCheckCircle />
        <Badge>Instant notifications</Badge>
      </div>
      <div className="mb-2 flex items-center gap-1.25">
        <FaCheckCircle />
        <Badge>Work across major stores</Badge>
      </div>
    </div>
  );
}

export default Badges;
