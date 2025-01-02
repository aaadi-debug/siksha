import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { House } from "lucide-react";

const Breadcrumbs = (props) => {
  return (
    <div>
      <div className="border-t py-2">
        <div className="lg:px-10 px-6">
          <div className="flex justify-start items-center">
            <div className="breadcrumbs flex flex-wrap items-center">
              <a href="/" className="text-sm text-black max-sm:text-xs">
                <House size={16} />
              </a>
              <div className="breadcrumbs flex justify-between items-center text-sm text-blue-600/100 max-sm:text-xs">
                <span className="text-brightblueClr mx-1">
                  <MdKeyboardDoubleArrowRight />
                </span>
                <span className="text-black">{props.page_title}</span>
              </div>
              {props.page_title2 ? (
                <>
                  <div className="breadcrumbs flex justify-between items-center text-sm text-blue-600/100 max-sm:text-xs">
                    <span className="text-brightblueClr mx-1">
                      <MdKeyboardDoubleArrowRight />
                    </span>
                    <span className="text-black capitalize">
                      {props.page_title2}
                    </span>
                  </div>
                </>
              ) : (
                <></>
              )}
              {props.page_title3 ? (
                <>
                  <div className="breadcrumbs flex justify-between items-center text-sm text-blue-600/100 max-sm:text-xs">
                    <span className="text-brightblueClr mx-1">
                      <MdKeyboardDoubleArrowRight />
                    </span>
                    <span className="text-lightwhiteClr capitalize">
                      {props.page_title3}
                    </span>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
