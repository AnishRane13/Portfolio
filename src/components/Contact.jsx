import { useRef, useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  MessageCircle,
  User,
  AtSign,
} from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const formRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear any existing status messages when user starts typing
    if (formStatus) {
      setFormStatus(null);
    }
  };

  const validateForm = () => {
    const { user_name, user_email, subject, message } = formData;

    if (!user_name.trim()) {
      return { isValid: false, error: "Please enter your name" };
    }

    if (!user_email.trim()) {
      return { isValid: false, error: "Please enter your email" };
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)) {
      return { isValid: false, error: "Please enter a valid email address" };
    }

    if (!subject.trim()) {
      return { isValid: false, error: "Please enter a subject" };
    }

    if (!message.trim()) {
      return { isValid: false, error: "Please enter your message" };
    }

    if (message.trim().length < 10) {
      return {
        isValid: false,
        error: "Message must be at least 10 characters long",
      };
    }

    return { isValid: true };
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Validate form
  const validation = validateForm();
  if (!validation.isValid) {
    setFormStatus({ type: "error", message: validation.error });
    return;
  }

  setIsLoading(true);
  setFormStatus(null);

  try {
    // Initialize EmailJS (make sure you've added the EmailJS SDK to your project)
    // Typically you would add this in your main.jsx/index.js:
    // import emailjs from '@emailjs/browser';
    // emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    const result = await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    console.log("Email sent successfully", result);

    // Success
    setFormStatus({
      type: "success",
      message: "Thank you! Your message has been sent successfully. I'll get back to you soon!",
    });

    // Clear form
    setFormData({
      user_name: "",
      user_email: "",
      subject: "",
      message: "",
    });

    // Auto clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  } catch (error) {
    console.error("Email send failed:", error);
    setFormStatus({
      type: "error",
      message: "Sorry, there was an error sending your message. Please try again or contact me directly via email.",
    });
  } finally {
    setIsLoading(false);
  }
};

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-950 dark:via-black dark:to-gray-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-orange-500/15 to-pink-500/15 dark:from-cyan-500/15 dark:to-purple-500/15 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-red-500/15 to-orange-500/15 dark:from-blue-500/15 dark:to-cyan-500/15 rounded-full blur-xl animate-pulse animation-delay-500"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Mouse Following Light */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-full border border-gray-200/40 dark:border-gray-700/40 shadow-xl shadow-black/5 dark:shadow-white/5">
            <MessageCircle className="w-4 h-4 text-orange-500 dark:text-cyan-400 animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Let's connect
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from
            you.
            <span className="font-semibold text-orange-600 dark:text-cyan-400">
              {" "}
              Drop me a message
            </span>{" "}
            and
            <span className="font-semibold text-red-600 dark:text-blue-400">
              {" "}
              let's create something amazing
            </span>{" "}
            together.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-1000 ease-out delay-200 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-16"
            }`}
          >
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-purple-500/10 rounded-3xl blur-xl"></div>

              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-black/5 dark:shadow-white/5 p-8 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 dark:from-cyan-500 dark:to-blue-500 rounded-2xl shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Contact Information
                  </h3>
                </div>

                <div className="space-y-8">
                  {[
                    {
                      icon: Mail,
                      title: "Email",
                      value: "anish.rane1305@gmail.com",
                      gradient:
                        "from-orange-500 to-red-500 dark:from-cyan-500 dark:to-blue-500",
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      value: "+91 8850251295",
                      gradient:
                        "from-red-500 to-pink-500 dark:from-blue-500 dark:to-purple-500",
                    },
                    {
                      icon: MapPin,
                      title: "Location",
                      value: "Mumbai, Maharashtra, India",
                      gradient:
                        "from-pink-500 to-orange-500 dark:from-purple-500 dark:to-cyan-500",
                    },
                  ].map(({ icon: Icon, title, value, gradient }, index) => (
                    <div
                      key={title}
                      className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300"
                    >
                      <div
                        className={`relative p-4 bg-gradient-to-r ${gradient} rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                        <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-orange-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                          {title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative floating elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-full animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-red-500/20 to-pink-500/20 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full animate-float animation-delay-500"></div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-1000 ease-out delay-400 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16"
            }`}
          >
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-red-500/10 via-pink-500/10 to-orange-500/10 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-cyan-500/10 rounded-3xl blur-xl"></div>

              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-black/5 dark:shadow-white/5 p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 dark:from-blue-500 dark:to-purple-500 rounded-2xl shadow-lg">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Send Me a Message
                  </h3>
                </div>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {[
                    {
                      name: "user_name",
                      label: "Name",
                      type: "text",
                      icon: User,
                    },
                    {
                      name: "user_email",
                      label: "Email",
                      type: "email",
                      icon: AtSign,
                    },
                    {
                      name: "subject",
                      label: "Subject",
                      type: "text",
                      icon: MessageCircle,
                    },
                  ].map(({ name, label, type, icon: Icon }) => (
                    <div key={name} className="group">
                      <label
                        htmlFor={name}
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-orange-600 dark:group-focus-within:text-cyan-400 transition-colors duration-300"
                      >
                        {label}
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Icon className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 dark:group-focus-within:text-cyan-400 transition-colors duration-300" />
                        </div>
                        <input
                          type={type}
                          id={name}
                          name={name}
                          value={formData[name]}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl focus:ring-2 focus:ring-orange-500/50 dark:focus:ring-cyan-500/50 focus:border-orange-500 dark:focus:border-cyan-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 shadow-lg focus:shadow-xl"
                          placeholder={`Enter your ${label.toLowerCase()}`}
                        />
                      </div>
                    </div>
                  ))}

                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-orange-600 dark:group-focus-within:text-cyan-400 transition-colors duration-300"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-4 left-4 pointer-events-none">
                        <MessageCircle className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 dark:group-focus-within:text-cyan-400 transition-colors duration-300" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl focus:ring-2 focus:ring-orange-500/50 dark:focus:ring-cyan-500/50 focus:border-orange-500 dark:focus:border-cyan-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 shadow-lg focus:shadow-xl resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group relative w-full px-8 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-cyan-600 dark:via-blue-600 dark:to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                  </button>
                </form>

                {/* Status Messages */}
                {formStatus && (
                  <div
                    className={`mt-6 p-4 ${
                      formStatus.type === "success"
                        ? "bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-green-800 dark:text-green-200"
                        : "bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 text-red-800 dark:text-red-200"
                    } rounded-2xl backdrop-blur-xl animate-fade-in`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-1 ${
                          formStatus.type === "success"
                            ? "bg-green-500"
                            : "bg-red-500"
                        } rounded-full mt-0.5 flex-shrink-0`}
                      >
                        {formStatus.type === "success" ? (
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="font-semibold text-sm leading-relaxed">
                        {formStatus.message}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default Contact;
