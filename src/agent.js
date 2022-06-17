import Http from 'http';
async function InjectHttpInterceptor() {
	const oldEmit = Http.Server.prototype.emit;
	Http.Server.prototype.emit = function (...args) {
		//aqui que será injetado o código
		const [type, req, response] = args;

		if (type === 'request') {
			response.setHeader('X-Instrumented-By', 'Guilherme');
		}

		return oldEmit.apply(this, args);
	};
}

export { InjectHttpInterceptor };
