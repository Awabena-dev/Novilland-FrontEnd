"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-16">

        {/* Logo */}
        <img
          src="/Logo/Logo-White.png"
          alt="Noviland Logo"
          className="w-32 md:w-40 animate-fadeInUp"
        />

        {/* Links and Subscribe */}
        <div className="flex flex-col md:flex-row justify-between w-full gap-12 animate-fadeInUp">
          
          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-12">
            {/* Useful Links */}
            <ul className="flex flex-col gap-3">
              <li className="text-2xl font-semibold mb-2">روابط مفيدة</li>
              <li className="text-base hover:text-blue-400 cursor-pointer transition">الرئيسية</li>
              <li className="text-base hover:text-blue-400 cursor-pointer transition">اعثر على عقار</li>
              <li className="text-base hover:text-blue-400 cursor-pointer transition">من نحن</li>
              <li className="text-base hover:text-blue-400 cursor-pointer transition">اتصل الآن</li>
            </ul>

            {/* Legal Links */}
            <ul className="flex flex-col gap-3">
              <li className="text-2xl font-semibold mb-2">روابط قانونية</li>
              <li className="text-base hover:text-blue-400 cursor-pointer transition">الشروط والأحكام</li>
              <li className="text-base hover:text-blue-400 cursor-pointer transition">السياسات</li>
              <li className="text-base hover:text-blue-400 cursor-pointer transition">محامامي</li>
              <li className="text-base hover:text-blue-400 cursor-pointer transition">حجز مستشار</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">جريدتنا الإلكترونية</h3>
            <p className="text-gray-300 text-base">
              أحصل على آخر الأخبار وأنت في بلدك
            </p>
            <div className="flex w-full max-w-md gap-3 bg-white rounded-2xl p-1">
              <input
                type="email"
                placeholder="أدخل الإيميل"
                className="flex-1 px-3 py-2 text-black placeholder-gray-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <button className="px-6 py-2 rounded-2xl bg-black text-white font-semibold hover:opacity-90 transition">
                اشترك
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t-2 border-white w-full rounded-full animate-fadeInUp" />

        {/* Copy */}
        <p className="text-center text-base animate-fadeInUp">
          نوفيلاند للعقارات - جميع الحقوق محفوظة 2023
        </p>
      </div>

      {/* Tailwind Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
