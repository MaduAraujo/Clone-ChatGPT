import OpenAI from "openai"

type Message = {
	role: 'user' | 'assistant'
	content: string
}

const openai = new OpenAI({
	apiKey: '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',
	dangerouslyAllowBrowser: true
})

export async function sendMessage(messages: Message[]) {
	const response = await openai.chat.completions.create({
		model: 'gpt-4o',
		messages: messages.map(message => (
			{ role: message.role, content: message.content }
		))
	})

	return {
		role: response.choices[0].message.role,
		content: response.choices[0].message.content || ''
	}
}