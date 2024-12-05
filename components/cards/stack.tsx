import { stackData } from "@/data/stack";

import Card from "../ui/card";
import Tooltip from "../ui/tooltrip";

const StackCard = () => {
  return (
    <Card title="My Tech Stack">
      {stackData.map((tech, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row items-start md:items-center mb-6"
        >
          {/* Stack Title on the Left */}
          <div className="w-full md:w-1/4 text-secondary-foreground font-semibold mb-2 md:mb-0">
            <p>{tech.title}</p>
          </div>

          {/* Stack Images on the Right with Horizontal Scroll on Small Screens */}
          <div className="flex gap-4 ml-3 flex-wrap overflow-x-auto w-full md:w-3/4">
            {tech.stack.map((t) => (
              <Tooltip
                key={t.id}
                title={t.title}
                image={t.image}
                bgColor={t.bgColor}
              />
            ))}
          </div>
        </div>
      ))}
    </Card>
  );
};

export default StackCard;
