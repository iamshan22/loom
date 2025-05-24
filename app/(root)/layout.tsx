import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div>
        <Navbar />
        {/* This is the main content area */}
      {children}
    </div>
  )
}

export default Layout;