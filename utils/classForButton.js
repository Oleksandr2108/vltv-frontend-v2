"use client";
import cn from "classnames";

export const classForButton = ({ color }) => {
  return cn(
    "flex items-center justify-center text-[12px] rounded-[5px] uppercase border border-borderBtn laptop:border-0 laptop:text-[16px]",
    {
      "laptop:backdrop-blur-[10px] laptop:bg-whiteBtn text-white": color === "white",
      "bg-accent text-white": color === "orange",
      "text-accent bg-white border-0": color === "specialOrange",
    }
  );
};

export const classForTextOnImage = ({ color }) => {
  return cn(
    "flex items-center justify-center text-[10px] laptop:text-[16px] rounded-[5px] uppercase text-white",
    {
      "backdrop-blur-[10px] bg-whiteBtn": color === "white",
      "bg-accent": color === "orange",
    }
  );
};
