"use client";
import InputMsg from "./input/InputMsg";

const Contact = () => {
  return (
    <section id="contact" className=" flex  justify-center pt-20 pb-20">
      <div className="md:w-[850px] w-full">
        <h2 className="font-[700] text-black md:ml-10 text-[2rem] ml-2 mb-2">
          Get in touch
        </h2>
        <div className="md:flex gap-2 md:justify-between w-full items-center">
          <div className="w-full flex justify-center md:ml-10 px-2 md:w-[60%] sm:h-[450px]">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4075439.030317637!2d93.99963461606475!3d4.036558783954479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30399bdf507cc4bd%3A0x1039d80b220ca60!2sAceh!5e0!3m2!1sid!2sid!4v1700990734174!5m2!1sid!2sid"
              className="border-0 w-full h-[450px] "
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className=" h-[450px] pt-8 md:mt-0 md:w-[40%] mt-4  mx-2 lg:flex items-center bg-indigo-200 px-4 lg:px-8 py-8 ">
            <InputMsg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
