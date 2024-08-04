// components/Accordion.js

import Image from "next/image";
import { useState } from "react";

const WhyChoose = () => {
  const [selected, setSelected] = useState(null);

  const toggleAccordion = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <>
      <div>
        <p className="text-[20px] text-center text-[#738ea5]">
          About Our Company
        </p>
        <h2 className="text-[40px] max-[1024px]:text-[24px] text-center py-5 font-bold text-[#002642]">
          Why Choose Us !
        </h2>
      </div>
      <div className="flex  justify-center items-center gap-[30px]">
          <div className="w-[100px] h-[1px] bg-[#738ea5]"></div>
          <div>
            <Image
              src={"/assets/images/section-title.png"}
              width={76}
              height={56}
              alt="wedding planner title"
            />
          </div>
          <div className="w-[100px] h-[1px] bg-[#738ea5]"></div>
        </div>
      <div className="container mx-auto p-4">
        <div className="pt-[20px] pb-[30px]">
          <div className="[&>*]:border-b [&>*]:border-b-gray-200 last:[&>*]:border-b-0">
            {/* Accordion item 1 */}
            <div>
              <button
                onClick={() => toggleAccordion(1)}
                className="w-full flex justify-between items-center p-3"
              >
                <h3 className="text-[#002642] text-[18px] max-md:text-[13px]  font-semibold">
                  Experienced Wedding Planners
                </h3>
                <div>
                  <span
                    className={`text-lg transition-all block ${
                      selected === 1 ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>
              </button>
              {selected === 1 && (
                <div className="text-[16px] text-black/50  transition ease-out duration-100 transform p-3 max-md:text-[13px]">
                  <p>
                    Our skilled wedding planners in Surat have extensive
                    experience in organizing both intimate and grand weddings,
                    ensuring every detail is meticulously planned and executed.
                  </p>
                </div>
              )}
            </div>

            {/* Accordion item 2 */}
            <div>
              <button
                onClick={() => toggleAccordion(2)}
                className="w-full flex justify-between items-center p-3"
              >
                <h3 className="text-[18px] text-[#002642] max-md:text-[13px]  font-semibold">
                  Comprehensive Wedding Services
                </h3>
                <div>
                  <span
                    className={`text-lg transition-all block ${
                      selected === 2 ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>
              </button>
              {selected === 2 && (
                <div className="text-[16px] text-black/50 p-3 transition ease-out duration-100 transform max-md:text-[13px]">
                  From venue selection and decoration to catering and
                  entertainment, we offer a full suite of wedding planning
                  services to make your special day seamless and memorable.
                </div>
              )}
            </div>

            {/* Accordion item 3 */}
            <div>
              <button
                onClick={() => toggleAccordion(3)}
                className="w-full flex justify-between items-center p-3"
              >
                <h3 className="text-[18px] text-[#002642] max-md:text-[13px]  font-semibold">
                  Customizable Wedding Packages:
                </h3>
                <div>
                  <span
                    className={`text-lg transition-all block ${
                      selected === 3 ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>
              </button>
              {selected === 3 && (
                <div className="text-[16px] text-black/50 p-3 transition ease-out duration-100 transform max-md:text-[13px]">
                  Whether you're looking for a traditional ceremony or a modern
                  celebration, our customizable wedding packages cater to your
                  specific needs and preferences.
                </div>
              )}
            </div>
            {/* Accordion item 4 */}
            <div>
              <button
                onClick={() => toggleAccordion(4)}
                className="w-full flex justify-between items-center p-3"
              >
                <h3 className="text-[18px] text-[#002642] max-md:text-[13px]  font-semibold">
                  Personalized Approach:
                </h3>
                <div>
                  <span
                    className={`text-lg transition-all block ${
                      selected === 4 ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>
              </button>
              {selected === 4 && (
                <div className="text-[16px] text-black/50 p-3 transition ease-out duration-100 transform max-md:text-[13px]">
                  At Rituals of Love, we believe in a personalized approach to
                  wedding planning. We take the time to understand your vision
                  and work closely with you to bring your dream wedding to life.
                </div>
              )}
            </div>
            {/* Accordion item 5 */}
            <div>
              <button
                onClick={() => toggleAccordion(5)}
                className="w-full flex justify-between items-center p-3"
              >
                <h3 className="text-[18px] text-[#002642] max-md:text-[13px]  font-semibold">Destination Weddings</h3>
                <div>
                  <span
                    className={`text-lg transition-all block ${
                      selected === 5 ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>
              </button>
              {selected === 5 && (
                <div className="text-[16px] text-black/50 p-3 transition ease-out duration-100 transform max-md:text-[13px]">
                  Planning a destination wedding in Surat? Our team specializes
                  in organizing beautiful destination weddings, taking care of
                  all the logistics so you can enjoy a stress-free celebration.
                </div>
              )}
            </div>
            {/* Accordion item 6 */}
            <div>
              <button
                onClick={() => toggleAccordion(6)}
                className="w-full flex justify-between items-center p-3"
              >
                <h3 className="text-[18px] text-[#002642] max-md:text-[13px]  font-semibold">Attention to Detail</h3>
                <div>
                  <span
                    className={`text-lg transition-all block ${
                      selected === 6 ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>
              </button>
              {selected === 6 && (
                <div className="text-[16px] text-black/50 p-3 transition ease-out duration-100 transform max-md:text-[13px]">
                  From intricate floral arrangements to exquisite table
                  settings, our attention to detail ensures that every aspect of
                  your wedding is perfect.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
