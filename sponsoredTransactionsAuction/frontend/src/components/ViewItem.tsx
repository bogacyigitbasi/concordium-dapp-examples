import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Button, Form } from 'react-bootstrap';

import { ConcordiumGRPCClient } from '@concordium/web-sdk';
import { viewItemState } from '../auction_contract';

import JSONbig from 'json-bigint';

import * as AuctionContract from '../../generated/sponsored_tx_enabled_auction_sponsored_tx_enabled_auction'; // Code generated from a smart contract module.

interface ConnectionProps {
    grpcClient: ConcordiumGRPCClient | undefined;
}

/**
 * A component that manages the input fields and corresponding state to view an item in the auction contract.
 */
export default function ViewItem(props: ConnectionProps) {
    const { grpcClient } = props;

    const [itemState, setItemState] = useState<undefined | string>(undefined);
    const [itemStateError, setItemStateError] = useState<string | undefined>(undefined);

    interface FormType {
        itemIndex: string;
    }
    const form = useForm<FormType>({ mode: 'all' });

    function onSubmit(data: FormType) {
        setItemStateError(undefined);
        setItemState(undefined);

        const viewItemStateParam: AuctionContract.ViewItemStateParameter = Number(data.itemIndex);

        if (Number.isNaN(viewItemStateParam)) {
            setItemStateError('ItemIndex is NaN.');
        } else {
            if (grpcClient) {
                viewItemState(viewItemStateParam)
                    .then((returnValue) => {
                        if (returnValue !== undefined) {
                            setItemState(JSONbig.stringify(returnValue));
                        }
                    })
                    .catch((e) => {
                        setItemStateError((e as Error).message);
                    });
            }
        }
    }

    return (
        <>
            <Form onSubmit={form.handleSubmit(onSubmit)}>
                <Form.Label className="h2">Step 3: View your item</Form.Label>
                <Form.Group className="mb-3 text-center">
                    <Form.Label>Item Index</Form.Label>
                    <Form.Control
                        {...form.register('itemIndex', {
                            required: 'Item index is required.',
                            min: { value: 0, message: 'Number must be greater than or equal to 0.' },
                        })}
                    />
                    {form.formState.errors.itemIndex && (
                        <Alert variant="danger">{form.formState.errors.itemIndex.message}</Alert>
                    )}
                    <Form.Text />
                </Form.Group>
                <Button variant="primary" type="submit">
                    View item
                </Button>
            </Form>

            {itemState && (
                <pre className="left-align-loading-text">{JSON.stringify(JSON.parse(itemState), undefined, 2)}</pre>
            )}
            {itemStateError && <Alert variant="danger">Error: {itemStateError}.</Alert>}
            <br />
        </>
    );
}
