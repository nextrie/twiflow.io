export const connectionActionTypes = {
	INIT_SOCKET_CONNECTION: "INIT_SOCKET_CONNECTION"
}

export function initSocketConnection()
{
	return {
		type: connectionActionTypes.INIT_SOCKET_CONNECTION,
		info: "This will create a socket and connect it to the server."
	}
}

export function getSocketConnectionState(connection)
{
	if (!connection)
		return "disconnected";
	return connection.socket.connected ? "connected" : "disconnected";
}
