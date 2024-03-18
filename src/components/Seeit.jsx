import React from "react";
import { useTranslation } from "react-i18next";

const Seeit = () => {
  const { t } = useTranslation('Seeit'); 

  return (
    <div className="flex flex-col items-center justify-center h-[400px] bg-gradient-to-r from-stone-100 via-stone-200 to-stone-300 border-fuchsia-700">
      <h1 className="text-center md:text-4xl sm:text-2xl xs:text-xl font-extrabold mt-10">
        {t('title')}
      </h1>
      <div className="sm:flex sm:pl-0 xs:pl-12 items-center xs:items-center mt-10">
        <input
          type="email"
          placeholder="email@gmail.com"
          className="border-2 border-fuchsia-700 xs:mb-2  xs:px-4 xs:py-2 sm:px-4 sm:py-2 rounded-md mx-2"
        />
        <input
          type="Submit"
          className="bg-fuchsia-700 text-white xs:mx-2 sm:mx-[0px] p-2 px-8 font-semibold rounded-md"
        />
      </div>
      <p className="text-center mt-5">
        {t('footer')}
      </p>
    </div>
  );
};

export default Seeit;
