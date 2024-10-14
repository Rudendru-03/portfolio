const ContactForm = () => {
  return (
    <div id="contact" className="bg-gray-900 text-white p-10 rounded-lg shadow-lg min-w-full">
      <h2 className="text-3xl mb-4">Get In Touch</h2>
      <form className="space-y-4 flex flex-col">
        <input
          type="text"
          placeholder="Your Name"
          className="w-1/2 p-2 bg-gray-700 text-white rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-1/2 p-2 bg-gray-700 text-white rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-1/2 p-2 bg-gray-700 text-white rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-500 w-1/6 text-black px-4 py-2 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
