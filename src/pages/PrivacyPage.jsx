import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const PrivacyPage = () => {
  const { t } = useTranslation();
  const sections = t('privacy.content.sections', { returnObjects: true });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-5">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/" className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft weight="bold" className="w-4 h-4" />
            Voltar
          </Link>

          <h1 className="text-2xl font-bold text-white mb-2">{t('privacy.title')}</h1>
          <p className="text-zinc-600 text-sm mb-8">{t('privacy.lastUpdated')}: Agosto 2025</p>

          <p className="text-zinc-400 leading-relaxed mb-8">{t('privacy.content.intro')}</p>

          <div className="space-y-6">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-base font-semibold text-white mb-2">{section.title}</h2>
                <p className="text-zinc-500 text-sm leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;
