import React from "react";
import Link from "next/link";

interface Info {
  label: string;
  href: string | {};
  px: string;
  onClick?: () => void;
}

const Button2 = (props: Info) => {
  return (
    <Link
      onClick={props.onClick}
       className={`w-80 h-10 bg-blue-600 text-white py-4 ${props.px} rounded-full flex items-center justify-center`}

      href={props.href}
    >
      {props.label}
    </Link>
  );
};

export default Button2;