'use client';

import { useState } from 'react';
import Lanyard from '../reactbits/Lanyard';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'; // Import ikon

// KOMPONEN REUSABLE untuk Input Form
// Ini membuat form utama lebih bersih dan mudah dibaca.
const FormField = ({ id, label, type = 'text', name, value, onChange, placeholder, required, disabled, rows }) => {
  const inputClasses = "w-full px-4 py-3 text-sm bg-slate-50 rounded-lg border border-gray-300 focus:ring-1 focus:ring-black focus:border-black transition-shadow duration-200";
  
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-800 mb-1.5">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          rows={rows || 5}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={inputClasses}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={inputClasses}
        />
      )}
    </div>
  );
};

// KOMPONEN UTAMA
export default function Kontak() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    message: '',
    type: 'neutral', // 'neutral', 'success', 'error'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, message: 'Mengirim...', type: 'neutral' });

    try {
      const response = await fetch('https://formspree.io/f/mnnznnaz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({ isSubmitting: false, message: 'Pesan berhasil terkirim!', type: 'success' });
        setFormData({ email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => null);
        const errorMessage = errorData?.errors?.[0]?.message || 'Gagal mengirim pesan.';
        setFormStatus({ isSubmitting: false, message: errorMessage, type: 'error' });
      }
    } catch (err) {
      setFormStatus({ isSubmitting: false, message: 'Terjadi kesalahan jaringan.', type: 'error' });
    }
  };

  // Objek untuk styling pesan status berdasarkan tipenya
  const statusStyles = {
    success: 'text-green-600',
    error: 'text-red-600',
    neutral: 'text-gray-600',
  };

  return (
    <section id="kontak" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Lanyard dalam 'Card' */}
          <div className="-mt-55 w-auto flex justify-center items-center">
             <div className="w-full max-w-sm">
                <Lanyard />
             </div>
          </div>

          {/* Formulir dalam 'Card' */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Hubungi Saya</h2>
            <p className="mt-3 text-gray-600">
              Punya pertanyaan atau proyek? Jangan ragu untuk mengirim pesan.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6 text-black">
              <FormField
                id="email"
                label="Email"
                type="email"
                name="email"
                placeholder="emailanda@example.com"
                value={formData.email}
                onChange={handleChange}
                disabled={formStatus.isSubmitting}
                required
              />
              <FormField
                id="subject"
                label="Subjek"
                name="subject"
                placeholder="Topik yang ingin dibahas"
                value={formData.subject}
                onChange={handleChange}
                disabled={formStatus.isSubmitting}
                required
              />
              <FormField
                id="message"
                label="Pesan"
                type="textarea"
                name="message"
                placeholder="Tulis pesan Anda di sini..."
                value={formData.message}
                onChange={handleChange}
                disabled={formStatus.isSubmitting}
                required
              />

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-black text-white px-8 py-3 text-sm font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
                {formStatus.message && (
                  <div className={`flex items-center gap-2 text-sm ${statusStyles[formStatus.type]}`}>
                    {formStatus.type === 'success' && <FaCheckCircle />}
                    {formStatus.type === 'error' && <FaExclamationCircle />}
                    <span>{formStatus.message}</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}