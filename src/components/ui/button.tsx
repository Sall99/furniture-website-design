"use client";
import clsx from "clsx";
import { FC } from "react";

interface ButtonProps {
  label: string;
  className?: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  variant: "primary" | "secondary" | "default";
  size: "sm" | "md";
}

export const Button: FC<ButtonProps> = ({
  label,
  className = "",
  onClick,
  type = "button",
  variant = "default",
  size,
}) => {
  return (
    <button
      type={type}
      className={clsx(
        "border-0 text-white rounded-xs text-xs focus:outline-none hover:cursor-pointer hover:opacity-90 transtion duration-200 ease-in-out py-2 px-4 rounded capitalize",
        className,
        variant === "primary" && "bg-primary-100",
        variant === "secondary" && "bg-secondary-400",
        size === "sm" ? "w-_134 px-9 py-3" : ""
      )}
      onClick={onClick}
      aria-label={label}
    >
      <span>{label}</span>
    </button>
  );
};
