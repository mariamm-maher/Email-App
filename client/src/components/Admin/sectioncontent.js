import React from "react";

const SectionContent = ({ title, content }) => {
  return (
    <section className="bg-darkNavyBlue p-6 rounded-lg space-y-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{content}</p>
    </section>
  );
};

export default SectionContent;
