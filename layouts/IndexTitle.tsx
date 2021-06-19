import { ReactNode } from "react";
import "tailwindcss/tailwind.css"

export default function IndexTitle({ children }: {children: ReactNode}) {
  return <h1 className="my-5 text-md font-medium">{children}</h1>
}
