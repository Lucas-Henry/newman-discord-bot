import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SupportContent from '../components/support/SupportContent';

const SupportPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1.5">
            {t('support.title')}
          </h1>
          <p className="text-zinc-500">{t('support.subtitle')}</p>
        </motion.div>
        <SupportContent />
      </div>
    </div>
  );
};

export default SupportPage;
