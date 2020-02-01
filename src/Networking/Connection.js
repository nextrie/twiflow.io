import io from "socket.io-client";

export default class Connection
{
	constructor(ip, port)
	{
		this.ip = ip;
		this.port = port;
		this.socket = connect(ip, port);
	}
}


function connect(ip, port)
{
	return( io(ip + ":" + port) );
}
