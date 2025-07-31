export default function ResultList({ data }) {
  if (!data) return null;

  return (
    <ul className="mt-8 text-cyan-100 text-xs sm:text-base w-full wrap-break-word">
      <li>
        <strong>Address:</strong> {data.address}
      </li>
      <li>
        <strong>Balance:</strong> {data.balance}
      </li>
      <li>
        <strong>Contract:</strong>
        {data.contractCode !== "0x" ? "False" : "True"}
      </li>
      <li>
        <strong>Nonce:</strong> {data.nonce}
      </li>
      <li>
        <strong>ENS:</strong> {data.ens}
      </li>
      <li>
        <strong>Block Number:</strong> {data.blockNumber}
      </li>
      <li>
        <strong>Block Hash:</strong> {data.blockHash}
      </li>
    </ul>
  );
}
