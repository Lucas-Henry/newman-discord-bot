import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MagnifyingGlass, CaretDown, CaretUp, Clock } from '@phosphor-icons/react';
import { COMMANDS } from '../../config/constants';
import { cn } from '../../lib/utils';

const CommandCard = ({ command, expanded, onToggle, lang }) => {
  const { t } = useTranslation();

  const categoryColors = {
    chat: 'bg-sky-500/10 text-sky-400',
    search: 'bg-amber-500/10 text-amber-400',
    verification: 'bg-emerald-500/10 text-emerald-400',
    analysis: 'bg-violet-500/10 text-violet-400',
    utility: 'bg-zinc-500/10 text-zinc-400',
  };

  return (
    <div className="bg-dark-700 rounded-xl border border-white/5 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex items-center gap-3">
          <code className="px-2 py-1 bg-accent/10 text-accent-light rounded text-sm font-mono">
            !{command.name}
          </code>
          <span className="text-sm text-zinc-300">
            {command.description[lang] || command.description.en}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className={cn('px-2 py-0.5 rounded text-xs font-medium', categoryColors[command.category])}>
            {t(`commands.categories.${command.category}`)}
          </span>
          {expanded ? (
            <CaretUp weight="bold" className="w-4 h-4 text-zinc-500" />
          ) : (
            <CaretDown weight="bold" className="w-4 h-4 text-zinc-500" />
          )}
        </div>
      </button>

      {expanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-4 pb-4 pt-2 border-t border-white/5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs text-zinc-500 mb-1.5">{t('commands.usage')}</h4>
              <code className="block px-3 py-2 bg-dark-600 rounded-lg text-sm text-zinc-300 font-mono">
                {command.usage}
              </code>
            </div>
            <div>
              <h4 className="text-xs text-zinc-500 mb-1.5">{t('commands.aliases')}</h4>
              <div className="flex flex-wrap gap-1.5">
                {command.aliases.map((alias, i) => (
                  <code key={i} className="px-2 py-1 bg-dark-600 rounded text-xs text-zinc-400 font-mono">
                    !{alias}
                  </code>
                ))}
              </div>
            </div>
            <div className="sm:col-span-2">
              <h4 className="text-xs text-zinc-500 mb-1.5">{t('commands.examples')}</h4>
              <div className="space-y-1.5">
                {command.examples.map((ex, i) => (
                  <code key={i} className="block px-3 py-2 bg-dark-600 rounded-lg text-xs text-zinc-400 font-mono">
                    {ex}
                  </code>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const CommandsList = () => {
  const { t, i18n } = useTranslation();
  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState('all');
  const [expanded, setExpanded] = React.useState(null);

  const categories = ['all', 'chat', 'search', 'verification', 'analysis', 'utility'];

  const filtered = COMMANDS.filter((cmd) => {
    const matchSearch =
      cmd.name.toLowerCase().includes(search.toLowerCase()) ||
      cmd.aliases.some((a) => a.toLowerCase().includes(search.toLowerCase()));
    const matchCategory = category === 'all' || cmd.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="space-y-5">
      {/* Search */}
      <div className="relative">
        <MagnifyingGlass weight="bold" className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
        <input
          type="text"
          placeholder={t('commands.searchPlaceholder')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-dark-700 border border-white/5 rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-accent/50 transition-colors"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-1.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-medium transition-colors',
              category === cat
                ? 'bg-accent text-white'
                : 'bg-dark-700 text-zinc-400 hover:text-white hover:bg-dark-600'
            )}
          >
            {t(`commands.categories.${cat}`)}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="space-y-2">
        {filtered.map((cmd) => (
          <CommandCard
            key={cmd.name}
            command={cmd}
            lang={i18n.language}
            expanded={expanded === cmd.name}
            onToggle={() => setExpanded(expanded === cmd.name ? null : cmd.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default CommandsList;
