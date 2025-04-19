const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');
  
  socket.on('data', (data) => {
    try {
      const message = JSON.parse(data);
      // Handle incoming messages
      console.log('Received:', message);
    } catch (err) {
      console.error('Error processing message:', err);
    }
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.CONSOLE_NINJA_MCP_PORT || 9229;
server.listen(PORT, () => {
  console.log(`Console Ninja MCP server listening on port ${PORT}`);
});