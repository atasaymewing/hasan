import React, { FormEvent, useState, useRef } from 'react';
import { Send, CheckCircle2, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'service_vq2ulno',
        'template_nd915ty',
        form.current,
        'wmUr3BcyTTjENEH3g'
      );

      if (result.status === 200) {
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-green-400" />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Mesajınız Gönderildi!
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    En kısa sürede size dönüş yapacağız.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none"
              >
                Kapat
              </button>
            </div>
          </div>
        ), {
          duration: 4000,
          position: 'top-right',
        });
        form.current.reset();
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <XCircle className="h-6 w-6 text-red-400" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Hata Oluştu
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Mesajınız gönderilemedi. Lütfen tekrar deneyin.
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none"
            >
              Kapat
            </button>
          </div>
        </div>
      ), {
        duration: 4000,
        position: 'top-right',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">İletişime Geçin</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>
        <div className="max-w-2xl mx-auto">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="from_name"
                placeholder="Adınız Soyadınız"
                required
                className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-800 rounded-lg focus:border-red-600 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                name="reply_to"
                placeholder="E-posta Adresiniz"
                required
                className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-800 rounded-lg focus:border-red-600 focus:outline-none"
              />
            </div>
            <div>
              <textarea
                name="message"
                rows={5}
                placeholder="Mesajınız"
                required
                className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-800 rounded-lg focus:border-red-600 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2 ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;