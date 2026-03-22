"use client";

import { motion } from "framer-motion";
import {
  Package,
  Truck,
  Headphones,
  RefreshCw,
  Building,
  GraduationCap,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { CONTACT, getWhatsAppUrl } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";

export default function ServiciosPage() {
  const { t } = useLanguage();

  const services = [
    { icon: Package, title: t.services.distribution, desc: t.services.distributionDesc },
    { icon: Truck, title: t.services.shipping, desc: t.services.shippingDesc },
    { icon: Headphones, title: t.services.advisory, desc: t.services.advisoryDesc },
    { icon: RefreshCw, title: t.services.postSale, desc: t.services.postSaleDesc },
    { icon: Building, title: t.services.equipping, desc: t.services.equippingDesc },
    { icon: GraduationCap, title: t.services.training, desc: t.services.trainingDesc },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-blue-lighter py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.services.title} />
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-lighter">
                  <service.icon
                    size={24}
                    className="text-blue-DEFAULT"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-blue-DEFAULT py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              {t.services.cta}
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-green-whatsapp px-6 py-3 text-sm font-semibold text-white transition-colors hover:brightness-110"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href={`tel:${CONTACT.phones[0].number.replace(/\s|-/g, "")}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                <Phone size={18} />
                {CONTACT.phones[0].number}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
