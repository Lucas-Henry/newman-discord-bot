import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { DISCORD_INVITE_URL } from '../../config/constants';

const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-accent/20 to-violet-500/20 p-8 sm:p-10 border border-white/5"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {t('hero.title')}
            </h2>
            <p className="text-zinc-400 mb-6">
              {t('hero.subtitle')}
            </p>
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white text-dark-900 text-sm font-medium rounded-lg hover:bg-zinc-100 transition-colors"
            >
              {t('hero.cta.primary')}
              <ArrowRight weight="bold" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
