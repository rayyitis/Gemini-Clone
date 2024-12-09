import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Context } from "../context/Context";
import '../Components/Sidebar.css'

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent,prevPrompt,setRecentPrompt,newChat} = useContext(Context)

  const loadPrompt = async(prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className="sidebar  min-h-screen inline-flex flex-col justify-between p-4 bg-gray-200">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu w-5 block ml-5 cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />
        <div onClick={()=>newChat()} className="NewChat mt-20 inline-flex items-center gap-5 py-3 px-5 text-gray-600 bg-slate-100 rounded-full ">
          <img className="w-4" src={assets.plus_icon} alt="" />
          {extended ? <p className="text-l ">New Chat</p> : null}
        </div>
        {extended ? (
          <div className="Recent flex-col">
            <p className="recent-title mt-5 mb-6">Recent</p>
            {prevPrompt.map((item,index)=>{
                return (
                <div onClick={()=>{loadPrompt(item)}} className="recent-entry hover:bg-gray-300 flex items-center mb-2 py-3 px-5 rounded-full text-gray-700 bg-slate-100">
                    <img className="w-5" src={assets.message_icon} alt="" />
                    <p>{item.slice(0,18)}...</p>
                </div>
                )
            })}
            
          </div>
        ) : null}
      </div>
      <div className="bottom flex flex-col ">
        <div className="bottom-item recent-entry  hover:bg-gray-300 flex items-center gap-3 py-3 px-5 rounded-full text-gray-700 ">
          <img className="w-5" src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry  hover:bg-gray-300 flex items-center gap-3 py-3 px-5 rounded-full text-gray-700  ">
          <img className="w-5" src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry  hover:bg-gray-300 flex items-center gap-3 py-3 px-5 rounded-full text-gray-700 ">
          <img className="w-5" src={assets.setting_icon} alt="" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
