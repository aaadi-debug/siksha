import Breadcrumbs2 from "../components/Breadcrumbs2";
import collegeDataJson from "../data/collegeData.json";

//page to list all colleges
export default function CollegesPage() {
  const colleges = collegeDataJson.data;

  const createSlug = (id, name, city) => {
    const cleanedName = encodeURIComponent(name
      .replace(/[\[\]]/g, "") // Remove square brackets
      .replace(/[-]+/g, "-") // Replace multiple hyphens with a single hyphen
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .toLowerCase());
  
    const formattedCity = encodeURIComponent(city.toLowerCase().replace(/\s+/g, "-"));
    return `${id}-${cleanedName}-${formattedCity}`;
  };
  

  return (
    <>
      <div className="pt-20 max-sm:pt-16 pb-20">
        <div
          className="border-red-500 bg-cover bg-center bg-no-repeat  lg:px-10 px-6 py-10"
          //   style={{
          //     backgroundImage: `url('https://demos.codexcoder.com/labartisan/html/edukon/assets/images/pageheader/bg/01.jpg')`,
          //   }}
        >
          <Breadcrumbs2
            breadcrumbs={[{ title: "All Colleges", link: "" }]}
            linkColor="text-tertiary"
            activeColor="text-gray-500"
          />
        </div>
        <div className="  lg:px-10 px-6 pb-10">
          <h1 className="text-3xl font-bold text-center mb-6">Our Colleges</h1>
          <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {colleges.map((college) => (
              <a
                key={college.id}
                href={`/college/${createSlug(
                  college.collegeId,
                  college.collegeName,
                  college.collegeAddress.city
                )}`}
                className="p-4 border text-tertiary border-gray-300 rounded-lg hover:shadow-lg"
              >
                <h2 className="text-xl font-semibold">{college.collegeName}</h2>
                <p className="text-gray-500">Click to view more details</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
