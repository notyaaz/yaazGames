import React from "react";
import styles from "../../styles.js";

export default function Home() {
  return (
    <div
      className={`${styles.sectionPadding} flex justify-center items-center flex-col mt-[100px]`}
    >
      <p className="text-[5rem] font-bold w-full">Welcome,</p>
      <p className="text-[1.6rem] w-full">
        I'm <span className="font-light text-[2.5rem] text-accent">Yazan Dalbah</span>,
        Palestinian 18 years old.
        <br />
        I'm a web and game developer.
        <br />
        this is a website that contains some online and offline games I made.
        <br />I hope u have fun here!
      </p>

      <div className="w-full flex justify-start items-center mt-[1rem] gap-[60px]">
        <a href="https://github.com/notyaaz">
          <i class="cursor-pointer text-[1.75rem] fa-brands fa-github hover:text-gray-800"></i>
        </a>
        <a href="https://www.linkedin.com/in/yazan-dalbah-341852247">
          <i class="cursor-pointer text-[1.75rem] fa-brands fa-linkedin-in hover:text-cyan-800"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100059650716541">
          <i class="cursor-pointer text-[1.75rem] fa-brands fa-facebook hover:text-blue-700"></i>
        </a>
        <i class="cursor-pointer text-[1.75rem] fa-solid fa-envelope hover:text-amber-700"></i>
      </div>
    </div>
  );
}
