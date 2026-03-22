"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Target, Users, TrendingUp, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import SectionHeading from "@/components/SectionHeading";

function AnimatedCounter({
  end,
  suffix,
  prefix,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-3xl font-extrabold text-blue-DEFAULT md:text-4xl">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function NosotrosPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t.about.quality,
      desc: t.about.qualityDesc,
    },
    {
      icon: Users,
      title: t.about.personalized,
      desc: t.about.personalizedDesc,
    },
    {
      icon: TrendingUp,
      title: t.about.competitive,
      desc: t.about.competitiveDesc,
    },
    {
      icon: MapPin,
      title: t.about.national,
      desc: t.about.nationalDesc,
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-blue-lighter py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.about.title} />
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              {t.about.missionTitle}
            </h2>
            <p className="text-lg text-gray-500">{t.about.mission}</p>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              {t.about.aboutTitle}
            </h2>
            <p className="text-lg text-gray-500">{t.about.aboutText}</p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.about.values} />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-lighter">
                  <item.icon
                    size={24}
                    className="text-blue-DEFAULT"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-lighter py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <AnimatedCounter end={500} suffix="+" />
              <p className="mt-2 text-sm font-medium text-gray-600">
                {t.about.stats.products}
              </p>
            </div>
            <div>
              <AnimatedCounter end={1000} suffix="+" />
              <p className="mt-2 text-sm font-medium text-gray-600">
                {t.about.stats.clients}
              </p>
            </div>
            <div>
              <AnimatedCounter end={24} suffix="h" />
              <p className="mt-2 text-sm font-medium text-gray-600">
                {t.about.stats.response}
              </p>
            </div>
            <div>
              <AnimatedCounter end={10} suffix="+" />
              <p className="mt-2 text-sm font-medium text-gray-600">
                {t.about.stats.experience}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
