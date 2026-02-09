import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench } from '@phosphor-icons/react';
import { DISCORD_INVITE_URL } from '../../config/constants';
import newmanAvatar from '../../assets/nwm.png';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/10 rounded-full blur-[120px] opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
                <Wrench weight="fill" className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-400 text-xs font-semibold tracking-wide uppercase">{t('hero.badge')}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                {t('hero.title')}
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed mb-10 font-medium">
                {t('hero.subtitle')}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href={DISCORD_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-dark text-white text-base font-semibold rounded-lg transition-all shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:scale-105"
                >
                  {t('hero.cta.primary')}
                  <ArrowRight weight="bold" className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  to="/features"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-zinc-300 hover:text-white text-base font-semibold rounded-lg border-2 border-white/10 hover:border-white/30 hover:bg-white/5 transition-all"
                >
                  {t('hero.cta.secondary')}
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Demo Card - Discord Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl" style={{ background: '#313338' }}>
              {/* User Message */}
              <div className="px-4 py-3 hover:bg-[#2e3035] transition-colors">
                <div className="flex gap-3">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=User"
                    alt="User"
                    className="w-10 h-10 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="font-medium text-white text-sm">ÉLI</span>
                      <span className="text-[11px] text-[#949ba4]">21:01</span>
                    </div>
                    <p className="text-[15px] text-[#dbdee1] leading-[1.375rem]">
                      !chat as vacinas causam câncer? Quero fontes
                    </p>
                  </div>
                </div>
              </div>

              {/* Bot Response */}
              <div className="px-4 py-3 hover:bg-[#2e3035] transition-colors">
                <div className="flex gap-3">
                  <img
                    src={newmanAvatar}
                    alt="Newman Bot"
                    className="w-10 h-10 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-white text-sm">newman-bot</span>
                      <span className="px-1 py-0.5 bg-[#5865f2] text-white text-[10px] font-semibold rounded">APP</span>
                      <span className="text-[11px] text-[#949ba4]">21:01</span>
                    </div>

                    {/* Reply reference */}
                    <div className="flex items-start gap-2 mb-2 pl-3 border-l-2 border-[#949ba4]">
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=User"
                        alt=""
                        className="w-4 h-4 rounded-full mt-0.5"
                      />
                      <span className="text-[13px] text-[#b5bac1]">
                        <span className="font-medium text-[#dbdee1]">ÉLI</span> !chat as vacinas causam câncer? Quero fontes
                      </span>
                    </div>

                    <div className="text-[15px] text-[#dbdee1] leading-[1.375rem] space-y-3">
                      <p>
                        Não, as vacinas não causam câncer. Esse mito veio de um estudo fraudulento de 1998 que foi retratado. Décadas de pesquisa posterior (incluindo estudos com milhões de crianças) não encontraram nenhuma relação entre as vacinas e o câncer.
                      </p>

                      <p className="text-[#dbdee1]">
                        Aqui estão algumas fontes que confirmam isso:
                      </p>

                      <ul className="space-y-1 pl-5 list-disc marker:text-[#dbdee1]">
                        <li>Vacinas contra o câncer prometem revolucionar tratamento e ampliar acesso, diz pesquisador da USP <span className="text-[#949ba4]">[1]</span>.</li>
                        <li>Vacinas contra o câncer tornam tratamentos mais precisos e eficazes <span className="text-[#949ba4]">[2]</span>.</li>
                        <li>Vacinas contra câncer: veja quais estão sendo testadas e o que esperar... <span className="text-[#949ba4]">[3]</span>.</li>
                        <li>Vacinas contra o câncer: avanços na oncologia – MIT Technology Review <span className="text-[#949ba4]">[4]</span>.</li>
                      </ul>

                      <p className="text-[#dbdee1]">
                        Essas fontes mostram que as vacinas contra o câncer são uma área de pesquisa importante e que elas têm o potencial de revolucionar o tratamento do câncer.
                      </p>

                      <div className="space-y-1 text-[13px]">
                        <div className="text-[#00a8fc] hover:underline cursor-pointer">
                          [1] https://cbn.globo.com/programas/show-da-noticia/entrevista/2025/08/02/vacinas-contra...
                        </div>
                        <div className="text-[#00a8fc] hover:underline cursor-pointer">
                          [2] https://www.oncoguia.org.br/conteudo/vacinas-contra-o-cancer-tornam-tratamentos...
                        </div>
                        <div className="text-[#00a8fc] hover:underline cursor-pointer">
                          [3] https://www.cnnbrasil.com.br/saude/vacinas-contra-cancer-veja-quais-estao-sendo...
                        </div>
                        <div className="text-[#00a8fc] hover:underline cursor-pointer">
                          [4] https://mittechreview.com.br/vacinas-contra-o-cancer-oncologia/
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
