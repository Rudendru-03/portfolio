// components/Hero.js
const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-96 bg-gray-900 text-white relative w-full">
      <h1 className="text-5xl font-bold mb-4 text-center">
        👋 I'm Rudendru Rahul, a Software Developer
      </h1>
      <p className="text-lg mt-4 max-w-2xl mx-auto text-center">
        I specialize in full-stack development with experience in React,
        Node.js, and Express. I am passionate about creating impactful web applications.
      </p>
      <a
        href="#contact"
        className="mt-8 inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      >
        Hire Me
      </a>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 rounded-lg"></div>
    </section>
  );
};

export default Hero;
