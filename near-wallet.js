// near api js
import { providers } from 'near-api-js'

import '@near-wallet-selector/modal-ui/styles.css'

// wallet selector options
import { setupWalletSelector } from '@near-wallet-selector/core'
import { setupHereWallet } from '@near-wallet-selector/here-wallet'
import { setupBitteWallet } from "@near-wallet-selector/bitte-wallet";

import { setupMyNearWallet } from '@near-wallet-selector/my-near-wallet';
import { setupMeteorWallet } from '@near-wallet-selector/meteor-wallet';
import { setupModal } from '@near-wallet-selector/modal-ui'

const THIRTY_TGAS = '30000000000000'
const NO_DEPOSIT = '0'

// Wallet that simplifies using the wallet selector
export class Wallet {
  walletSelector
  wallet
  network
  createAccessKeyFor

  constructor ({ createAccessKeyFor = undefined, network = 'testnet' }) {
    this.createAccessKeyFor = createAccessKeyFor
    this.network = 'mainnet'
  }

  // To be called when the website loads
  async startUp () {
    this.walletSelector = await setupWalletSelector({
      network: this.network,
      modules: [
        setupBitteWallet({
          networkId: "mainnet",
          walletUrl: "https://wallet.bitte.ai",
          deprecated: false,
        }),
        setupHereWallet(),
        setupMyNearWallet(),
        setupMeteorWallet(),
      ]
    })

    this.isSignedIn = this.walletSelector.isSignedIn()
    this.isLoaded = true

    if (this.isSignedIn) {
      this.wallet = await this.walletSelector.wallet()
      this.accountId = this.walletSelector.store.getState().accounts[0].accountId
    }

    return this.isSignedIn
  }

  // Sign-in method
  signIn () {
    const description = 'Please select a wallet to sign in.'
    const modal = setupModal(this.walletSelector, { contractId: this.createAccessKeyFor, description })
    modal.show()
  }

  // Sign-out method
  signOut () {
    this.wallet.signOut()
    this.wallet = this.accountId = this.createAccessKeyFor = null
    window.location.replace(window.location.origin + window.location.pathname)
  }

  async viewMethod ({ contractId, method, args = {} }) {
    const { network } = this.walletSelector.options
    const provider = new providers.JsonRpcProvider({ url: network.nodeUrl })

    let res = await provider.query({
      request_type: 'call_function',
      account_id: contractId,
      method_name: method,
      args_base64: Buffer.from(JSON.stringify(args)).toString('base64'),
      finality: 'optimistic',
    })
    return JSON.parse(Buffer.from(res.result).toString())
  }

  async callMethod({contractId, method, args = {}, gas = THIRTY_TGAS, deposit = NO_DEPOSIT, outcomeData = false}) {
    try {
      const outcome = await this.wallet.signAndSendTransaction({
        signerId: this.accountId,
        receiverId: contractId,
        actions: [
          {
            type: 'FunctionCall',
            params: {
              methodName: method,
              args,
              gas,
              deposit,
            },
          },
        ],
      });
      if (outcomeData) {
        return outcome;
      } else {
        return providers.getTransactionLastResult(outcome)
      }
    } catch (e) {
      console.log(e);
    }

  }


  async getTransactionResult (txhash) {
    const { network } = this.walletSelector.options
    const provider = new providers.JsonRpcProvider({ url: network.nodeUrl })

    // Retrieve transaction result from the network
    const transaction = await provider.txStatus(txhash, 'unnused')
    return providers.getTransactionLastResult(transaction)
  }
}