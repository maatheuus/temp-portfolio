'use client';

import { CheckCircleIcon, InfoIcon, WrenchIcon } from '@phosphor-icons/react';
import { useLanguage } from '@/src/i18n/LanguageContext';

const badgeConfig = {
  'in-progress': {
    icon: <WrenchIcon size={12} />,
    className: 'bg-blue-900/50 text-blue-300',
  },
  outdated: {
    icon: <InfoIcon size={12} />,
    className: 'bg-amber-900/50 text-amber-300',
  },
  completed: {
    icon: <CheckCircleIcon size={12} />,
    className: 'bg-green-900/50 text-green-300',
  },
};

export type ProjectStatus = keyof typeof badgeConfig;

export const ProjectBadge = ({ status }: { status: ProjectStatus }) => {
  const { t } = useLanguage();
  const badge = badgeConfig[status];
  if (!badge) return null;

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${badge.className}`}
    >
      {badge.icon}
      <span>{t.projectBadge[status]}</span>
    </div>
  );
};
