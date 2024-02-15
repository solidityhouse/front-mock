import styles from "@/styles/Home.module.css";
import { useContractWrite, useAccount } from "wagmi";
import { abi } from "./abi";

/**
 * Component for Mint NFT with viem & wagmi
 */
export default function MintNFTWithViem() {
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
                {isLoading ? "Minting..." : "Mint NFT"}
            </span>{" "}
            {status != "idle" && <div>Status: {status}</div>}
            {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
        </>
    );
}
