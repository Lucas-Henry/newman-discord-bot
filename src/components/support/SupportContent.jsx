import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Coffee, ArrowSquareOut, GithubLogo, ChatCircle, CaretDown } from '@phosphor-icons/react';
import { BUY_ME_COFFEE_URL, GITHUB_URL, DISCORD_INVITE_URL } from '../../config/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons"; const SupportContent = () => {

  const { t } = useTranslation();
  const faqItems = t('support.faq.items', { returnObjects: true });

  return (
    <div className="space-y-8">
      {/* Cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Coffee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 bg-dark-700 rounded-xl border border-white/5"
        >
          <div className="flex items-center gap-2.5 mb-3">
            <div className="p-2 rounded-lg bg-amber-500/10">
              <Coffee weight="duotone" className="w-4 h-4 text-amber-400" />
            </div>
            <h3 className="text-base font-semibold text-white">{t('support.coffee.title')}</h3>
          </div>
          <p className="text-sm text-zinc-500 mb-4 leading-relaxed">{t('support.coffee.description')}</p>
          <a
            href={BUY_ME_COFFEE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-lg transition-colors"
          >
            {t('support.coffee.button')}
            <ArrowSquareOut weight="bold" className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Community */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-5 bg-dark-700 rounded-xl border border-white/5"
        >
          <div className="flex items-center gap-2.5 mb-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <ChatCircle weight="duotone" className="w-4 h-4 text-accent-light" />
            </div>
            <h3 className="text-base font-semibold text-white">{t('support.community.title')}</h3>
          </div>
          <p className="text-sm text-zinc-500 mb-4 leading-relaxed">{t('support.community.description')}</p>
          <div className="flex flex-wrap gap-2">
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-accent hover:bg-accent-dark text-white text-sm font-medium rounded-lg transition-colors"
            >
              {t('support.community.discord')}
              <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.3 px-4 py-2 bg-white/5 hover:bg-white/10 text-zinc-300 text-sm font-medium rounded-lg border border-white/10 transition-colors"
            >
              <GithubLogo weight="bold" className="w-4 h-4" />
              {t('support.community.github')}
            </a>
          </div>
        </motion.div>
      </div>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold text-white mb-4">{t('support.faq.title')}</h3>
        <Accordion type="single" collapsible className="space-y-2">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-dark-700 rounded-xl border border-white/5 overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3.5 text-left text-sm hover:no-underline hover:bg-white/[0.02] data-[state=open]:bg-white/[0.02]">
                <span className="text-zinc-200 font-medium">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-sm text-zinc-500 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
};

export default SupportContent;
