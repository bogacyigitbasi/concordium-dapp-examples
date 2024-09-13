import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Button, Form } from 'react-bootstrap';
import JSONbig from 'json-bigint';

import { ConcordiumGRPCClient } from '@concordium/web-sdk';

import { getRecentBlock, requestSignature } from '../../utils';
import { WalletProvider } from '../../wallet-connection';
import { LIMIT, OFFSET, SCHEMA_GET_PENDING_APPROVALS_MESSAGE } from '../../constants';
import { getPendingApprovals } from '../../apiReqeuests';

interface Props {
    provider: WalletProvider | undefined;
    signer: string | undefined;
    grpcClient: ConcordiumGRPCClient | undefined;
}

export function AdminGetPendingApprovals(props: Props) {
    const { provider, signer, grpcClient } = props;

    const { handleSubmit } = useForm<[]>({ mode: 'all' });

    const [error, setError] = useState<string | undefined>(undefined);
    const [pendingApprovals, setPendingApprovals] = useState<string | undefined>(undefined);

    async function onSubmit() {
        setError(undefined);
        setPendingApprovals(undefined);

        try {
            if (!signer) {
                throw Error(`'signer' is undefined. Connect your wallet.`);
            }

            const { blockHash: recentBlockHash, blockHeight: recentBlockHeight } = await getRecentBlock(grpcClient);

            const signature = await requestSignature(
                recentBlockHash,
                SCHEMA_GET_PENDING_APPROVALS_MESSAGE,
                { limit: LIMIT, offset: OFFSET },
                signer,
                provider,
            );

            const data = await getPendingApprovals(signer, signature, recentBlockHeight, LIMIT, OFFSET);
            setPendingApprovals(JSONbig.stringify(data));
        } catch (error) {
            setError((error as Error).message);
        }
    }

    return (
        <div className="centered">
            <div className="card">
                <h2 className="centered">Get Pending Approvals</h2>
                <br />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Button variant="primary" type="submit">
                        Get Pending Approvals
                    </Button>

                    {error && <Alert variant="danger">{error}</Alert>}

                    {pendingApprovals && (
                        <pre className="pre">{JSON.stringify(JSON.parse(pendingApprovals), undefined, 2)}</pre>
                    )}
                </Form>
            </div>
        </div>
    );
}
