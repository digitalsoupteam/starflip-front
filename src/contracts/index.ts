import MultisigWallet from './access/MultisigWallet.ts';
import GameManager from './games/GameManager.ts';
import Dice from './games/Dice.ts';

export const DeployedContracts = {
  access: {
    MultisigWallet,
  },
  games: { GameManager, Dice },
};
