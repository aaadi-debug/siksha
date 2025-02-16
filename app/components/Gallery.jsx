import React from 'react'

const Gallery = () => {

    const fixedData = [
        {
            id: 1,
            page_title: "IIT Kharagpur Gallery",
        }
    ]

    const allImages = [
        {
            id: 1,
            img_section_title: "Events",
            images: [
                { id: 1, src: "path_to_image1.jpg", alt: "Image 1" },
                { id: 2, src: "path_to_image2.jpg", alt: "Image 2" },
                { id: 3, src: "path_to_image3.jpg", alt: "Image 3" },
                { id: 4, src: "path_to_image4.jpg", alt: "Image 4" },
                { id: 5, src: "path_to_image5.jpg", alt: "Image 5" },
                { id: 6, src: "path_to_image6.jpg", alt: "Image 6" },
                { id: 7, src: "path_to_image7.jpg", alt: "Image 7" },
                { id: 8, src: "path_to_image8.jpg", alt: "Image 8" },
                { id: 9, src: "path_to_image9.jpg", alt: "Image 9" },
                { id: 10, src: "path_to_image10.jpg", alt: "Image 10" },
            ]
        },
        {
            id: 2,
            img_section_title: "Infrastructure",
            images: [
                { id: 1, src: "https://images.collegedunia.com/public/college_data/images/campusimage/1675669205DSC02844-me.jpg?mode=stretch", alt: "Image 1" },
                { id: 2, src: "path_to_image2.jpg", alt: "Image 2" },
                { id: 3, src: "path_to_image3.jpg", alt: "Image 3" },
                { id: 4, src: "path_to_image4.jpg", alt: "Image 4" },
                { id: 5, src: "path_to_image5.jpg", alt: "Image 5" },
                { id: 6, src: "path_to_image6.jpg", alt: "Image 6" },
                { id: 7, src: "path_to_image7.jpg", alt: "Image 7" },
                { id: 8, src: "path_to_image8.jpg", alt: "Image 8" },
                { id: 9, src: "path_to_image9.jpg", alt: "Image 9" },
                { id: 10, src: "path_to_image10.jpg", alt: "Image 10" },
            ]
        },
        {
            id: 3,
            img_section_title: "Events and activities",
            images: [
                { id: 1, src: "https://images.collegedunia.com/public/college_data/images/campusimage/1675669205DSC02844-me.jpg?mode=stretch", alt: "Image 1" },
                { id: 2, src: "path_to_image2.jpg", alt: "Image 2" },
                { id: 3, src: "path_to_image3.jpg", alt: "Image 3" },
                { id: 4, src: "path_to_image4.jpg", alt: "Image 4" },
                { id: 5, src: "path_to_image5.jpg", alt: "Image 5" },
                { id: 6, src: "path_to_image6.jpg", alt: "Image 6" },
                { id: 7, src: "path_to_image7.jpg", alt: "Image 7" },
                { id: 8, src: "path_to_image8.jpg", alt: "Image 8" },
                { id: 9, src: "path_to_image9.jpg", alt: "Image 9" },
                { id: 10, src: "path_to_image10.jpg", alt: "Image 10" },
            ]
        },
    ]

    const allVideos = [
        {
            id: 1,
            video_section_title: "Academic Building",
            videos: [
                { id: 1, src: "https://youtu.be/gQ2AYloadeY" },
                { id: 2, src: "https://youtu.be/wqlq-SiJxuU" },
            ]
        },
        {
            id: 2,
            video_section_title: "Extra Curriculars",
            videos: [
                { id: 1, src: "https://youtu.be/gQ2AYloadeY" },
                { id: 2, src: "https://youtu.be/wqlq-SiJxuU" },
            ]
        },
    ]

    return (
        <div className="gallery_section">
            <div className="gallery_section_wrapper">

                {/* 1st section */}
                <div className="gallery_div">
                    <div className="gallery_div_wrapper">
                        <h5> {fixedData[0].page_title} </h5>
                        <hr />
                    </div>

                    {/* Render image sections dynamically */}
                    {allImages.length > 0 ? (
                        allImages.map((data) => (
                            <div key={data.id} className="gallery_image_section mt-4 pb-2">
                                <h5>{data.img_section_title}</h5>
                                <div className="gallery_images">
                                    {data.images.map((image) => (
                                        <img key={image.id} src={image.src} alt={image.alt} className="gallery_img" />
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div style={{ textAlign: 'center' }}>Not Available</div>
                    )}
                </div>


                {/* 2nd section */}
                <div className="gallery_video_div">
                    <div className="gallery_video_div_wrapper">
                        <h5> {fixedData[0].page_title} </h5>
                        <hr />
                    </div>

                    {/* Render image sections dynamically */}
                    {allVideos.length > 0 ? (
                        allVideos.map((data) => (
                            <div key={data.id} className="gallery_video_section mt-4 pb-2">
                                <h5>{data.video_section_title}</h5>
                                <div className="gallery_videos">
                                    {data.videos.map((video) => (
                                        <iframe
                                            key={video.id}
                                            width="45%"
                                            height="200" src={video.src}
                                            frameborder="0"
                                            className='gallery_vid mr-3 mb-3'
                                        ></iframe>
                                    ))}

                                </div>
                            </div>
                        ))
                    ) : (
                        <div style={{ textAlign: 'center' }}>Not Available</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Gallery
