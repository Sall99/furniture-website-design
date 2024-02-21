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
        "rounded-xs transtion rounded border-0 px-4 py-2 text-xs capitalize text-white duration-200 ease-in-out hover:cursor-pointer hover:opacity-90 focus:outline-none",
        className,
        variant === "primary" && "bg-primary-100",
        variant === "secondary" && "bg-secondary-400",
        size === "sm" ? "w-_134 px-9 py-3" : "",
      )}
      onClick={onClick}
      aria-label={label}
    >
      <span>{label}</span>
    </button>
  );
};
