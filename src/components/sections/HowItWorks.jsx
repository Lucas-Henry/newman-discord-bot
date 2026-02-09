import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Plus, Terminal, Zap } from 'lucide-react';

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Plus,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      color: 'text-discord-blurple',
      bg: 'bg-discord-blurple/10',
    },
    {
      icon: Terminal,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
    },
    {
      icon: Zap,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
    },
  ];

  return (
    <section className="py-20 bg-discord-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-discord-text-normal mb-3">
            {t('howItWorks.title')}
          </h2>
          <p className="text-discord-text-muted">
            {t('howItWorks.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-discord-text-faint">0{index + 1}</span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>

                <div className={`inline-flex p-2.5 rounded-lg ${step.bg} mb-4`}>
                  <Icon className={`w-5 h-5 ${step.color}`} />
                </div>
                
                <h3 className="text-lg font-semibold text-discord-text-normal mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-discord-text-muted leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
