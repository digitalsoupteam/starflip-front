import ETHIcon from '../../../assets/icons/eth.svg?react';

const TokenSelector = () => {
  return (
    <div>
      <button className={'flex items-center gap-2.5 text-white text-base'}>
        <ETHIcon size={20} />
        ETH
      </button>
    </div>
  );
};

export default TokenSelector;
