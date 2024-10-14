const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-gray-800 text-white p-10 w-full rounded-lg"> {/* Ensure full width */}
      <h2 className="text-3xl mb-4 text-center">My Portfolio</h2> {/* Center the title */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Responsive grid */}
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">Project 1</div>
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">Project 2</div>
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">Project 3</div>
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">Project 4</div>
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">Project 5</div>
        {/* Add more projects */}
      </div>
    </section>
  );
};

export default Portfolio;
