import Timeline, { TimelineItem } from "../ui/timeline";
import Card from "../ui/card";

const CertificationCard = () => {
  return (
    <Card title="My Certification">
      <Timeline>
        <TimelineItem
          date="23-07-2023"
          title="MindLuster"
          subTitle="Frontend Web Development"
          tag="completed"
          link="//"
        ></TimelineItem>
        <TimelineItem
          date="08-06-2023"
          title="MindLuster"
          subTitle="ReactJS Redux Firebase"
          tag="completed"
          link="/"
        ></TimelineItem>
        <TimelineItem
          date="12-04-2022"
          title="SkillUp"
          subTitle="Java Certification Course"
          tag="completed"
          link="/"
        ></TimelineItem>
      </Timeline>
    </Card>
  );
};

export default CertificationCard;
