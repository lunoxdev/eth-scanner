import { useState, useEffect } from "react";
import socket from "./socket.js";
import { InputLightEffect } from "./components/InputLightEffect";
import ResultList from "./components/ResultList";
import Loader from "./components/Loader";
import Background from "./components/Background";
import ScanBtn from "./components/ScanBtn";
import { type ScanResults } from "./types";

export default function WalletScanner() {
  const [address, setAddress] = useState<string>("");
  const [result, setResult] = useState<ScanResults | null>(null);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    socket.on("scanResult", (data: ScanResults) => {
      setResult(data);
      setLoader(false);
    });

    return () => {
      socket.off("scanResult");
    };
  }, []);

  const handleScan = () => {
    setLoader(true);
    setResult(null);
    if (address) socket.emit("scan", address);
  };

  return (
    <div className="relative flex justify-center">
      <Background />
      <div className="flex flex-col items-center justify-center h-screen mulish-regular">
        <p className="text-center text-xs md:text-sm mb-6 font-semibold">
          Find an ETH address on{" "}
          <a
            href="https://etherscan.io/txs"
            className="cursor-pointer text-cyan-500 font-bold hover:underline"
          >
            etherscan.io
          </a>
        </p>
        <InputLightEffect
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        {loader ? <Loader /> : <ScanBtn onClick={handleScan} />}

        {result?.error ? (
          <div className="mt-8 text-red-500 font-medium">
            Wrong ETH address. Try again.
          </div>
        ) : (
          result && <ResultList data={result} />
        )}
      </div>
    </div>
  );
}
