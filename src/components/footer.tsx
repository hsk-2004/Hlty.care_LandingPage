import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Footer() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* <div className="relative w-full h-8 -mb-6 xs:-mb-10 sm:-mb-6 md:-mb-4 lg:-mb-3 mt-4"> */}
      <Image
        src="/waves.svg"
        alt="Footer Background"
        width={1728}
        height={39}
        className="w-full -mb-1"
      />
      {/* </div> */}
      <footer className="bg-primary w-full p-4 sm:p-6 lg:p-8 relative py-12">
        <div className="max-w-7xl mx-auto">
          <div className="w-full flex justify-center mb-8 mx-auto sm:hidden">
            <Image
              src="/lila.png"
              alt="Meditation illustration"
              width={300}
              height={10}
              priority
              className="opacity-80"
            />
          </div>
          {/* Main footer content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Quick Links */}
            <div className={montserrat.className}>
              <h3 className="mb-2 font-semibold text-bright-teal text-lg sm:text-xl">
                Quick Links
              </h3>
              <ul className="text-white text-xs sm:text-sm">
                <li>
                  <Link
                    href="/about-us"
                    className="hover:text-bright-teal transition-colors"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            {/* Resources */}
            <div className={montserrat.className}>
              <h3 className="mb-2 font-semibold text-bright-teal text-lg sm:text-xl">
                Resources
              </h3>
              <p className="text-[#C7C9CE] text-italic text-xs sm:text-sm">
                <i>Coming soon</i>
              </p>
            </div>

            {/* Support */}
            <div className={montserrat.className}>
              <h3 className="mb-2 font-semibold text-bright-teal text-lg sm:text-xl">
                Support
              </h3>
              <ul className="text-white text-xs sm:text-sm space-y-2">
                <li>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <a
                      href="mailto:hello@hlty.care"
                      className="hover:text-bright-teal transition-colors"
                    >
                      Contact Us
                    </a>
                  </div>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-bright-teal transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="hover:text-bright-teal transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect with us */}
            <div
              className={`${montserrat.className} text-white text-xs sm:text-sm`}
            >
              <h3 className="mb-2 font-semibold text-bright-teal text-lg sm:text-xl">
                Connect with us
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">VOS Health and Life</p>
                    <p className="font-medium">Solutions Private Limited</p>
                    <p>A-301 Purva Panorama,</p>
                    <p>Kalena Agrahara,</p>
                    <p>Bannerghatta Road,</p>
                    <p>Bangalore,</p>
                    <p>Bangalore South,</p>
                    <p>Karnataka, India, 560076</p>
                    <p className="mt-2">CIN U86909KA2023PTC181856</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a
                    href="mailto:hello@hlty.care"
                    className="hover:text-bright-teal transition-colors"
                  >
                    hello@hlty.care
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a
                    href="tel:+919980545813"
                    className="hover:text-bright-teal transition-colors"
                  >
                    +91 9980545813
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Meditation illustration */}
          <div className="hidden lg:block justify-center lg:absolute lg:left-36 lg:bottom-5 lg:mt-0">
            <Image
              src="/lila.png"
              alt="Meditation illustration"
              width={300}
              height={10}
              priority
              className="opacity-80"
            />
          </div>
        </div>
      </footer>
    </section>
  );
}
