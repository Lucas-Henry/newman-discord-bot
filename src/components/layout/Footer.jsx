import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { GithubLogo, LinkedinLogo, Coffee, Wrench } from '@phosphor-icons/react';
import { GITHUB_URL, LINKEDIN_URL, BUY_ME_COFFEE_URL } from '../../config/constants';
import newmanLogo from '../../assets/nwm.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark-800 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg from-accent to-accent-dark flex items-center justify-center overflow-hidden">
                <img src={newmanLogo} alt="Newman" className="w-full h-full object-cover" />
              </div>
              <span className="text-base font-semibold text-white">Newman</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-4">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-2">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
                <GithubLogo weight="bold" className="w-4 h-4" />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
                <LinkedinLogo weight="bold" className="w-4 h-4" />
              </a>
              <a href={BUY_ME_COFFEE_URL} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
                <Coffee weight="bold" className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-3">{t('footer.links.product')}</h4>
            <ul className="space-y-2">
              <li><Link to="/commands" className="text-zinc-500 hover:text-white text-sm transition-colors">{t('footer.links.commands')}</Link></li>
              <li><Link to="/features" className="text-zinc-500 hover:text-white text-sm transition-colors">{t('footer.links.features')}</Link></li>
              <li><Link to="/support" className="text-zinc-500 hover:text-white text-sm transition-colors">{t('footer.links.support')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-3">{t('footer.links.resources')}</h4>
            <ul className="space-y-2">
              <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white text-sm transition-colors">{t('footer.links.github')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-3">{t('footer.links.legal')}</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-zinc-500 hover:text-white text-sm transition-colors">{t('footer.links.privacy')}</Link></li>
              <li><Link to="/terms" className="text-zinc-500 hover:text-white text-sm transition-colors">{t('footer.links.terms')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 rounded-full">
            <Wrench weight="fill" className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-amber-400 text-xs font-medium">{t('footer.status')}</span>
          </div>
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Newman Bot · {t('footer.madeBy')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
