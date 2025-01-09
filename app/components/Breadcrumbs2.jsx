import React from "react";
import { House, ChevronRight } from "lucide-react";
import Link from "next/link";

const Breadcrumbs2 = ({ breadcrumbs }) => {
  return (
    <div className="">
      <div className="flex items-center">
        <Link href="/"><House size={16} className="" /></Link>
        <ChevronRight size={14} className="mx-1" />

        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            {/* We are checking if it's the last breadcrumb */}
            {index === breadcrumbs.length - 1 ? (
              <div className="text-textClr">{breadcrumb.title}</div>
            ) : (
              <Link href={breadcrumb.link} className="">
                {breadcrumb.title}
              </Link>
            )}

            {/* We are rendering Chevron only if it's not the last item */}
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
