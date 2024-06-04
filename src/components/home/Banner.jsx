import React from "react";
import beautyQueen from "../../assets/photo-camer.png";

const Banner = () => {
  return (
    <main className="h-[90vh]  bg-slate-100  border-b-2 ">
      <div className="md:flex px-2 justify-around py-[120px]  items-center  space-y-2">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-6xl font-bold md:leading-tight">
            We Sell <br />
            Your <span className="text-orange-600">DREAM</span>
          </h1>

          <p className="text-medium text-slate-500">
            Unleash your beauty at our salon. Tailored treatments, <br /> expert
            care—because every woman deserves to feel stunning. <br /> Elevate
            your confidence and embrace the allure. <br /> Beauty redefined,
            just for you.
          </p>
          <br />

          {/* <Pinkbtn label="Get on Appoinment" /> */}
        </div>

        <div className="md:w-[450px]">
          <img src={beautyQueen} alt="Banner image" className="rounded" />
        </div>
      </div>
    </main>
  );
};

export default Banner;
