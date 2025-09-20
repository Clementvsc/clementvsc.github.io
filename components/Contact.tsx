import React, { useState } from 'react';
import { Mail, Send, Linkedin } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:your-email@example.com';
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/your-profile', '_blank');
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </div>

        <div className="contact-content">
          {/* Glass Morphism Form */}
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  className="form-textarea"
                  rows={6}
                  required
                />
              </div>

              <button type="submit" className="form-submit">
                <Send className="submit-icon" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Buttons */}
          <div className="contact-buttons">
            <button onClick={handleEmailClick} className="contact-btn email-btn">
              <Mail className="btn-icon" />
              <span className="btn-text">
                <span className="btn-label">Email</span>
                <span className="btn-value">your-email@example.com</span>
              </span>
            </button>

            <button onClick={handleLinkedInClick} className="contact-btn linkedin-btn">
              <Linkedin className="btn-icon" />
              <span className="btn-text">
                <span className="btn-label">LinkedIn</span>
                <span className="btn-value">Connect with me</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          min-height: 100vh;
          padding: 5rem 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
        }

        .contact-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 70%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 70% 30%, rgba(255, 118, 117, 0.3) 0%, transparent 50%);
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .contact-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .contact-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        /* Glass Morphism Form */
        .contact-form-wrapper {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 2.5rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          position: relative;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 1rem 1.25rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.5);
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
        }

        .form-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
        }

        .submit-icon {
          width: 20px;
          height: 20px;
        }

        /* Contact Buttons */
        .contact-buttons {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-btn {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .contact-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.25);
        }

        .btn-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }

        .email-btn .btn-icon {
          color: #ff6b6b;
        }

        .linkedin-btn .btn-icon {
          color: #0077b5;
        }

        .btn-text {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .btn-label {
          font-size: 0.875rem;
          font-weight: 600;
          opacity: 0.9;
        }

        .btn-value {
          font-size: 1rem;
          font-weight: 400;
          opacity: 0.8;
        }

        @media (max-width: 480px) {
          .contact-title {
            font-size: 2.5rem;
          }
          
          .contact-form-wrapper {
            padding: 1.5rem;
          }
          
          .contact-btn {
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
