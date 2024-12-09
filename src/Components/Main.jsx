import React, { useContext } from "react";
import { assets } from "../assets/assets";
import "./Main.css";
import ContextProvider, { Context } from "../context/Context";

const Main = () => {
  const {
    onSent,
    loading,
    recentPrompt,
    showResult,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main flex-1 min-h-full pb-10 relative">
      <div className="nav flex items-center justify-between p-6 text-2xl">
        <p className="text-orange-500">Gemini</p>
        <img className="w-12 rounded-full" src={assets.user_icon} alt="" />
      </div>
      <div className="main-container max-w-4xl m-auto">
        {!showResult ? (
          <>
            <div className="greet my-8 mx-0 text-6xl text-blue-300 font-semibold p-10">
              <p className="gradient">
                <span>Hello,Ray.</span>
              </p>
              <p>How can i help you today?</p>
            </div>
            <div className="cards ">
              <div className="card hover:bg-red-100 h-52 cursor-pointer p-5  bg-red-50 relative rounded-md">
                <p className="text-l text-gray-600 font-medium">
                  Suggest a beutiful place with mountains/beach for trip
                </p>
                <img
                  className="w-9 rounded-2xl absolute bg-white  bottom-5 right-5"
                  src={assets.compass_icon}
                  alt=""
                />
              </div>
              <div className="card hover:bg-red-100 h-52 cursor-pointer p-5  bg-red-50 relative rounded-md">
                <p className="text-l text-gray-600 font-medium">
                  What is the best way to learn a new language?
                </p>
                <img
                  className="w-9 rounded-2xl absolute bg-white  bottom-5 right-5"
                  src={assets.question_icon}
                  alt=""
                />
              </div>
              <div className="card hover:bg-red-100 h-52 cursor-pointer p-5  bg-red-50 relative rounded-md">
                <p className="text-l text-gray-600 font-medium">
                  How to make a good first impression?
                </p>
                <img
                  className="w-9 rounded-2xl absolute bg-white bottom-5 right-5"
                  src={assets.question_icon}
                  alt=""
                />
              </div>
              <div className="card hover:bg-red-100 h-52 cursor-pointer p-5  bg-red-50 relative rounded-md">
                <p className="text-l text-gray-600 font-medium">
                  Who was the first person to walk on the moon?
                </p>
                <img
                  className="w-9 rounded-2xl absolute bg-white bottom-5 right-5"
                  src={assets.bulb_icon}
                  alt=""
                />
              </div>
            </div>
          </>
        ) : (
          <div className="result overflow-y-scroll ">
            <div className="result-title text-lg my-14 mx-0 flex items-center gap-10">
              <img
                className="w-20 rounded-full"
                src={assets.user_icon}
                alt=""
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data flex items-start gap-6">
              <img className="w-10" src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader w-full flex flex-col gap-5">
                  <hr className="rounded-md border-none" />
                  <hr className="rounded-md border-none" />
                  <hr className="rounded-md border-none" />
                </div>
              ) : (
                <p
                  className="text-lg font-normal leading-normal"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="searchbox flex items-center justify-between gap-10 bg-slate-200 py-5 px-10 rounded-full">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              className="border-none flex-1 outline-none bg-transparent text-lg"
              type="text"
              placeholder="Enter a Prompt Here"
            />
            <div className="flex flex-row gap-2">
              <img
                className="w-7 cursor-pointer"
                src={assets.mic_icon}
                alt=""
              />
              <img
                className="w-7 cursor-pointer"
                src={assets.gallery_icon}
                alt=""
              />
              {input?<img
                onClick={() => {
                  onSent();
                }}
                className="w-7 cursor-pointer"
                src={assets.send_icon}
                alt=""
              />:null}
              
            </div>
          </div>
          <p className="bottom-info text-sm text-center font-medium text-gray-500">
            Gemini may display inaccurate info, including about people, so
            double-check its response. Your Privacy and Gemini App
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
