"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
}

export default function LatestSection() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
        const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

        if (!API_KEY || !CHANNEL_ID) {
          console.warn("YouTube API Key or Channel ID missing in .env.local");
          setLoading(false);
          return;
        }

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=3&type=video`
        );
        const data = await response.json();

        if (data.items) {
          const formattedVideos = data.items.map((item: any) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url,
          }));
          setVideos(formattedVideos);
        }
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <section className="bg-[#F0EEE6] py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-40 bg-slate-200 rounded col-span-1"></div>
                <div className="h-40 bg-slate-200 rounded col-span-1"></div>
                <div className="h-40 bg-slate-200 rounded col-span-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F0EEE6] py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-jubilat text-[32px] md:text-[40px] text-[#183A39] font-normal mb-6">
            Latest from HAHA Squad
          </h2>
          <div className="w-full h-[1px] bg-[#183A39]/30" />
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {videos.map((item, idx) => (
            <motion.a
              key={item.id}
              href={`https://www.youtube.com/watch?v=${item.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer block"
            >
              {/* Image Container */}
              <div className="relative w-full h-[200px] md:h-[249px] bg-[#C4C4C4] rounded-[9.29px] overflow-hidden mb-6 shadow-sm hover:shadow-md transition-shadow">
                {/* Play Icon Overlay */}
                <div className="absolute top-4 left-4 z-10 w-10 h-10 bg-black/80 rounded-lg flex items-center justify-center shadow-lg group-hover:bg-red-600 transition-colors">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                </div>

                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>

              {/* Card Title */}
              <p 
                className="font-jubilat text-[14px] md:text-[18px] text-[#183A39] leading-[1.4] font-medium pr-4 line-clamp-2"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
