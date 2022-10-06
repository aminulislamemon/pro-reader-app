import Lottie from "lottie-react";
import React from "react";
import { useRouteError } from "react-router-dom";
import notfound from "../assets/notfound.json";

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
      <div className="flex flex-col min-h-[700px] justify-center items-center">
        <div className="relative">
          <Lottie className="mb-48 w-[90%]" animationData={notfound} loop={true} />
          <br />
          {
            error && (
              <div className="text-center absolute top-[360px] left-44 text-xl">
                <p className="">{error.status}</p>
                <p className="text-red-500">{error.statusText || error.message}</p>
              </div>
            )
          }

          <h1 className="text-center text-5xl font-sans font-bold absolute top-[420px] left-2 text-gray-700">
            Oops! Error Occurred.
          </h1>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
