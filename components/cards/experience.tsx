import Timeline, { TimelineItem } from "../ui/timeline";
import Card from "../ui/card";

const ExperienceCard = () => {
  return (
 <>
    <Card title="My Experience">
      <Timeline >
        <TimelineItem
          date=" March 2024 - Ongoing"
          title="Software Developer Intern"
          subTitle="Stoq club pvt ltd"
          tag="current"
          
        ></TimelineItem>
        <TimelineItem
          date="Jan 2024 - April 2024"
          title="      Freelancer"
          subTitle="      Living Thing pvt td"
          tag="completed"
        ></TimelineItem>
        <TimelineItem
          date="July 2023 - Dec 2023"
          title="      React Developer Intern"
          subTitle="      Ace Tech Venture"
          tag="completed"
        ></TimelineItem>
      </Timeline>
      
    </Card>

 </>
  );
};

export default ExperienceCard;
