import { useState, useEffect } from 'react'
import './App.css'
import { supabase } from './supabaseClient'

function App() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m your AI assistant. How can I help you today?' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [supabaseStatus, setSupabaseStatus] = useState('checking...')

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const { data, error } = await supabase.from('_test').select('*').limit(1)
        if (error && (error.code === '42P01' || error.message.includes('schema cache'))) {
          setSupabaseStatus('✅ Connected')
        } else if (error) {
          setSupabaseStatus('⚠️ ' + error.message)
        } else {
          setSupabaseStatus('✅ Connected & Ready')
        }
      } catch (err) {
        setSupabaseStatus('❌ Failed: ' + err.message)
      }
    }
    checkConnection()
  }, [])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const responses = [
        "That's an interesting question! I'm here to help.",
        "I understand. Let me assist you with that.",
        "Great question! Here's what I think...",
        "I'd be happy to help you with that!",
        "That's a good point. Let me explain..."
      ]
      const aiResponse = {
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)]
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>🤖 AI Mobile Chat</h1>
          <p className="subtitle">Your AI Assistant</p>
          <p style={{fontSize: '12px', opacity: 0.8, marginTop: '5px'}}>
            Supabase: {supabaseStatus}
          </p>
        </div>
      </header>

      <main className="chat-container">
        <div className="messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.role}`}>
              <div className="message-content">
                {msg.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message assistant">
              <div className="message-content typing">
                <span></span><span></span><span></span>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="input-container">
        <div className="input-wrapper">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            rows="1"
          />
          <button onClick={handleSend} disabled={!input.trim()}>
            Send
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App
