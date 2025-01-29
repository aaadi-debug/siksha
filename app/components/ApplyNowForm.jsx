import React from "react";

const ApplyNowForm = ({ modalHeading }) => {
  return (
    <div>
      <p>Fill out the form to apply now.</p>
      <form>
        <div>
          <label className="block mb-2">Name</label>
          <input type="text" className="border p-2 w-full mb-4" />
        </div>
        <div>
          <label className="block mb-2">Email</label>
          <input type="email" className="border p-2 w-full mb-4" />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplyNowForm;
