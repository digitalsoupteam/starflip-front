import type { Address } from 'viem';

export default {
  addresses: {
    hardhat: '',
    baseSepolia: '0xb2D0878EaC3C735f25B3d8e16784bBe523C00265' as Address,
    base: '',
  },
  abi: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_vrfCoordinator',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
      ],
      name: 'AddressEmptyCode',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'implementation',
          type: 'address',
        },
      ],
      name: 'ERC1967InvalidImplementation',
      type: 'error',
    },
    {
      inputs: [],
      name: 'ERC1967NonPayable',
      type: 'error',
    },
    {
      inputs: [],
      name: 'FailedCall',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'balance',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'needed',
          type: 'uint256',
        },
      ],
      name: 'InsufficientBalance',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InsufficientContractBalance',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidBetAmount',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidHouseEdge',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidInitialization',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidMaxBetValue',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidMinBetAmount',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidMinBetValue',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidRollRange',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidTargetNumber',
      type: 'error',
    },
    {
      inputs: [],
      name: 'MinGreaterThanMax',
      type: 'error',
    },
    {
      inputs: [],
      name: 'NotInitializing',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'have',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'want',
          type: 'address',
        },
      ],
      name: 'OnlyCoordinatorCanFulfill',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'have',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'coordinator',
          type: 'address',
        },
      ],
      name: 'OnlyOwnerOrCoordinator',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RollInProgress',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
      ],
      name: 'SafeERC20FailedOperation',
      type: 'error',
    },
    {
      inputs: [],
      name: 'UUPSUnauthorizedCallContext',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'slot',
          type: 'bytes32',
        },
      ],
      name: 'UUPSUnsupportedProxiableUUID',
      type: 'error',
    },
    {
      inputs: [],
      name: 'ZeroAddress',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'player',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'targetNumber',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'enum Dice.ComparisonType',
          name: 'comparisonType',
          type: 'uint8',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'result',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'won',
          type: 'bool',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'payout',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
      ],
      name: 'BetSettled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'vrfCoordinator',
          type: 'address',
        },
      ],
      name: 'CoordinatorSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'requestId',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'roller',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'result',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'won',
          type: 'bool',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'payout',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
      ],
      name: 'DiceRollFulfilled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'requestId',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'roller',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'betAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'targetNumber',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'enum Dice.ComparisonType',
          name: 'comparisonType',
          type: 'uint8',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
      ],
      name: 'DiceRollRequested',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint64',
          name: 'version',
          type: 'uint64',
        },
      ],
      name: 'Initialized',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferRequested',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'subscriptionId',
          type: 'uint256',
        },
      ],
      name: 'SubscriptionIdSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'implementation',
          type: 'address',
        },
      ],
      name: 'Upgraded',
      type: 'event',
    },
    {
      stateMutability: 'payable',
      type: 'fallback',
    },
    {
      inputs: [],
      name: 'UPGRADE_INTERFACE_VERSION',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'acceptOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'betAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'targetNumber',
          type: 'uint256',
        },
        {
          internalType: 'enum Dice.ComparisonType',
          name: 'comparisonType',
          type: 'uint8',
        },
      ],
      name: 'calculatePayout',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getContractBalance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getCurrentBet',
      outputs: [
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'targetNumber',
          type: 'uint256',
        },
        {
          internalType: 'enum Dice.ComparisonType',
          name: 'comparisonType',
          type: 'uint8',
        },
        {
          internalType: 'bool',
          name: 'settled',
          type: 'bool',
        },
        {
          internalType: 'bool',
          name: 'won',
          type: 'bool',
        },
        {
          internalType: 'uint256',
          name: 'payout',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getLatestRollResult',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'houseEdge',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_vrfCoordinator',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_subscriptionId',
          type: 'uint256',
        },
        {
          internalType: 'bytes32',
          name: '_keyHash',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: '_addressBook',
          type: 'address',
        },
        {
          internalType: 'uint8',
          name: '_minBetValue',
          type: 'uint8',
        },
        {
          internalType: 'uint8',
          name: '_maxBetValue',
          type: 'uint8',
        },
        {
          internalType: 'uint256',
          name: '_minBetAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_maxBetAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint8',
          name: '_houseEdge',
          type: 'uint8',
        },
      ],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isRollInProgress',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'maxBetAmount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'maxBetValue',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'minBetAmount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'minBetValue',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'proxiableUUID',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'requestId',
          type: 'uint256',
        },
        {
          internalType: 'uint256[]',
          name: 'randomWords',
          type: 'uint256[]',
        },
      ],
      name: 'rawFulfillRandomWords',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'targetNumber',
          type: 'uint256',
        },
        {
          internalType: 'enum Dice.ComparisonType',
          name: 'comparisonType',
          type: 'uint8',
        },
        {
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'betAmount',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'referrer',
          type: 'address',
        },
      ],
      name: 'roll',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [],
      name: 's_vrfCoordinator',
      outputs: [
        {
          internalType: 'contract IVRFCoordinatorV2Plus',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint32',
          name: 'newGasLimit',
          type: 'uint32',
        },
      ],
      name: 'setCallbackGasLimit',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_vrfCoordinator',
          type: 'address',
        },
      ],
      name: 'setCoordinator',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint8',
          name: 'newHouseEdge',
          type: 'uint8',
        },
      ],
      name: 'setHouseEdge',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'newMaxBetAmount',
          type: 'uint256',
        },
      ],
      name: 'setMaxBetAmount',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint8',
          name: 'newMaxBetValue',
          type: 'uint8',
        },
      ],
      name: 'setMaxBetValue',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'newMinBetAmount',
          type: 'uint256',
        },
      ],
      name: 'setMinBetAmount',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint8',
          name: 'newMinBetValue',
          type: 'uint8',
        },
      ],
      name: 'setMinBetValue',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newCoordinator',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'newSubscriptionId',
          type: 'uint256',
        },
      ],
      name: 'updateVRFSettings',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: 'upgradeToAndCall',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_token',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_amount',
          type: 'uint256',
        },
      ],
      name: 'withdrawToTreasury',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      stateMutability: 'payable',
      type: 'receive',
    },
  ] as const,
};
