import { Fragment } from 'react';
import type { Segment } from '@/src/i18n/translations';

export default function RichText({ segments }: { segments: Segment[] }) {
  return (
    <>
      {segments.map((segment, index) =>
        typeof segment === 'string' ? (
          <Fragment key={index}>{segment}</Fragment>
        ) : (
          <strong key={index}>{segment.bold}</strong>
        ),
      )}
    </>
  );
}
