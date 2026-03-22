"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { CONTACT, getWhatsAppUrl } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import GoogleMap from "@/components/GoogleMap";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-semibold text-gray-900">{question}</span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-gray-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <p className="pb-4 text-sm text-gray-500">{answer}</p>
      )}
    </div>
  );
}

export default function ContactoPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "quote",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const typeLabel =
      t.contact.form.typeOptions[form.type as keyof typeof t.contact.form.typeOptions] ||
      form.type;
    const msg = `Nombre: ${form.name}\nEmail: ${form.email}\nTelefono: ${form.phone}\nTipo: ${typeLabel}\n\nMensaje:\n${form.message}`;
    const url = `https://wa.me/584241874488?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Header */}
      <section className="bg-blue-lighter py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} />
        </div>
      </section>

      {/* Contact cards */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-gray-200 bg-white p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-whatsapp/10">
                <MessageCircle size={24} className="text-green-whatsapp" />
              </div>
              <h3 className="mb-3 text-base font-bold text-gray-900">
                {t.contact.whatsappTitle}
              </h3>
              <a
                href={CONTACT.whatsappLink1}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-blue-DEFAULT hover:underline"
              >
                {CONTACT.phones[0].number}
              </a>
              <a
                href={CONTACT.whatsappLink2}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-blue-DEFAULT hover:underline"
              >
                {CONTACT.phones[1].number}
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl border border-gray-200 bg-white p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-lighter">
                <Phone size={24} className="text-blue-DEFAULT" />
              </div>
              <h3 className="mb-3 text-base font-bold text-gray-900">
                {t.contact.phoneTitle}
              </h3>
              {CONTACT.phones.map((phone) => (
                <a
                  key={phone.number}
                  href={`tel:${phone.number.replace(/\s|-/g, "")}`}
                  className="block text-sm text-blue-DEFAULT hover:underline"
                >
                  {phone.number}
                </a>
              ))}
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl border border-gray-200 bg-white p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-lighter">
                <Mail size={24} className="text-blue-DEFAULT" />
              </div>
              <h3 className="mb-3 text-base font-bold text-gray-900">
                {t.contact.emailTitle}
              </h3>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-sm text-blue-DEFAULT hover:underline"
              >
                {CONTACT.email}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Address + Map */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-lg font-bold text-gray-900">
                {t.contact.addressTitle}
              </h3>
              <div className="mb-4 flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-0.5 flex-shrink-0 text-blue-DEFAULT"
                />
                <p className="text-sm text-gray-600">{CONTACT.address.full}</p>
              </div>
              <div className="mb-4 flex items-start gap-3">
                <Clock
                  size={20}
                  className="mt-0.5 flex-shrink-0 text-blue-DEFAULT"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {t.contact.hours}
                  </p>
                  <p className="text-sm text-gray-500">
                    {t.contact.hoursDetail}
                  </p>
                </div>
              </div>
              <a
                href={CONTACT.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-DEFAULT px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-dark"
              >
                <MapPin size={16} />
                {t.contact.directions}
              </a>
            </div>
            <GoogleMap />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-gray-200 bg-white p-6 md:p-8"
          >
            <div className="mb-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-700 transition-colors focus:border-blue-DEFAULT focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-700 transition-colors focus:border-blue-DEFAULT focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  {t.contact.form.phone}
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-700 transition-colors focus:border-blue-DEFAULT focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  {t.contact.form.type}
                </label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-700 transition-colors focus:border-blue-DEFAULT focus:outline-none"
                >
                  <option value="quote">
                    {t.contact.form.typeOptions.quote}
                  </option>
                  <option value="availability">
                    {t.contact.form.typeOptions.availability}
                  </option>
                  <option value="info">
                    {t.contact.form.typeOptions.info}
                  </option>
                  <option value="other">
                    {t.contact.form.typeOptions.other}
                  </option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                {t.contact.form.message}
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-700 transition-colors focus:border-blue-DEFAULT focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-DEFAULT px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
            >
              <MessageCircle size={18} />
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.contact.faq.title} />
          <div className="rounded-xl border border-gray-200 bg-white px-6">
            <FAQItem question={t.contact.faq.q1} answer={t.contact.faq.a1} />
            <FAQItem question={t.contact.faq.q2} answer={t.contact.faq.a2} />
            <FAQItem question={t.contact.faq.q3} answer={t.contact.faq.a3} />
            <FAQItem question={t.contact.faq.q4} answer={t.contact.faq.a4} />
            <FAQItem question={t.contact.faq.q5} answer={t.contact.faq.a5} />
          </div>
        </div>
      </section>
    </>
  );
}
