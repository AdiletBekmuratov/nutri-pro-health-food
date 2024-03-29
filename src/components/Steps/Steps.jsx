import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { GiBroccoli, GiMeat, GiSlicedBread } from "react-icons/gi";
import { SiHappycow } from "react-icons/si";
import { FaDumbbell } from "react-icons/fa";
import Blob from "./Blob";
import Blob2 from "./Blob2";
import Blob3 from "./Blob3";
import BlobStep from "./BlobStep";
import StepStroke from "./StepStroke";
import StepStroke2 from "./StepStroke2";

const iconClasses =
  "text-xs sm:text-xl lg:text-4xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white";

const Steps = ({ step }) => {
  return (
    <div className="grid grid-cols-6 md:grid-cols-11 justify-between flex-nowrap items-center gap-2 lg:gap-4">
      <BlobStep
        text={"Общая информация"}
        icon={<BsFillPersonFill className={iconClasses} />}
        blob={
          <Blob
            className={`w-full transition duration-200 ease-in-out ${
              step >= 1 ? "text-customLightPink" : "text-gray-200"
            }`}
          />
        }
      />
      <StepStroke
        className={`w-full transition duration-200 ease-in-out hidden md:block ${
          step >= 2 ? "text-customLightPink" : "text-gray-200"
        }`}
      />
      <BlobStep
        text={"Физическая активность"}
        icon={<FaDumbbell className={iconClasses} />}
        blob={
          <Blob2
            className={`w-full transition duration-200 ease-in-out ${
              step >= 2 ? "text-customLightPink" : "text-gray-200"
            }`}
          />
        }
      />
      <StepStroke2
        className={`w-full transition duration-200 ease-in-out hidden md:block ${
          step >= 3 ? "text-customLightPink" : "text-gray-200"
        }`}
      />
      <BlobStep
        text={"Молочные продукты"}
        icon={<SiHappycow className={iconClasses} />}
        blob={
          <Blob3
            className={`w-full transition duration-200 ease-in-out ${
              step >= 3 ? "text-customLightPink" : "text-gray-200"
            }`}
          />
        }
      />
      <StepStroke
        className={`w-full transition duration-200 ease-in-out hidden md:block ${
          step >= 4 ? "text-customLightPink" : "text-gray-200"
        }`}
      />
      <BlobStep
        text={"Мясо"}
        icon={<GiMeat className={iconClasses} />}
        blob={
          <Blob
            className={`w-full transition duration-200 ease-in-out ${
              step >= 4 ? "text-customLightPink" : "text-gray-200"
            }`}
          />
        }
      />
      <StepStroke2
        className={`w-full transition duration-200 ease-in-out hidden md:block ${
          step >= 5 ? "text-customLightPink" : "text-gray-200"
        }`}
      />
      <BlobStep
        text={"Овощи и фрукты"}
        icon={<GiBroccoli className={iconClasses} />}
        blob={
          <Blob2
            className={`w-full transition duration-200 ease-in-out ${
              step >= 5 ? "text-customLightPink" : "text-gray-200"
            }`}
          />
        }
      />
      <StepStroke
        className={`w-full transition duration-200 ease-in-out hidden md:block ${
          step >= 6 ? "text-customLightPink" : "text-gray-200"
        }`}
      />
      <BlobStep
        text={"Доп. продукты"}
        icon={<GiSlicedBread className={iconClasses} />}
        blob={
          <Blob3
            className={`w-full transition duration-200 ease-in-out ${
              step >= 6 ? "text-customLightPink" : "text-gray-200"
            }`}
          />
        }
      />
    </div>
  );
};

export default Steps;
