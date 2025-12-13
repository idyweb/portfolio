"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an email service
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="space-y-12 max-w-2xl">
      {/* Header */}
      <div className="space-y-4">
        <p className="text-[var(--primary)] font-semibold text-lg">Get In Touch</p>
        <h1 className="section-title">Contact Me</h1>
        <p className="text-xl text-[var(--text-secondary)]">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you.
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-2 gap-8 my-12">
        <div className="card">
          <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">Email</h3>
          <a
            href="mailto:inyangidongesit22@gmail.com"
            className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
          >
            inyangidongesit22@gmail.com
          </a>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">Location</h3>
          <p className="text-[var(--text-secondary)]">Nigeria (Remote)</p>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">GitHub</h3>
          <a
            href="https://github.com/idyweb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
          >
            @idyweb
          </a>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/idongesit/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
          >
            Connect with me
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="border-t border-[var(--border-color)] pt-12">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">Send me a message</h2>

        {submitted ? (
          <div className="bg-[var(--primary)]/10 border border-[var(--primary)] rounded-lg p-6 text-center">
            <p className="text-[var(--primary)] font-semibold">
              Thanks for reaching out! I'll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[var(--text-primary)] font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg focus:border-[var(--primary)] focus:outline-none text-[var(--text-primary)] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-[var(--text-primary)] font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg focus:border-[var(--primary)] focus:outline-none text-[var(--text-primary)] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-[var(--text-primary)] font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg focus:border-[var(--primary)] focus:outline-none text-[var(--text-primary)] transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-[var(--text-primary)] font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg focus:border-[var(--primary)] focus:outline-none text-[var(--text-primary)] transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button type="submit" className="btn-primary w-full md:w-auto">
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* Additional Links */}
      <div className="border-t border-[var(--border-color)] pt-12 flex gap-6">
        <Link href="/projects" className="btn-tertiary">
          Back to Projects
        </Link>
        <a
          href="https://github.com/idyweb"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-tertiary"
        >
          Visit GitHub
        </a>
      </div>
    </section>
  );
}

