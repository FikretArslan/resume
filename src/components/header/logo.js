import React from "react";

const Logo = () => {
  return (
    <a href="index.html.htm" className="mb-lg-auto mt-lg-4">
      <span className="bg-dark-2 rounded-pill p-2 mb-lg-1 d-none d-lg-inline-block">
        <img
          className="img-fluid rounded-pill d-block"
          //src="images/profile.jpg.jfif"
          src="images/resim.jpg"
          title="I'm Fikret"
          alt=""
        />
      </span>
      <h1 className="text-5 text-white text-center mb-0 d-lg-block">
        Fikret Arslan
      </h1>
    </a>
  );
};

export default Logo;
