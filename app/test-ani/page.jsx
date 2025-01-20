"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Page = () => {
  const { scrollYProgress } = useScroll();

  // Points Data
  const points = [
    { id: 1, x: "10%", y: "20%", heading: "Point 1: Start of the Journey" },
    { id: 2, x: "30%", y: "40%", heading: "Point 2: Scenic View" },
    { id: 3, x: "50%", y: "50%", heading: "Point 3: Midway Stop" },
    { id: 4, x: "70%", y: "60%", heading: "Point 4: High Road Curve" },
    { id: 5, x: "90%", y: "70%", heading: "Point 5: Almost There" },
    { id: 6, x: "80%", y: "80%", heading: "Point 6: Destination" },
  ];

  // Transform bus X and Y positions
  const busX = useTransform(
    scrollYProgress,
    points.map((_, i) => i / (points.length - 1)),
    points.map((point) => point.x)
  );

  const busY = useTransform(
    scrollYProgress,
    points.map((_, i) => i / (points.length - 1)),
    points.map((point) => point.y)
  );

  return (
    <div className="relative h-[180vh] w-full bg-gradient-to-b from-blue-500 to-gray-200 road">
      {/* Road Background */}
      <div className="road absolute top-0 left-0 w-full h-full"></div>

      {/* Points on the Path */}
      {points.map((point, index) => {
        const visibility = useTransform(
          scrollYProgress,
          [
            index / (points.length - 1) - 0.1,
            index / (points.length - 1),
          ],
          [0, 1]
        );

        return (
          <motion.div
            key={point.id}
            className="absolute z-10 flex flex-col items-center justify-center"
            style={{
              left: point.x,
              top: point.y,
              opacity: visibility,
              scale: visibility,
            }}
          >
            <motion.img
              src="https://img.freepik.com/free-vector/location_53876-25530.jpg"
              alt={`Point ${point.id}`}
              width={50}
              height={50}
              className="location"
            />
            <motion.div
              className="mt-2 text-white bg-black bg-opacity-50 p-2 rounded shadow-lg"
              style={{ opacity: visibility }}
              transition={{ duration: 0.3 }}
            >
              {point.heading}
            </motion.div>
          </motion.div>
        );
      })}

      {/* Moving Bus */}
      <motion.div
        className="absolute z-20"
        style={{
          left: busX,
          top: busY,
        }}
      >
        <img
          src="https://illustoon.com/photo/5901.png"
          alt="Bus"
          width={100}
          height={50}
        />
      </motion.div>
    </div>
  );
};

export default Page;
