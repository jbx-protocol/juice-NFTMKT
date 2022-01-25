/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721, ERC721Interface } from "../ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001fc738038062001fc7833981016040819052620000349162000220565b6200003f3362000073565b815162000054906001906020850190620000c3565b5080516200006a906002906020840190620000c3565b505050620002dd565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054620000d1906200028a565b90600052602060002090601f016020900481019282620000f5576000855562000140565b82601f106200011057805160ff191683800117855562000140565b8280016001018555821562000140579182015b828111156200014057825182559160200191906001019062000123565b506200014e92915062000152565b5090565b5b808211156200014e576000815560010162000153565b600082601f8301126200017b57600080fd5b81516001600160401b0380821115620001985762000198620002c7565b604051601f8301601f19908116603f01168101908282118183101715620001c357620001c3620002c7565b81604052838152602092508683858801011115620001e057600080fd5b600091505b83821015620002045785820183015181830184015290820190620001e5565b83821115620002165760008385830101525b9695505050505050565b600080604083850312156200023457600080fd5b82516001600160401b03808211156200024c57600080fd5b6200025a8683870162000169565b935060208501519150808211156200027157600080fd5b50620002808582860162000169565b9150509250929050565b600181811c908216806200029f57607f821691505b60208210811415620002c157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b611cda80620002ed6000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c8063715018a6116100b2578063a22cb46511610081578063c87b56dd11610066578063c87b56dd1461026b578063e985e9c51461027e578063f2fde38b146102c757600080fd5b8063a22cb46514610245578063b88d4fde1461025857600080fd5b8063715018a6146102045780638da5cb5b1461020c57806395d89b411461022a578063a14481941461023257600080fd5b806323b872dd116100ee57806323b872dd146101aa57806342842e0e146101bd5780636352211e146101d057806370a08231146101e357600080fd5b806301ffc9a71461012057806306fdde0314610148578063081812fc1461015d578063095ea7b314610195575b600080fd5b61013361012e366004611982565b6102da565b60405190151581526020015b60405180910390f35b6101506103bf565b60405161013f9190611a97565b61017061016b3660046119bc565b610451565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161013f565b6101a86101a3366004611958565b610516565b005b6101a86101b83660046117e6565b61066f565b6101a86101cb3660046117e6565b6106f6565b6101706101de3660046119bc565b610711565b6101f66101f1366004611798565b6107a9565b60405190815260200161013f565b6101a861085d565b60005473ffffffffffffffffffffffffffffffffffffffff16610170565b6101506108d0565b6101a8610240366004611958565b6108df565b6101a861025336600461191c565b610954565b6101a8610266366004611822565b61095f565b6101506102793660046119bc565b6109ed565b61013361028c3660046117b3565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260066020908152604080832093909416825291909152205460ff1690565b6101a86102d5366004611798565b610af0565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd00000000000000000000000000000000000000000000000000000000148061036d57507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806103b957507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6060600180546103ce90611b19565b80601f01602080910402602001604051908101604052809291908181526020018280546103fa90611b19565b80156104475780601f1061041c57610100808354040283529160200191610447565b820191906000526020600020905b81548152906001019060200180831161042a57829003601f168201915b5050505050905090565b60008181526003602052604081205473ffffffffffffffffffffffffffffffffffffffff166104ed5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5060009081526005602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600061052182610711565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105c55760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084016104e4565b3373ffffffffffffffffffffffffffffffffffffffff821614806105ee57506105ee813361028c565b6106605760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016104e4565b61066a8383610bec565b505050565b6106793382610c8c565b6106eb5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016104e4565b61066a838383610de2565b61066a8383836040518060200160405280600081525061095f565b60008181526003602052604081205473ffffffffffffffffffffffffffffffffffffffff16806103b95760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e000000000000000000000000000000000000000000000060648201526084016104e4565b600073ffffffffffffffffffffffffffffffffffffffff82166108345760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f20616464726573730000000000000000000000000000000000000000000060648201526084016104e4565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526004602052604090205490565b60005473ffffffffffffffffffffffffffffffffffffffff1633146108c45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104e4565b6108ce6000611015565b565b6060600280546103ce90611b19565b60005473ffffffffffffffffffffffffffffffffffffffff1633146109465760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104e4565b610950828261108a565b5050565b6109503383836110a4565b6109693383610c8c565b6109db5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016104e4565b6109e7848484846111b8565b50505050565b60008181526003602052604090205460609073ffffffffffffffffffffffffffffffffffffffff16610a875760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e000000000000000000000000000000000060648201526084016104e4565b6000610a9e60408051602081019091526000815290565b90506000815111610abe5760405180602001604052806000815250610ae9565b80610ac884611241565b604051602001610ad9929190611a1f565b6040516020818303038152906040525b9392505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610b575760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104e4565b73ffffffffffffffffffffffffffffffffffffffff8116610be05760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016104e4565b610be981611015565b50565b600081815260056020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84169081179091558190610c4682610711565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008181526003602052604081205473ffffffffffffffffffffffffffffffffffffffff16610d235760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084016104e4565b6000610d2e83610711565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610d9d57508373ffffffffffffffffffffffffffffffffffffffff16610d8584610451565b73ffffffffffffffffffffffffffffffffffffffff16145b80610dda575073ffffffffffffffffffffffffffffffffffffffff80821660009081526006602090815260408083209388168352929052205460ff165b949350505050565b8273ffffffffffffffffffffffffffffffffffffffff16610e0282610711565b73ffffffffffffffffffffffffffffffffffffffff1614610e8b5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e657200000000000000000000000000000000000000000000000000000060648201526084016104e4565b73ffffffffffffffffffffffffffffffffffffffff8216610f135760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016104e4565b610f1e600082610bec565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600460205260408120805460019290610f54908490611ad6565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000908152600460205260408120805460019290610f8f908490611aaa565b909155505060008181526003602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610950828260405180602001604052806000815250611373565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156111205760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016104e4565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526006602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6111c3848484610de2565b6111cf848484846113fc565b6109e75760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016104e4565b60608161128157505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b81156112ab578061129581611b6d565b91506112a49050600a83611ac2565b9150611285565b60008167ffffffffffffffff8111156112c6576112c6611c47565b6040519080825280601f01601f1916602001820160405280156112f0576020820181803683370190505b5090505b8415610dda57611305600183611ad6565b9150611312600a86611ba6565b61131d906030611aaa565b60f81b81838151811061133257611332611c18565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535061136c600a86611ac2565b94506112f4565b61137d83836115e1565b61138a60008484846113fc565b61066a5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016104e4565b600073ffffffffffffffffffffffffffffffffffffffff84163b156115d6576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a0290611473903390899088908890600401611a4e565b602060405180830381600087803b15801561148d57600080fd5b505af19250505080156114db575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526114d89181019061199f565b60015b61158b573d808015611509576040519150601f19603f3d011682016040523d82523d6000602084013e61150e565b606091505b5080516115835760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016104e4565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050610dda565b506001949350505050565b73ffffffffffffffffffffffffffffffffffffffff82166116445760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016104e4565b60008181526003602052604090205473ffffffffffffffffffffffffffffffffffffffff16156116b65760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016104e4565b73ffffffffffffffffffffffffffffffffffffffff821660009081526004602052604081208054600192906116ec908490611aaa565b909155505060008181526003602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461179357600080fd5b919050565b6000602082840312156117aa57600080fd5b610ae98261176f565b600080604083850312156117c657600080fd5b6117cf8361176f565b91506117dd6020840161176f565b90509250929050565b6000806000606084860312156117fb57600080fd5b6118048461176f565b92506118126020850161176f565b9150604084013590509250925092565b6000806000806080858703121561183857600080fd5b6118418561176f565b935061184f6020860161176f565b925060408501359150606085013567ffffffffffffffff8082111561187357600080fd5b818701915087601f83011261188757600080fd5b81358181111561189957611899611c47565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156118df576118df611c47565b816040528281528a60208487010111156118f857600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561192f57600080fd5b6119388361176f565b91506020830135801515811461194d57600080fd5b809150509250929050565b6000806040838503121561196b57600080fd5b6119748361176f565b946020939093013593505050565b60006020828403121561199457600080fd5b8135610ae981611c76565b6000602082840312156119b157600080fd5b8151610ae981611c76565b6000602082840312156119ce57600080fd5b5035919050565b600081518084526119ed816020860160208601611aed565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60008351611a31818460208801611aed565b835190830190611a45818360208801611aed565b01949350505050565b600073ffffffffffffffffffffffffffffffffffffffff808716835280861660208401525083604083015260806060830152611a8d60808301846119d5565b9695505050505050565b602081526000610ae960208301846119d5565b60008219821115611abd57611abd611bba565b500190565b600082611ad157611ad1611be9565b500490565b600082821015611ae857611ae8611bba565b500390565b60005b83811015611b08578181015183820152602001611af0565b838111156109e75750506000910152565b600181811c90821680611b2d57607f821691505b60208210811415611b67577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611b9f57611b9f611bba565b5060010190565b600082611bb557611bb5611be9565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610be957600080fdfea264697066735822122069eb6874e6b2c3b009e2d9102788bb33be8bf9d512e969d0c12f8b0445798c2e64736f6c63430008060033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC721";
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static readonly contractName: "ERC721";
  public readonly contractName: "ERC721";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}