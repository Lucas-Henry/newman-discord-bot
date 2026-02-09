import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Server, MessageSquare, ShieldCheck, Image } from 'lucide-react';

const Stats = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Server,
      value: '50+',
      label: t('stats.servers'),
      color: 'text-discord-blurple',
    },
    {
      icon: MessageSquare,
      value: '10K+',
      label: t('stats.messages'),
      color: 'text-emerald-500',
    },
    {
      icon: ShieldCheck,
      value: '5K+',
      label: t('stats.facts'),
      color: 'text-amber-500',
    },
    {
      icon: Image,
      value: '2K+',
      label: t('stats.images'),
      color: 'text-violet-500',
    },
  ];

  return (
    <section className="py-24 bg-discord-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-discord-text-normal">
            {t('stats.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-discord-bg-primary rounded-2xl border border-white/5"
              >
                <div className="inline-flex p-3 rounded-xl bg-white/5 mb-4">
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-discord-text-muted text-sm">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
