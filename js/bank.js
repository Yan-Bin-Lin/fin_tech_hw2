let bankBytecode =
    "6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610aa6806100536000396000f300608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806320bcf3f8146100885780632e1a7d4d146100a857806341c0e1b5146100d55780637b83b50b146100ec5780639afb5c3b14610117578063a9059cbb14610144578063d0e30db014610191575b600080fd5b6100a66004803603810190808035906020019092919050505061019b565b005b3480156100b457600080fd5b506100d36004803603810190808035906020019092919050505061028a565b005b3480156100e157600080fd5b506100ea61043e565b005b3480156100f857600080fd5b5061010161053c565b6040518082815260200191505060405180910390f35b34801561012357600080fd5b5061014260048036038101908080359060200190929190505050610583565b005b34801561015057600080fd5b5061018f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610803565b005b6101996109d5565b005b34600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055503373ffffffffffffffffffffffffffffffffffffffff167f8939eef15ba4f2f598358219a76e1620fc16d76abeb9bccdf3ea66634813c3ac34834260405180848152602001838152602001828152602001935050505060405180910390a250565b6000670de0b6b3a76400008202905080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610350576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f796f75722062616c616e63657320617265206e6f7420656e6f7567680000000081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610396573d6000803e3d6000fd5b5080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff167f5bb95829671915ece371da722f91d5371159095dcabf2f75cd6c53facb7e1bab8342604051808381526020018281526020019250505060405180910390a25050565b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610502576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f796f7520617265206e6f74206f776e657200000000000000000000000000000081525060200191505060405180910390fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b6000670de0b6b3a7640000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154029050600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015482111561066457600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015491505b600a600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154838115156106b357fe5b0482028115156106bf57fe5b048101905080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055503373ffffffffffffffffffffffffffffffffffffffff167fadee7ab3ba86ed0ba00494a25598fbd00341dbbf3e9b84ea4dbae19794d5c11582844260405180848152602001838152602001828152602001935050505060405180910390a25050565b6000670de0b6b3a76400008202905080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515156108c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f796f75722062616c616e63657320617265206e6f7420656e6f7567680000000081525060200191505060405180910390fd5b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fbabc8cd3bd6701ee99131f374fd2ab4ea66f48dc4e4182ed78fecb0502e44dd68442604051808381526020018281526020019250505060405180910390a3505050565b34600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055503373ffffffffffffffffffffffffffffffffffffffff167fad40ae5dc69974ba932d08b0a608e89109412d41d04850f5196f144875ae26603442604051808381526020018281526020019250505060405180910390a25600a165627a7a723058209df2a9ecf4518fade5f2394060e03076eae3bc8c934ee0fdd260b8e01a102dc00029";

let bankAbi =[
    {
        "constant": false,
        "inputs": [
            {
                "name": "count",
                "type": "uint256"
            }
        ],
        "name": "BuyDeposit",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "etherValue",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "kill",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getBankBalance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "count",
                "type": "uint256"
            }
        ],
        "name": "OutDeposit",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "to",
                "type": "address"
            },
            {
                "name": "etherValue",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "deposit",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "DepositEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "WithdrawEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "TransferEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "count",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "BuyDepositEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "count",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "OutDepositEvent",
        "type": "event"
    }
];