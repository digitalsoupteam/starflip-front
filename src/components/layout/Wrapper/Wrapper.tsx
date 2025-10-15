import type { FC, PropsWithChildren } from 'react';

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={'mx-auto min-w-[375px] max-w-[1250px] px-4 md:px-5'}>{children}</div>;
};

export default Wrapper;
