import { useState, type FormEvent } from "react";
import type { ChatMessage } from "../types/chat";
import { sendChatMessage } from "../services/chatApi";

function ChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
	e.preventDefault();
	const text = input.trim();
	if (!text || loading) return;

	setMessages((prev) => [...prev, { id: Date.now(), role: "user", text }]);
	setInput("");
	setLoading(true);

	try {
	  const reply = await sendChatMessage(text);
	  setMessages((prev) => [
		...prev,
		{ id: Date.now() + 1, role: "assistant", text: reply },
	  ]);
	} catch {
	  setMessages((prev) => [
		...prev,
		{ id: Date.now() + 1, role: "assistant", text: "Ocurrió un error. Intenta de nuevo." },
	  ]);
	} finally {
	  setLoading(false);
	}
  };

  return (
	<section className="chat">
	  <h2>Asistente</h2>
	  <div className="chat-messages">
		{messages.map((m) => (
		  <p key={m.id} className={`msg ${m.role}`}>
			{m.text}
		  </p>
		))}
		{loading && <p className="msg assistant">Pensando...</p>}
	  </div>
	  <form onSubmit={handleSubmit} className="add-form">
		<input
		  value={input}
		  onChange={(e) => setInput(e.target.value)}
		  placeholder="Ej: crea una tarea para el lunes"
		/>
		<button type="submit" disabled={loading}>Enviar</button>
	  </form>
	</section>
  );
}

export default ChatPanel;