import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { ConcordiumGRPCClient } from '@concordium/web-sdk';

import './styles.scss';
import { WalletProvider } from './wallet-connection';
import { version } from '../package.json';
import { ConnectWallet } from './components/ConnectWallet';
import { ZkProofSubmission } from './components/ZkProofSubmission';
import { Admin } from './components/Admin/Admin';
import { TweetSubmission } from './components/TweetSubmission';

export const App = () => {
    const [provider, setProvider] = useState<WalletProvider>();
    const [account, setAccount] = useState<string>();

    const grpcClient = useRef(new ConcordiumGRPCClient(new GrpcWebFetchTransport({ baseUrl: CONFIG.node }))).current;
    const capitalizedNetwork = CONFIG.network[0].toUpperCase() + CONFIG.network.substring(1);

    useEffect(() => {
        if (provider !== undefined) {
            return () => {
                provider?.disconnect?.().then(() => provider.removeAllListeners());
            };
        }
    }, [provider]);

    const connectProvider = async (provider: WalletProvider) => {
        const accounts = await provider.connect();
        if (accounts && accounts?.length != 0) {
            setAccount(accounts[0]);
        }
        setProvider(provider);
    };

    return (
        <Router>
            <div className="navbar">
                <div>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={`https://github.com/Concordium/concordium-dapp-examples/tree/main/compliant-reward-distribution`}
                    >
                        Version {version} ({capitalizedNetwork})
                    </a>
                </div>
                <Link className="secondary" to="/connectWallet">
                    ConnectWallet
                </Link>
                <Link className="secondary" to="/tweetSubmission">
                    SubmitTweet
                </Link>
                <Link className="secondary" to="/zkProofSubmission">
                    SubmitZKProof
                </Link>
                <Link className="secondary" to="/admin">
                    Admin
                </Link>

                <Button id="accountAddress" disabled={true}>
                    {account ? account.slice(0, 5) + '...' + account.slice(-5) : 'No Account Connected'}
                </Button>
            </div>

            <Routes>
                <Route
                    path="/connectWallet"
                    element={<ConnectWallet connectProvider={connectProvider} account={account} />}
                />
                <Route
                    path="/zkProofSubmission"
                    element={<ZkProofSubmission prover={account} provider={provider} grpcClient={grpcClient} />}
                />
                <Route
                    path="/tweetSubmission"
                    element={<TweetSubmission signer={account} provider={provider} grpcClient={grpcClient} />}
                />

                <Route path="/Admin" element={<Admin signer={account} provider={provider} grpcClient={grpcClient} />} />
                <Route path="/" element={<div></div>} />
            </Routes>
        </Router>
    );
};