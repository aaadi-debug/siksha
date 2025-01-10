import React from "react";
import { House, ChevronRight } from "lucide-react";
import Link from "next/link";

const Breadcrumbs2 = ({ breadcrumbs, linkColor, activeColor }) => {
  return (
    <div className="">
      <div className="flex items-center">
        <Link href="/"><House size={16} className={linkColor}/></Link>
        <ChevronRight size={14} className={`mx-1 ${activeColor}`} />

        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            {index === breadcrumbs.length - 1 ? (
              // Last breadcrumb with active color
              <div className={`${activeColor}`}>{breadcrumb.title}</div>
            ) : (
              // Intermediate breadcrumbs with dynamic link color
              <Link href={breadcrumb.link} className={`${linkColor}`}>
                {breadcrumb.title}
              </Link>
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
