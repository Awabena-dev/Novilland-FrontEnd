"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import api from "@/app/lib/axios";
import Card from "../components/Helper/Card";

const Buildings = () => {
  const [buildings, setBuildings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/buildings?populate=*").then((res) => {
      setBuildings(res.data.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        // Loading spinner
        <div className="w-full min-h-screen flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="container mx-auto min-h-screen py-[8rem] px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
            قائمة العقارات
          </h1>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {buildings.map((build, index) => (
              <motion.div
                key={build.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="w-full flex justify-center"
              >
                <Card
                  name={build.Name}
                  price={build.price}
                  location={build.location}
                  image={build.thumbnail?.url}
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Buildings;
