import React from "react";

const Video_tutorial = () => {
  return (
    <div className="welcome-page font-sans text-center p-5">
      <header className="header rounded-full p-10 bg-primary/80 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome to DeenNest</h1>
        <p className="">
          Our start guide with DeenNest, from setting up your student program,
          managing personnel, the easiest features, and arranging your academic
          communication.
        </p>
      </header>

      <main className="main-content max-w-4xl mx-auto p-5">
        <section className="step mb-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-xl font-semibold mb-2">
              1. Setup and Activation
            </h2>
            <p className="text-gray-600">
              This video tutorial will show you how to activate your account and
              ensure a smooth and secure start.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="image-placeholder w-full h-48 border-2 border-black"></div>
          </div>
        </section>

        <section className="step mb-10 flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-xl font-semibold mb-2">
              2. Setting up your classes
            </h2>
            <p className="text-gray-600">
              This video guide to organizing your madarasa’s name, arrange
              classes for your student and create student management program.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="image-placeholder w-full h-48 border-2 border-black"></div>
          </div>
        </section>

        <section className="step mb-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-xl font-semibold mb-2">3. Adding students</h2>
            <p className="text-gray-600">
              A step-by-step guide on adding students to the system and
              fostering a seamless academic environment.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="image-placeholder w-full h-48 border-2 border-black"></div>
          </div>
        </section>

        <section className="step mb-10 flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-xl font-semibold mb-2">
              4. Setting up subjects
            </h2>
            <p className="text-gray-600">
              Learn how to set up subjects in class and how to manage them for
              your teaching organization.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="image-placeholder w-full h-48 border-2 border-black"></div>
          </div>
        </section>

        <section className="step mb-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-xl font-semibold mb-2">
              5. Adding staff and roles
            </h2>
            <p className="text-gray-600">
              Adding staff members and assign teachers to the right access level
              for their roles within the system.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="image-placeholder w-full h-48 border-2 border-black"></div>
          </div>
        </section>

        <section className="step mb-10 flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-xl font-semibold mb-2">
              6. Daily progress tracking
            </h2>
            <p className="text-gray-600">
              This demonstrates how to set up daily progress tracking for
              students and support their journey.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="image-placeholder w-full h-48 border-2 border-black"></div>
          </div>
        </section>

        <section className="step mb-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-xl font-semibold mb-2">
              7. Fee setup, invoicing, discount
            </h2>
            <p className="text-gray-600">
              Learn how to set up and manage fees, including invoicing,
              discounts, and managing financial transparency.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="image-placeholder w-full h-48 border-2 border-black"></div>
          </div>
        </section>

        <section className="step mb-10 flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-xl font-semibold mb-2">8. Managing Parents</h2>
            <p className="text-gray-600">
              A guide for managing information and maintaining strong links
              between school and parents.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="image-placeholder w-full h-48 border-2 border-black"></div>
          </div>
        </section>

        <section className="step mb-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-xl font-semibold mb-2">
              9. Parents accessing the platform and viewing records
            </h2>
            <p className="text-gray-600">
              This video explains how parents can log in, navigate records, and
              manage their progress.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="image-placeholder w-full h-48 border-2 border-black"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Video_tutorial;
