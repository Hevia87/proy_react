export async function sendChatMessage(message: string): Promise<string> {
	// TEMPORAL: simula al agente. Más adelante hará un fetch al BFF.
	await new Promise((resolve) => setTimeout(resolve, 800));
	return `(respuesta simulada) Recibí: "${message}"`;
}