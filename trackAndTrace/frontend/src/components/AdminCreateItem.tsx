import { createItem } from '../track_and_trace_contract';
import * as TrackAndTraceContract from '../../generated/module_track_and_trace';
import { AccountAddress } from '@concordium/web-sdk';
import * as concordiumHelpers from '@concordium/browser-wallet-api-helpers';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

interface Props {
    provider: concordiumHelpers.WalletApi | undefined;
    accountAddress: string | undefined;
}

export function AdminCreateItem(props: Props) {
    const { provider, accountAddress } = props;

    const [txHash, setTxHash] = useState<string | undefined>(undefined);
    const [url, setUrl] = useState<string>('');

    function addItem() {

        if (url === undefined) {
            throw Error('URL undefined');
        }
        const parameter: TrackAndTraceContract.CreateItemParameter = {
            type: 'Some',
            content: {
                url,
                hash: { type: 'None' },
            },
        };

        if (accountAddress && provider) {
            createItem(provider, AccountAddress.fromBase58(accountAddress), parameter).then((txHash) => {
                setTxHash(txHash);
            });
        }
    }

    return (
        <div className="centered column flex-1">
            <br />
            <br />
            <input
                type="text"
                onChange={(event) => setUrl(event.target.value)}
                value={url}
                placeholder="Enter metadata URL"
            ></input>
            <br />
            <Button variant="primary" onClick={addItem}>
                Add product
            </Button>
            <div>{txHash}</div>
        </div>
    );
}
