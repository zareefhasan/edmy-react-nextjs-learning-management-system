"use client";

import React from "react";

const GoogleMap = () => {
  return (
    <>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.6386837548393!2d-118.29440252382508!3d33.97612522174477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c82cf16145cf%3A0xfaef20859d448597!2s7011%20Vermont%20Ave%2C%20Los%20Angeles%2C%20CA%2090044%2C%20USA!5e0!3m2!1sen!2sbd!4v1719288674892!5m2!1sen!2sbd"
     
          style={{ width: '100%', height: '450px', border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default GoogleMap;
