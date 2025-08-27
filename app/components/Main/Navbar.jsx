
import Link from "next/link";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import MobileNav from "./MobileNav";




const NavLink = [
  { id: 1, url: "/", text: "الرئسية" },
  { id: 2, url: "/buildings", text: "عقارات" },
  { id: 3, url: "/about", text: "من نحن" },
  { id: 4, url: "/contact", text: "تواصل" },
];





const Navbar = async () => {
  // جلب بيانات المستخدم من Kinde
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="fixed top-0 left-0 w-full h-[70px] bg-white shadow-sm">
      <nav className="custom-container h-full flex items-center justify-between">
        {/* logo */}
        <img src="/Logo/Logo.png" alt="logo" className="h-10" />

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6">
          {NavLink.map((link) => (
            <li key={link.id}>
              <Link
                href={link.url}
                className="text-[20px] text-black font-normal hover:text-red-500"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="flex gap-3 items-center">
          {!user ? (
            <>
              <LoginLink>
                <button className="btn-1 bg-gray-700 hidden md:block">تسجيل دخول</button>
              </LoginLink>
              <RegisterLink>
                <button className="btn-1 bg-gray-700 hidden md:block">إنشاء حساب</button>
              </RegisterLink>
            </>
          ) : (
            <LogoutLink>
              <button className="btn-1 hidden md:block">تسجيل خروج</button>
            </LogoutLink>
          )}


          {/* OPen Nav  */}

          <MobileNav NavLink={NavLink} user={user}/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
