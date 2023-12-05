import { BrowserWalletConnector, ephemeralConnectorType, WalletConnectConnector } from '@concordium/react-components';
import { SignClientTypes } from '@walletconnect/types';
import moment from 'moment';

export const VERIFIER_URL = '/api';

export const REFRESH_INTERVAL = moment.duration(5, 'seconds');

export const SPONSORED_TX_CONTRACT_NAME = 'cis2_multi';
export const AUCTION_CONTRACT_NAME = 'sponsored_tx_enabled_auction';

export const CONTRACT_SUB_INDEX = 0n;

export const EVENT_SCHEMA = 'HwEAAAAADAAAAEFkZEl0ZW1FdmVudAABAAAACgAAAGl0ZW1faW5kZXgD';

export const TRANSFER_SCHEMA =
    'EAEUAAUAAAAIAAAAdG9rZW5faWQdAAYAAABhbW91bnQbJQAAAAQAAABmcm9tFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAIAAAB0bxUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAgAAAAwWAQQAAABkYXRhHQE=';

export const SERIALIZATION_HELPER_SCHEMA_PERMIT_MESSAGE =
    'FAAFAAAAEAAAAGNvbnRyYWN0X2FkZHJlc3MMBQAAAG5vbmNlBQkAAAB0aW1lc3RhbXANCwAAAGVudHJ5X3BvaW50FgEHAAAAcGF5bG9hZBABAg==';

export const SERIALIZATION_HELPER_SCHEMA_ADDITIONAL_DATA = 'Aw==';

export const NONCE_OF_PARAMETER_SCHEMA = 'FAABAAAABwAAAHF1ZXJpZXMQARQAAQAAAAcAAABhY2NvdW50Cw==';

export const NONCE_OF_RETURN_VALUE_SCHEMA = 'FAEBAAAAEAEF';

export const VIEW_ITEM_RETURN_VALUE_SCHEMA =
    'FAAIAAAADQAAAGF1Y3Rpb25fc3RhdGUVAgAAAAoAAABOb3RTb2xkWWV0AgQAAABTb2xkAQEAAAALDgAAAGhpZ2hlc3RfYmlkZGVyFQIAAAAEAAAATm9uZQIEAAAAU29tZQEBAAAACwQAAABuYW1lFgIDAAAAZW5kDQUAAABzdGFydA0LAAAAaGlnaGVzdF9iaWQbJQAAAAgAAAB0b2tlbl9pZB0ABwAAAGNyZWF0b3IL';

export const VIEW_ITEM_PARAMETER_SCHEMA = 'Aw==';

export const MINT_PARAMETER_SCHEMA =
    'FAADAAAABQAAAG93bmVyFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAwAAABtZXRhZGF0YV91cmwUAAIAAAADAAAAdXJsFgEEAAAAaGFzaBUCAAAABAAAAE5vbmUCBAAAAFNvbWUBAQAAAB4gAAAACAAAAHRva2VuX2lkHQA=';

export const ADD_ITEM_PARAMETER_SCHEMA =
    'FAAFAAAABAAAAG5hbWUWAgMAAABlbmQNBQAAAHN0YXJ0DQsAAABtaW5pbXVtX2JpZBslAAAACAAAAHRva2VuX2lkHQA=';

const WALLET_CONNECT_PROJECT_ID = '76324905a70fe5c388bab46d3e0564dc';
const WALLET_CONNECT_OPTS: SignClientTypes.Options = {
    projectId: WALLET_CONNECT_PROJECT_ID,
    metadata: {
        name: 'sponsoredTxs',
        description: 'Example dApp for sponsored txs.',
        url: '#',
        icons: ['https://walletconnect.com/walletconnect-logo.png'],
    },
};

export const BROWSER_WALLET = ephemeralConnectorType(BrowserWalletConnector.create);
export const WALLET_CONNECT = ephemeralConnectorType(
    WalletConnectConnector.create.bind(undefined, WALLET_CONNECT_OPTS)
);
