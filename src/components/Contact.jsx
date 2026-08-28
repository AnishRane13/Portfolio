import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Check,
  X,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import SectionHeading from "./SectionHeading";

const channels = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "anishrane1305@gmail.com",
    href: "mailto:anishrane1305@gmail.com",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+91 8850251295",
    href: "tel:+918850251295",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Mumbai, Maharashtra, India",
  },
];

const socials = [
  { Icon: Github, href: "https://github.com/AnishRane13", label: "GITHUB" },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/anish-rane13/",
    label: "LINKEDIN",
  },
  { Icon: Twitter, href: "https://x.com/Anish_Rane_178", label: "X" },
];

const fields = [
  { name: "user_name", label: "NAME", type: "text", placeholder: "Your name" },
  {
    name: "user_email",
    label: "EMAIL",
    type: "email",
    placeholder: "you@company.com",
  },
  {
    name: "subject",
    label: "SUBJECT",
    type: "text",
    placeholder: "What is this about?",
  },
];

const inputClass =
  "w-full border border-line bg-ink px-4 py-4 text-sm text-chalk caret-accent placeholder:text-mist/60 transition-colors focus:border-accent focus:outline-none";

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const formRef = useRef(null);

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
        message:
          "Message sent. Thanks for reaching out — I'll get back to you soon.",
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
        message:
          "Something went wrong sending your message. Please try again or email me directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          index="07"
          kicker="CONTACT"
          title="Hire"
          accent="Me"
        />

        <p className="mt-8 max-w-xl text-sm leading-[1.9] text-mist">
          Open to full-stack and frontend roles, and to freelance work on
          real-time or AI-heavy products. Send a note and I will reply within a
          day.
          <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-accent" />
        </p>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.25fr]">
          {/* Channels */}
          <div
            className="flex flex-col border border-line bg-panel p-8"
            data-aos="fade-up"
          >
            <p className="text-[10px] tracking-[0.3em] text-accent">
              DIRECT CHANNELS
            </p>

            <div className="mt-8 space-y-7">
              {channels.map(({ icon: Icon, label, value, href }) => {
                const body = (
                  <>
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                    <span className="min-w-0">
                      <span className="block text-[10px] tracking-[0.25em] text-mist">
                        {label}
                      </span>
                      <span className="mt-1 block text-xs break-all text-chalk transition-colors group-hover:text-accent">
                        {value}
                      </span>
                    </span>
                  </>
                );

                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-start gap-4"
                  >
                    {body}
                  </a>
                ) : (
                  <div key={label} className="group flex items-start gap-4">
                    {body}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 border-t border-line pt-8">
              <p className="text-[10px] tracking-[0.3em] text-mist">ELSEWHERE</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-line-bright/60 px-4 py-3 text-[10px] tracking-[0.2em] text-mist transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-auto flex items-center gap-3 pt-10">
              <span className="h-1.5 w-1.5 animate-pulse-dot bg-accent" />
              <p className="text-[10px] tracking-[0.2em] text-mist">
                AVAILABLE FOR NEW PROJECTS
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            className="border border-line bg-panel p-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="text-[10px] tracking-[0.3em] text-accent">
              SEND A MESSAGE
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-8">
              <div className="grid gap-6 sm:grid-cols-2">
                {fields.map(({ name, label, type, placeholder }, i) => (
                  <div
                    key={name}
                    className={i === 2 ? "sm:col-span-2" : undefined}
                  >
                    <label
                      htmlFor={name}
                      className="mb-3 block text-[10px] tracking-[0.25em] text-mist"
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      id={name}
                      name={name}
                      value={formData[name]}
                      onChange={handleInputChange}
                      required
                      placeholder={placeholder}
                      className={inputClass}
                    />
                  </div>
                ))}

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-3 block text-[10px] tracking-[0.25em] text-mist"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell me about the role or the project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="mt-8 flex w-full items-center justify-center gap-3 bg-flame py-4 text-[11px] font-bold tracking-[0.2em] text-ink uppercase transition-colors hover:bg-chalk disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-flame"
              >
                {isLoading ? (
                  <>
                    <span className="h-4 w-4 animate-spin border-2 border-ink/30 border-t-ink" />
                    Sending
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            {/* Status */}
            {formStatus && (
              <div
                role="status"
                aria-live="polite"
                className={`mt-6 flex items-start gap-3 border p-4 ${
                  formStatus.type === "success"
                    ? "border-accent/50 bg-accent/5"
                    : "border-flame/50 bg-flame/5"
                }`}
              >
                {formStatus.type === "success" ? (
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                ) : (
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                )}
                <p className="text-xs leading-relaxed text-chalk">
                  {formStatus.message}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
