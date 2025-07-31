import scanAddress from "./scanAddress.js";

export default function setupSocketHandlers(io) {
  io.on("connection", (socket) => {
    console.log(`🟢 Socket ${socket.id} connected`);
    handleSocketEvents(socket);
  });
}

function handleSocketEvents(socket) {
  socket.on("scan", (address) => handleScan(address, socket));
  socket.on("disconnect", () => console.log("🔴 Socket disconnected"));
}

async function handleScan(address, socket) {
  console.log("📡 Scanning address:", address);

  if (!address) {
    console.error("❌ Invalid address received");
    socket.emit("scanResult", { error: "Invalid address" });
    return;
  }

  const result = await scanAddress(address);
  socket.emit("scanResult", result);
}
