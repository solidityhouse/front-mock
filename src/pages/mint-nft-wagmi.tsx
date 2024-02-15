import styles from "@/styles/Home.module.css";
import { useContractWrite, useAccount } from "wagmi";
import { abi } from "./abi";

/**
 * Wagmi component for Mint NFT
 */
export default function MintNFTWagmi() {
    const { address } = useAccount();

    const { data, isLoading, isSuccess, write, status } = useContractWrite({
        address: "0x4A9b36506F9971595AAEF488ebaB164f8afA8dD4",
        abi: abi,
        functionName: "mint",
        args: [
            address ? address : "0x4A9b36506F9971595AAEF488ebaB164f8afA8dD4",
        ],
    });

    return (
        <>
            <span onClick={() => write()} className={styles.button}>
                Mint NFT
            </span>{" "}
            {isLoading && <div>Pending...</div>}
            {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
            {<div>Status: {status}</div>}
        </>
    );
}
