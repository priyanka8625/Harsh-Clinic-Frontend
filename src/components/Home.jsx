const Home = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 bg-gray-800 text-white py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <i className="bi bi-envelope"></i>
            <span>contact@example.com</span>
            <i className="bi bi-phone"></i>
            <span>+1 5589 55488 55</span>
          </div>
          <div className="hidden lg:flex space-x-4">
            <a href="#" className="text-white"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-white"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
        <div className="container mx-auto flex justify-between items-center py-4">
          <h1 className="text-3xl font-bold text-gray-800">
            <a href="#">Harsh Clinic</a>
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a className="text-gray-800 hover:text-blue-500" href="#hero">Home</a></li>
              <li><a className="text-gray-800 hover:text-blue-500" href="#about">About</a></li>
              <li><a className="text-gray-800 hover:text-blue-500" href="#services">Services</a></li>
              <li><a className="text-gray-800 hover:text-blue-500" href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="#appointment" className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">Register</a>
            <a href="#appointment" className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">Login</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="flex items-center justify-center bg-blue-100 py-32">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to Harsh Clinic</h1>
          <h2 className="mt-4 text-xl">We offer a variety of services to meet your health needs</h2>
          <a href="#about" className="mt-6 inline-block bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600">Get Started</a>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold">Why Choose Us?</h3>
          <p className="mt-4 text-lg max-w-3xl mx-auto">At Harsh Clinic, your health and well-being are our top priorities. We provide personalized care and expert medical advice tailored to your needs.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <i className="bi bi-receipt text-4xl text-blue-500"></i>
              <h4 className="mt-4 text-xl font-semibold">Exceptional Service</h4>
              <p className="mt-2 text-gray-600">Our friendly staff offers personalized care and expert advice to meet your health needs.</p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <i className="bi bi-cube-alt text-4xl text-blue-500"></i>
              <h4 className="mt-4 text-xl font-semibold">Trusted Quality</h4>
              <p className="mt-2 text-gray-600">We ensure safe and effective health services through strict quality control measures.</p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <i className="bi bi-images text-4xl text-blue-500"></i>
              <h4 className="mt-4 text-xl font-semibold">Convenient Options</h4>
              <p className="mt-2 text-gray-600">Visit us for attentive and hassle-free health services at our easily accessible clinic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Services</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto">Discover the comprehensive services offered at Harsh Clinic to meet all your healthcare needs.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <i className="fas fa-heartbeat text-4xl text-blue-500"></i>
              <h4 className="mt-4 text-xl font-semibold">Health and Wellness Products</h4>
              <p className="mt-2 text-gray-600">Vitamins, supplements, and health products to support your overall well-being.</p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <i className="fas fa-pills text-4xl text-blue-500"></i>
              <h4 className="mt-4 text-xl font-semibold">Over-the-Counter Medications</h4>
              <p className="mt-2 text-gray-600">A wide selection of OTC medications to address common health issues.</p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <i className="fas fa-hospital-user text-4xl text-blue-500"></i>
              <h4 className="mt-4 text-xl font-semibold">Consultations</h4>
              <p className="mt-2 text-gray-600">Personalized consultations with us to discuss your medications and health concerns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto">We’re here to help with all your healthcare needs! Reach out to us for consultations and services.</p>
          <div className="mt-8 flex justify-center space-x-12">
            <div className="text-left">
              <h4 className="font-semibold">Location:</h4>
              <p className="text-gray-600">A108 Adam Street, New York, NY 535022</p>
              <h4 className="font-semibold mt-4">Email:</h4>
              <p className="text-gray-600">info@example.com</p>
              <h4 className="font-semibold mt-4">Call:</h4>
              <p className="text-gray-600">+1 5589 55488 55</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <div>&copy; Copyright <strong>Harsh Clinic</strong>. All Rights Reserved</div>
          <div className="mt-4">
            Designed by <a href="#" className="text-blue-500">OurTeamName</a>
          </div>
          <div className="mt-4">
            <a href="#" className="text-white mx-2"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-white mx-2"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-white mx-2"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-white mx-2"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
