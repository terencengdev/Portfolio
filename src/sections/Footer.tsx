import React, { useState, useRef } from "react";

export default function Footer() {
  return (
    <>
      <section className="py-8 footer text-center  font-semibold" id="footer">
        <div className="flex items-center justify-center">
          Made with <div className="heartbeat text-2xl mx-2">❤️</div> by
          Terenceng
        </div>
      </section>
    </>
  );
}
