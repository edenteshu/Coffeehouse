import React from "react";
import Img2 from "../assets/menu1.png";
import Img3 from "../assets/menu2.png";
import Img4 from "../assets/menu3.png";
function Menu() {
  const MenuData = [
    {
      id: 1,
      img: Img4,
      name: "Yirgacheffe",
      description:
        " A mild and harmonious taste with subtle vanilla and blackberry notes .",
    },
    {
      id: 2,
      img: Img2,
      name: "Harar",
      description:
        "A notable floral taste with hints of jasmine in the finish.",
    },
    {
      id: 3,
      img: Img3,
      name: "Jimma",
      description: "A complex, subtle coffee with a touch of hazlenut aroma.",
    },
    {
      id: 4,
      img: Img3,
      name: "Sidamo",
      description: "A complex, subtle coffee with a touch of hazlenut aroma.",
    },
    {
      id: 5,
      img: Img4,
      name: "Keffa",
      description:
        "A mild and harmonious taste with subtle vanilla and blackberry notes .",
    },
    {
      id: 6,
      img: Img2,
      name: "Ilubabor",
      description:
        "A notable floral taste with hints of jasmine in the finish.",
    },
  ];
  return (
    <div>
      <>
        <div className="py-10 bg-stone-100">
          <div className="container ">
            {/* Heading section  */}
            <div className="text-center mb-20">
              <h1 className="text-4xl font-bold font-cursive text-[#004B40]">
                Our Popular Menus
              </h1>
            </div>

            {/* Services Card section  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
              {MenuData.map((Menu) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={Menu.aosDelay}
                  className="rounded-2xl  bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[350px]"
                >
                  <div className="h-[122px]">
                    <img
                      src={Menu.img}
                      alt=""
                      className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  <div className=" font-serif p-4 text-center text-[#8F0200]">
                    <div className="w-full  "></div>
                    <h1 className="text-xl font-bold group-hover:text-[#FFB927]">
                      {Menu.name}
                    </h1>
                    <p className="text-gray-500 font-sans group-hover:text-white duration-high text-sm line-clamp-2">
                      {Menu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Menu;
