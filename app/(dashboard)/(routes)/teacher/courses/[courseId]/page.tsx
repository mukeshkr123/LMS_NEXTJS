import React from "react";

const CourseIdPage = ({ params }: { params: { courseId: string } }) => {
  console.log(params);

  return <div>Cours Id : {params.courseId} </div>;
};

export default CourseIdPage;
