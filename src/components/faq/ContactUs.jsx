import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_j4as2yz', 'template_d2iofkh', form.current, 'kG81wbOUi5emNDkAw')
            .then(
                () => {
                    setPopupMessage("Your message has been sent successfully!");
                    setShowPopup(true);
                },
                (error) => {
                    setPopupMessage(`Failed to send your message. Error: ${error.text}`);
                    setShowPopup(true);
                },
            );
        form.current.reset();
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="flex flex-col justify-center items-center pt-4 h-screen">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center max-w-[500px] max-auto w-full">
                <label className="block text-left w-full">Name</label>
                <input
                    type="text"
                    name="Name"
                    className="border border-black p-3 w-full mb-4"
                    required
                />
                <label className="block text-left w-full">Last Name</label>
                <input
                    type="text"
                    name="Last Name"
                    className="border border-black p-3 w-full mb-4"
                    required
                />
                <label className="block text-left w-full">Email</label>
                <input
                    type="email"
                    name="email"
                    className="border border-black p-3 w-full mb-4"
                    required
                />
                <label className="block text-left w-full">Message</label>
                <textarea
                    name="message"
                    className="border border-black p-3 w-full mb-4 resize-none"
                    rows="4"
                    required
                ></textarea>
                <button
                    type="submit"
                    className="border border-blue-400 px-6 py-3 bg-blue-100 rounded-xl hover:bg-blue-200"
                >
                    Send
                </button>
            </form>

            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-md">
                        <p>{popupMessage}</p>
                        <button
                            onClick={closePopup}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactUs;
