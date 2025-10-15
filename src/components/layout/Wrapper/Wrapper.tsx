import type { FC, PropsWithChildren } from 'react';

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={'px-5 mx-auto min-w-[375px] max-w-[1250px] py-4 md:py-5'}>{children}</div>;
};

export default Wrapper;
