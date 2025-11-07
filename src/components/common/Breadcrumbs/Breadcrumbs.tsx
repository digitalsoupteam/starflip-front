import type { FC } from 'react';

interface BreadcrumbsProps {
  items: string[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  if (!items || !items.length) return null;

  return (
    <div className={'flex flex-wrap items-center gap-x-1 text-grey-lightest text-base py-10'}>
      <a className={'tr-d-all hover:text-emerald focus-visible:text-emerald'}>Home</a>
      {items.map((item, index) =>
        index === items.length - 1 ? (
          <span className={'capitalize text-emerald'} key={'breadcrumbs item' + item}>
            / {item}
          </span>
        ) : (
          <a
            className={'capitalize tr-d-all hover:text-emerald focus-visible:text-emerald'}
            key={'breadcrumbs item' + item}
          >
            / {item}
          </a>
        )
      )}
    </div>
  );
};

export default Breadcrumbs;
