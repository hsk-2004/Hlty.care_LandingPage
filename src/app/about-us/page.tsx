import type { Metadata } from "next";

// Components
import Hero from "@/components/About-Us/Hero/Hero";
import Members from "@/components/About-Us/Members/Members";
import Testimonials from "@/components/About-Us/Testimonials/Testimonials";
import EnrollForQuizWrapper from "@/components/EnrollForQuiz/EnrollForQuizWrapper";
// import AboutUsSlider from "@/components/About-Us/AboutUsSlider/AboutUsSlider";

export const metadata: Metadata = {
  title: "About Us - HLTY | Meet Our Team & Mission",
  description:
    "Meet the HLTY team of clinicians, designers, educators, technologists, and parents on a shared mission to save childhood and secure the future of health through science, storytelling, and humor.",
  keywords:
    "about HLTY, team, mission, childhood wellness, Suraj Prasad, Ankita Dey, healthcare team, wellness mission",
  openGraph: {
    title: "About Us - HLTY | Meet Our Team & Mission",
    description:
      "Meet the HLTY team on a shared mission to save childhood and secure the future of health.",
    url: "https://hlty.in/about-us",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "HLTY Team - About Us",
      },
    ],
  },
  twitter: {
    title: "About Us - HLTY | Meet Our Team & Mission",
    description:
      "Meet the HLTY team on a shared mission to save childhood and secure the future of health.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://hlty.in/about-us",
  },
};

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* About Section */}
      <Hero />

      {/* Testimonials */}
      <Testimonials />

      {/* About Us Slider */}
      {/* <AboutUsSlider /> */}

      {/* Members */}
      <Members
        heading="Partners"
        cards={[
          {
            name: "Solutionec",
            description: "Knowledge, Clinical & Tech Partner",
            image: "/images/company/solutionec.svg",
            link: "https://www.solutionec.com/",
          },
          {
            name: "Author Nest",
            description: "Marketing Partner",
            image: "/images/company/authors-nest.webp",
            link: "https://theauthorsnest.com/",
            style: "lg:-mt-8"
          },
          {
            name: "SkyForge System Solutions ",
            description: "Tech Partner",
            image: "/images/company/skyforge2.svg",
            link: "https://buildwithskyforge.com/",
          },
          {
            name: "Quizarre",
            description: "Quiz Partner",
            image: "/images/company/quizarre.png",
            link: "https://quizarre.in/",
          },
        ]}
      />

      {/* Members */}
      <Members
        heading="Advisors"
        cards={[
          {
            name: "Rafeek Muhammed Mannantakath",
            image: "/images/company/rafeek.png",  
            link: "https://www.linkedin.com/in/rafmannan/",
          },
          {
            name: "Sriram Subramani",
            image: "/images/company/sriram.png",
            link: "https://www.linkedin.com/in/sriram-subramani-0821a9a/",
          },
          {
            name: "Ajith Gopi",
            image: "/images/company/ajith.png",
            link: "https://www.linkedin.com/in/ajith-g-a6802418",
          },
          {
            name: "Ratheesh Elayat",
            image: "/images/company/ratheesh.png",
            link: "https://www.linkedin.com/in/ratheeshelayat",
          },
          {
            name: "Karthik 'KK' Subramanian",
            image: "/images/company/karthik.jpg",
            link: "https://www.linkedin.com/in/karthik-krishnan-subramanian-2234a42/",
          },
          {
            name: "Sonika Choudhury",
            image: "/images/company/sonika.jpeg",
            link: "https://www.linkedin.com/in/sonika-choudhury-0097381a1/",
            style: "object-cover"
          },
          {
            name: "Peeyush Jain",
            image: "/images/company/peeyush.jpg",
            link: "https://www.linkedin.com/in/peeyush2000/",
          },
          {
            name: "Tity Lyngdoh",
            image: "/images/company/tity.jpeg",
            link: "https://www.linkedin.com/in/tity-moni/",
          },
        ]}
      />

      {/* Enroll for Quiz */}
      <EnrollForQuizWrapper />
    </div>
  );
}
