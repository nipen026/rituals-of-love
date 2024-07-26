import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
    const router = useRouter()
  return (
    <>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu" style={{ transition: "all 0.5s" }}>
            <li
              className={
                router.pathname === "/"
                  ? "font-[600] text-[#86a0b6]"
                  : "font-[600] text-[#282C35] hover:text-[#86a0b6]"
              }
            >
              <Link href="/" className={
                router.pathname === "/"
                  ? "font-[600] text-[#86a0b6]"
                  : "font-[600] text-[#282C35] hover:text-[#86a0b6]"
              }>Home</Link>
            </li>
            <li
              className={
                router.pathname === "/About"
                  ? "font-[600] text-[#86a0b6]"
                  : "font-[600] text-[#282C35] hover:text-[#86a0b6]"
              }
            >
              <Link href="/About">About Us</Link>
            </li>
            <li
              className={
                router.pathname === "/Gallery"
                  ? "font-[600] text-[#86a0b6]"
                  : "font-[600] text-[#282C35] hover:text-[#86a0b6]"
              }
            >
              <Link href={"/Gallery"}>Our Gallery</Link>
            </li>
            <li
              className={
                router.pathname === "/Contactus"
                  ? "font-[600] text-[#86a0b6]"
                  : "font-[600] text-[#282C35] hover:text-[#86a0b6]"
              }
            >
              <Link href={"/Contactus"}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
