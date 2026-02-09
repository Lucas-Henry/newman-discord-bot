import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, CaretDown, Globe } from '@phosphor-icons/react';
import { DISCORD_INVITE_URL, LANGUAGES } from '../../config/constants';
import { cn } from '../../lib/utils';
import newmanLogo from '../../assets/nwm.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";


const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [langOpen, setLangOpen] = React.useState(false);

  const links = [
    { path: '/', label: t('nav.home') },
    { path: '/commands', label: t('nav.commands') },
    { path: '/features', label: t('nav.features') },
    { path: '/support', label: t('nav.support') },
  ];

  const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg from-accent to-accent-dark flex items-center justify-center overflow-hidden">
              <img src={newmanLogo} alt="Newman" className="w-full h-full object-cover" />
            </div>
            <span className="text-lg font-semibold text-white">Newman Bot</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'px-3.5 py-2 rounded-lg text-sm font-medium transition-colors',
                  location.pathname === link.path
                    ? 'text-white bg-white/10'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <Globe weight="bold" className="w-4 h-4" />
                <span className="hidden sm:inline text-xs">{currentLang.code.toUpperCase()}</span>
                <CaretDown weight="bold" className={cn('w-3 h-3 transition-transform', langOpen && 'rotate-180')} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute right-0 mt-1 w-36 bg-dark-700 rounded-lg border border-white/10 overflow-hidden shadow-xl"
                  >
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { i18n.changeLanguage(lang.code); setLangOpen(false); }}
                        className={cn(
                          'w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm transition-colors',
                          i18n.language === lang.code
                            ? 'bg-accent/20 text-accent-light'
                            : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                        )}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-dark text-white text-sm font-medium rounded-lg transition-colors"
            >
              <FontAwesomeIcon icon={faDiscord} className="w-4 h-4" />
              {t('nav.addToDiscord')}
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5"
            >
              {mobileOpen ? <X weight="bold" className="w-5 h-5" /> : <List weight="bold" className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-800 border-t border-white/5"
          >
            <div className="px-5 py-4 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'block px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors',
                    location.pathname === link.path
                      ? 'text-white bg-white/10'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={DISCORD_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-3.5 py-2.5 mt-3 bg-accent hover:bg-accent-dark text-white text-sm font-medium rounded-lg transition-colors"
              >
                {t('nav.addToDiscord')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
