const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-2xl m-2">Contact Us</h1>
      <form>
        <input
          className="p-4 m-4 rounded-2xl border border-gray-300"
          placeholder="name"
          type="text"
        />
        <input
          className="p-4 m-4 rounded-2xl border border-gray-300"
          placeholder="message"
          type="text"
        />
        <button className="m-4 p-4 rounded-2xl border border-gray-700 bg-gray-200 cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
