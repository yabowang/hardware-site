export default function ContactForm() {
  return (
    <div id="contact-form" className="bg-gray-50 p-8 rounded-lg mt-12">
      <h3 className="text-2xl font-bold mb-4">Request a Quote</h3>
      <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border rounded" />
          <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 border rounded" />
        </div>
        <input type="text" name="company" placeholder="Company Name" className="w-full p-3 border rounded" />
        <textarea name="message" rows="4" placeholder="I'm interested in..." required className="w-full p-3 border rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded font-bold hover:bg-blue-700 w-full md:w-auto">
          Send Inquiry
        </button>
      </form>
    </div>
  );
}