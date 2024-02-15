import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import MintNFTWithViem from "./mint-nft-viem";
import MintNFTWithEthers from "./mint-nft-ethers";

export default function Home() {
    const [isNetworkSwitchHighlighted, setIsNetworkSwitchHighlighted] =
        useState(false);
    const [isConnectHighlighted, setIsConnectHighlighted] = useState(false);

    const closeAll = () => {
        setIsNetworkSwitchHighlighted(false);
        setIsConnectHighlighted(false);
    };

    return (
        <>
            <Head>
                <title>Mint NFT | Solidity House</title>
                <meta
                    name="description"
                    content="Generated by create-wc-dapp"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <div
                    className={styles.backdrop}
                    style={{
                        opacity:
                            isConnectHighlighted || isNetworkSwitchHighlighted
                                ? 1
                                : 0,
                    }}
                />
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <Image
                            src="/logo.png"
                            alt="Solidity House Logo"
                            height="32"
                            width="203"
                        />
                    </div>
                    <div className={styles.buttons}>
                        <div
                            onClick={closeAll}
                            className={`${styles.highlight} ${
                                isNetworkSwitchHighlighted
                                    ? styles.highlightSelected
                                    : ``
                            }`}
                        >
                            <w3m-network-button />
                        </div>
                        <div
                            onClick={closeAll}
                            className={`${styles.highlight} ${
                                isConnectHighlighted
                                    ? styles.highlightSelected
                                    : ``
                            }`}
                        >
                            <w3m-button />
                        </div>
                    </div>
                </div>
            </header>
            <main className={styles.main}>
                <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <h1>Mint NFT</h1>
                        <div className={styles.content}>
                            <ol>
                                <li>
                                    Click{" "}
                                    <span
                                        onClick={() => {
                                            setIsConnectHighlighted(
                                                !isConnectHighlighted
                                            );
                                            setIsNetworkSwitchHighlighted(
                                                false
                                            );
                                        }}
                                        className={styles.button}
                                    >
                                        Connect Wallet
                                    </span>{" "}
                                    to connect to a WalletConnect v2.0
                                    compatible wallet.
                                </li>
                                <li>
                                    Click{" "}
                                    <span
                                        onClick={() => {
                                            setIsNetworkSwitchHighlighted(
                                                !isNetworkSwitchHighlighted
                                            );
                                            setIsConnectHighlighted(false);
                                        }}
                                        className={styles.button}
                                    >
                                        Select Network
                                    </span>{" "}
                                    to change networks.
                                </li>
                                <li>
                                    Let&apos;s Mint NFT:
                                    <ul
                                        style={{
                                            marginLeft: 30,
                                            marginTop: 8,
                                        }}
                                    >
                                        <li>
                                            viem: <MintNFTWithViem />
                                        </li>
                                        <li>
                                            ethers: <MintNFTWithEthers />
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
