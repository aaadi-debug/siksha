import React from "react";

const Gallery = ({ college }) => {
  const gallery = college?.gallery;

  return (
    <>
      <div className="mb-4">
        <div className="text-2xl font-semibold text-tertiary mb-4 border-b pb-2">
          {college?.collegeName} Gallery
        </div>
      </div>

      {gallery?.length > 0 ? (
        gallery.map((data, index) => (
          <div key={index} className="mb-6">
            <div className="text-2xl font-semibold text-tertiary mb-4">
              {data.category}
            </div>

            {/* Images Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
              {data.images?.map(
                (image, imgIndex) =>
                  image && ( // Ensure image is not an empty string
                    <img
                      key={imgIndex}
                      src={image}
                      alt={`Gallery ${data.category} ${imgIndex + 1}`}
                      className="w-full max-h-40 object-cover rounded-lg shadow-md"
                    />
                  )
              )}
            </div>

            {/* Videos Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {data.videos?.map((video, vidIndex) => {
                if (!video) return null; // Skip empty video URLs

                if (
                  video.includes("youtu.be") ||
                  video.includes("youtube.com")
                ) {
                  // Convert YouTube URL to embeddable format
                  const embedUrl = video.includes("youtu.be")
                    ? video.replace("youtu.be/", "www.youtube.com/embed/")
                    : video.replace("watch?v=", "embed/");

                  return (
                    <iframe
                      key={vidIndex}
                      src={embedUrl}
                      title={`Video ${vidIndex + 1}`}
                      className="w-full h-40 rounded-lg shadow-md"
                      allowFullScreen
                    ></iframe>
                  );
                } else if (video.endsWith(".mp4")) {
                  // Render .mp4 videos using <video> tag
                  return (
                    <video
                      key={vidIndex}
                      controls
                      className="w-full h-40 rounded-lg shadow-md"
                    >
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  );
                }

                return null; // If video URL is invalid, return nothing
              })}
            </div>
          </div>
        ))
      ) : (
        <div>No items in gallery.</div>
      )}
    </>
  );
};

export default Gallery;
