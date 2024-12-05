import Timeline, { TimelineItem } from "../ui/timeline";
import Card from "../ui/card";

const EducationCard = () => {
  return (
    <Card title="My Education">
      <Timeline>
        <TimelineItem
          date=" July 2020 - Jun 2024"
          title="B.Tech Cgpa:8.11"
          subTitle="ECE from JDCOE, Ngp"
          tag="completed"
        ></TimelineItem>
      </Timeline>
    </Card>
  );
};

export default EducationCard;
