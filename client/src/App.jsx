import { useState, useEffect } from "react";
import socket from "./socket";
import { InputLightEffect } from "./components/InputLightEffect.jsx";
import ResultList from "./components/ResultList.jsx";
import Loader from "./components/Loader.jsx";
import Background from "./components/Background.jsx";
import ScanBtn from "./components/ScanBtn.jsx";

export default function WalletScanner() {
  const [address, setAddress] = useState("");
  const [result, setResult] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    socket.on("scanResult", (data) => {
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
