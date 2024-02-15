import React, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import { useAccount } from "wagmi";
import { Contract } from "ethers";
import { abi } from "./abi";
import { useEthersSigner } from "./ethers"; // Custom hook to enable the use of ethers within wagmi

/**
 * Component for Mint NFT with ethers.js v6 & wagmi
 */
export default function MintNFTWithEthers() {
    const { address } = useAccount();

    const signer = useEthersSigner(); // Using the custom hook to get the Ethers signer
    const [status, setStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const mintNFT = async () => {
        if (!address || !signer) return;

        setIsLoading(true);
        setStatus("Initializing transaction...");

        try {
            const nftContract = new Contract(
                "0x4A9b36506F9971595AAEF488ebaB164f8afA8dD4", // NFT contract address
                abi,
                signer
            );

            const tx = await nftContract.mint(address);
            setStatus("Transaction submitted. Waiting for confirmation...");
            await tx.wait();
            setStatus("Transaction confirmed!");
        } catch (error) {
            console.error("Minting failed", error);
            setStatus("Transaction failed");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <span onClick={mintNFT} className={styles.button}>
                {isLoading ? "Minting..." : "Mint NFT"}
            </span>
            {status && <p>{status}</p>}
        </>
    );
}
