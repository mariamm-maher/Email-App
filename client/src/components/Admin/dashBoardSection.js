import React from "react";
import SectionContent from "./sectioncontent";

const DashboardSections = ({ activeSection }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {activeSection === "users" && (
        <SectionContent
          title="User Profiles"
          content="View and edit user profiles, monitor user activity, suspend or deactivate accounts."
        />
      )}
      {activeSection === "emails" && (
        <SectionContent
          title="Email Activity"
          content="Access system emails, filter emails by various criteria, recover deleted emails."
        />
      )}
      {activeSection === "map" && (
        <SectionContent
          title="Map"
          content="View user locations on an interactive map."
        />
      )}
      {activeSection === "maintenance" && (
        <SectionContent
          title="Maintenance"
          content="Send notifications about system maintenance or other important messages."
        />
      )}
      {activeSection === "otherFeatures" && (
        <SectionContent
          title="Other Features"
          content="Explore additional features for managing the system effectively."
        />
      )}
    </div>
  );
};

export default DashboardSections;
