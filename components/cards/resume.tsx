import React from "react";
import Card from "../ui/card";
import Button from "../ui/button";

const ResumeCard = () => {
  return (
    <Card className="md:h-full 2xl:h-fit">
      <div className="flex flex-col">
        <span className="text-2xl text-primary-foreground">Rohit Darunde</span>
        <span>Full Stack Web Developer</span>
        <span className="mt-4">
          📧 rohitkumarme2618@gmail.com | 📞 (+91) 7972009146
        </span>
      </div>

      <p className="mt-4">
        Experienced in building scalable, robust applications using the MERN
        stack, Rohit brings expertise in both front-end and back-end
        technologies, including React, Redux, TypeScript, Node.js, and Express.
        Known for delivering high-impact projects like Me-Snap and Gamefy, he
        has enhanced user engagement and satisfaction across platforms. A 5-star
        coder on Hackerrank and 6th ranked in his institute on Geeks for Geeks,
        Rohit has strong problem-solving abilities and a knack for modular code
        development.
      </p>

      {/* Download Resume Button */}
      <Button className=" mt-20 text-primary-foreground"
      link="https://drive.google.com/file/d/1gLNWJ5UgYCL6Yj0ImOd_bHc7LtuVO8k9/view?usp=sharing"
      >
        Resume
       
        </Button>
    </Card>
  );
};

export default ResumeCard;
