import { TESTNET, MAINNET } from '@concordium/wallet-connectors';
import { SignClientTypes } from '@walletconnect/types';

const { protocol, hostname, port } = new URL(CONFIG.node);
export const NODE_HOST = `${protocol}//${hostname}`;
export const NODE_PORT = Number(port);

/** The Concordium network used for the application. */
export const NETWORK = CONFIG.network === 'testnet' ? TESTNET : MAINNET;

// The string "CONCORDIUM_COMPLIANT_REWARD_DISTRIBUTION_DAPP" is used
// as context for signing messages and generating ZK proofs. The same account
// can be used in different Concordium services without the risk of re-playing
// signatures/zk-proofs across the different services due to this context string.
export const CONTEXT_STRING = 'CONCORDIUM_COMPLIANT_REWARD_DISTRIBUTION_DAPP';

export const WALLET_CONNECT_PROJECT_ID = '76324905a70fe5c388bab46d3e0564dc';
export const WALLET_CONNECT_SESSION_NAMESPACE = 'ccd';
export const CHAIN_ID = `${WALLET_CONNECT_SESSION_NAMESPACE}:${CONFIG.network === 'testnet' ? `testnet` : `mainnet`}`;
export const METHOD_ID = 'request_verifiable_presentation';
export const METHOD_SIGN = 'sign_message';

export const walletConnectOpts: SignClientTypes.Options = {
    projectId: WALLET_CONNECT_PROJECT_ID,
    metadata: {
        name: 'Compliance Reward Distribution',
        description: 'Application for distributing CCD rewards',
        url: '#',
        icons: ['https://walletconnect.com/walletconnect-logo.png'],
    },
};
