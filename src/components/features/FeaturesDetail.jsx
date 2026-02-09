import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, ImageSquare, MagnifyingGlass, ChatCircle, Check } from '@phosphor-icons/react';

const FeaturesDetail = () => {
  const { t } = useTranslation();

  const items = t('features.items', { returnObjects: true });
  const icons = [ShieldCheck, ImageSquare, MagnifyingGlass, ChatCircle];
  const colors = [
    { icon: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { icon: 'text-violet-400', bg: 'bg-violet-500/10' },
    { icon: 'text-amber-400', bg: 'bg-amber-500/10' },
    { icon: 'text-sky-400', bg: 'bg-sky-500/10' },
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((item, i) => {
        const Icon = icons[i];
        const color = colors[i];
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-5 bg-dark-700 rounded-xl border border-white/5"
          >
            <div className={`inline-flex p-2.5 rounded-lg ${color.bg} mb-3`}>
              <Icon weight="duotone" className={`w-5 h-5 ${color.icon}`} />
            </div>
            <h3 className="text-base font-semibold text-white mb-1.5">{item.title}</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FeaturesDetail;
