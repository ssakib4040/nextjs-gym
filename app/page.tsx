import React from "react";

import background from "@/public/photo-1534438327276-14e5300c3a48.avif";

export default function page() {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="bg-yellow-500 text-white py-4">
        <div className="container mx-auto flex items-center justify-between lg:px-16">
          <h1 className="text-2xl font-bold">Gym Website</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-yellow-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-200">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-200">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-200">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <!-- Hero Section --> */}
      <section
        className="bg-yellow-500 bg-cover bg-center py-28"
        style={{
          backgroundImage: `url(${background.src})`,
        }}
      >
        <div className="lg:px-16 mx-auto">
          <div className="text-yellow-500  text-center">
            <h1 className="text-5xl text-yellow-500  font-bold mb-4">
              Welcome to Our Gym
            </h1>
            <p className="text-2xl text-gray-100 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              tincidunt eleifend tortor, nec gravida eros lobortis eu.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Suspendisse potenti. Curabitur in semper
              nisi.
            </p>
            <a
              href="#"
              className="bg-white text-yellow-500 px-6 py-3 rounded-full font-bold text-xl hover:bg-yellow-100"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* <!-- About Section --> */}
      <section className="py-20 lg:px-16">
        <div className="container mx-auto flex items-center">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              tincidunt eleifend tortor, nec gravida eros lobortis eu.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Suspendisse potenti. Curabitur in semper
              nisi.
            </p>
          </div>
          <div className="w-1/2 flex justify-end">
            <img
              src="https://picsum.photos/400/400?random=2"
              alt="Gym"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* <!-- Services Section --> */}
      <section className="bg-yellow-300 py-20 lg:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Personal Training</h3>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Group Classes</h3>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Cardio Workouts</h3>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Contact Section --> */}
      <section className="py-20 lg:px-16">
        <div className="container mx-auto flex items-center">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              tincidunt eleifend tortor, nec gravida eros lobortis eu.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Suspendisse potenti. Curabitur in semper
              nisi.
            </p>
            <ul className="mt-4">
              <li>
                <strong>Phone:</strong> 123-456-7890
              </li>
              <li>
                <strong>Email:</strong> info@gymwebsite.com
              </li>
              <li>
                <strong>Address:</strong> 123 Gym Street, City, Country
              </li>
            </ul>
          </div>
          <div className="w-1/2 flex justify-end">
            <img
              src="https://picsum.photos/300/300"
              alt="Contact"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer className="bg-yellow-500 text-white py-8 lg:px-16">
        <div className="container mx-auto text-center">
          &copy; 2023 Gym Website. All rights reserved.
        </div>
      </footer>
    </>
  );
}
