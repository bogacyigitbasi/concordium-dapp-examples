/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useCallback } from 'react';
import {
    ConnectorType,
    useWalletConnectorSelector,
    WalletConnection,
    WalletConnectionProps,
} from '@concordium/react-components';

function connectorTypeStyle(baseStyle: any, isSelected: boolean, isConnected: boolean) {
    if (isConnected) {
        return { ...baseStyle, backgroundColor: '#823030', border: '1px solid #520C0C' };
    }
    if (isSelected) {
        return { ...baseStyle, backgroundColor: '#174039', border: '1px solid #0c221f' };
    }
    return { ...baseStyle };
}

interface Props extends WalletConnectionProps {
    buttonStyle: any;
    disabledButtonStyle: any;
    connectorType: ConnectorType;
    connectorName: string;
    setWaitingForUser: (v: boolean) => void;
    connection: WalletConnection | undefined;
}

export function WalletConnectionTypeButton(props: Props) {
    const { buttonStyle, disabledButtonStyle, connectorType, connectorName, setWaitingForUser, connection } = props;
    const { isSelected, isConnected, isDisabled, select } = useWalletConnectorSelector(
        connectorType,
        connection,
        props,
    );
    const onClick = useCallback(() => {
        setWaitingForUser(false);
        select();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [select]);
    return (
        <button
            style={connectorTypeStyle(isDisabled ? disabledButtonStyle : buttonStyle, isSelected, isConnected)}
            disabled={isDisabled}
            type="button"
            onClick={onClick}
        >
            {isConnected ? `Disconnect ${connectorName}` : `Use ${connectorName}`}
        </button>
    );
}
