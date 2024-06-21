import React from "react";
import Footer from "./ui/Footer";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center mt-[70px] sm:my-[100px]">
        <div className="w-[90%] rounded-md flex flex-col sm:flex-row items-center">
          {/* Desktop Image */}
          <img
            src="images/image-product-desktop.jpg"
            alt="desktop perfume image"
            className="rounded-tl-md rounded-bl-md sm:rounded-t-md sm:rounded-l-md w-[50%] h-auto sm:block hidden"
          />
          {/* Mobile Image */}
          <img
            src="images/image-product-mobile.jpg"
            alt="mobile perfume image"
            className="rounded-t-md max-w-full h-auto sm:hidden mt-3"
          />
          {/* Text Content Section */}
          <div className="bg-white w-full sm:h-[100%] sm:w-[50%] sm:flex sm:flex-col sm:items-center p-3 ">
            <div className="sm:flex sm:flex-col sm:gap-7 sm:my-auto ">
              <header
                className="font-montserrat sm:text-2xl m-3 font-light"
                style={{ letterSpacing: "0.3rem" }}
              >
                PERFUME
              </header>
              <h1 className="font-extrabold text-3xl sm:text-6xl m-3">
                Gabrielle Essence Eau De Parfum
              </h1>
              <p className="text-md m-3 sm:text-xl sm:font-light">
                A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Perfumer-Creator for the House of CHANEL.
              </p>
              <div className="price m-2 flex">
                <span className="text-darkCyan font-extrabold text-3xl sm:text-6xl">
                  $149.99
                </span>{" "}
                <span className="price-with-line-through font-extralight text-sm flex items-center ml-3 sm:text-xl">
                  $169.99
                </span>
              </div>
              <button className="bg-darkCyan w-full rounded-lg p-3 sm:p-5 font-semibold flex justify-center text-white">
                <img
                  src="../images/icon-cart.svg"
                  alt=""
                  className="w-6 h-6 mr-2"
                />
                Add to Cart
              </button>
            </div>
          </div>
        </div>{" "}
        <Footer />
      </div>
    </>
  );
}

export default App;
