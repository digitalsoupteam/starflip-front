import { useWriteContract } from 'wagmi';
import { DeployedContracts } from '../contracts';

const Dice = () => {
  const { data: hash, writeContract } = useWriteContract();

  const roll = () => {
    writeContract({
      address: '0x0096c931F3733bEaAAcEBaCfc3cF8C5bb9eF0f8D',
      abi: DeployedContracts.games.Dice.abi,
      functionName: 'roll',
      args: [10n, 0n, '0x0000000000000000000000000000000000000000', 0n], // tagretNumber, comparisonType, token, betAmount
      value: 1n,
    });
  };

  const addGame = () => {
    writeContract({
      address: '0x0096c931F3733bEaAAcEBaCfc3cF8C5bb9eF0f8D',
      abi: DeployedContracts.games.GameManager.abi,
      functionName: 'addGame',
      args: [DeployedContracts.games.Dice.addresses],
    });
  };

  return (
    <div>
      <div>
        <button onClick={roll}>ROLL</button>
      </div>
      <div>
        <button onClick={addGame}>add dice game</button>
      </div>
    </div>
  );
};

export default Dice;
