import React from "react";
import { House, ChevronRight } from "lucide-react";

const Breadcrumbs2 = ({ breadcrumbs, linkColor, activeColor }) => {
  return (
    <div className="">
      <div className="flex items-center">
        <a href="/">
          <House size={16} className={linkColor} />
        </a>
        <ChevronRight size={14} className={`mx-1 ${activeColor}`} />

        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            {index === breadcrumbs.length - 1 ? (
              // Last breadcrumb with active color
              <div className={`${activeColor}`}>{breadcrumb.title}</div>
            ) : (
              // Intermediate breadcrumbs with dynamic link color
              <a href={breadcrumb.link} className={`${linkColor}`}>
                {breadcrumb.title}
              </a>
            )}

            {index < breadcrumbs.length - 1 && (
              <ChevronRight size={14} className="mx-1" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs2;

{/* <Breadcrumbs2
  breadcrumbs={[{ title: "Advertise With Siksha Helpline", link: "" }]}
  linkColor="text-second"
  activeColor="text-textClr"
/>; */}
