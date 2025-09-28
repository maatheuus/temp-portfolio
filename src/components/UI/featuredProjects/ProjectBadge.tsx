import { InfoIcon, WrenchIcon } from '@phosphor-icons/react';

const badgeConfig = {
  'in-progress': {
    text: 'In Progress',
    icon: <WrenchIcon size={12} />,
    className:
      'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
  },
  outdated: {
    text: 'Outdated',
    icon: <InfoIcon size={12} />,
    className:
      'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300',
  },
};

export type ProjectStatus = keyof typeof badgeConfig;

export const ProjectBadge = ({ status }: { status: ProjectStatus }) => {
  const badge = badgeConfig[status];
  if (!badge) return null;

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${badge.className}`}
    >
      {badge.icon}
      <span>{badge.text}</span>
    </div>
  );
};
