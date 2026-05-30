import { useConversation, ConversationProvider } from "@elevenlabs/react"
import { useState } from "react"

const AGENT_ID = "agent_3101kswg9m17fg3a5p193s2tz88j"

function SoundWave({ active }) {
  return (
    <div className="flex items-center gap-[3px] h-8">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-primary transition-all duration-300"
          style={{
            height: active ? `${12 + Math.sin(i * 1.2) * 10}px` : "6px",
            animation: active ? `pulse ${0.6 + i * 0.1}s ease-in-out infinite alternate` : "none",
          }}
        />
      ))}
    </div>
  )
}

export default function ConversationalAgent() {
  return (
    <ConversationProvider>
      <AgentWidget />
    </ConversationProvider>
  )
}

function AgentWidget() {
  const [open, setOpen] = useState(false)
  const [permissionDenied, setPermissionDenied] = useState(false)

  const conversation = useConversation({
    onDisconnect: () => setOpen(false),
    onError: () => setOpen(false),
  })

  const isConnected = conversation.status === "connected"
  const isConnecting = conversation.status === "connecting"

  async function start() {
    setPermissionDenied(false)
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true })
    } catch {
      setPermissionDenied(true)
      return
    }
    setOpen(true)
    await conversation.startSession({ agentId: AGENT_ID, connectionType: "webrtc" })
  }

  async function stop() {
    await conversation.endSession()
    setOpen(false)
  }

  return (
    <>
      <style>{`
        @keyframes pulse { from { transform: scaleY(0.6); } to { transform: scaleY(1.4); } }
        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2); opacity: 0; }
        }
      `}</style>

      {/* Floating trigger button */}
      {!open && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
          {permissionDenied && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl px-3 py-2 max-w-[200px] text-right shadow">
              Microphone access required. Please allow it in your browser.
            </div>
          )}
          <div className="relative">
            {/* Ripple ring */}
            <span className="absolute inset-0 rounded-full bg-primary opacity-20 animate-ping" />
            <button
              onClick={start}
              aria-label="Talk to Arjun, our AI agent"
              className="relative w-14 h-14 rounded-full bg-gradient-btn shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200"
            >
              {/* Mic icon */}
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line strokeLinecap="round" x1="12" y1="19" x2="12" y2="23" />
                <line strokeLinecap="round" x1="8" y1="23" x2="16" y2="23" />
              </svg>
            </button>
          </div>
          {/* Tooltip */}
          <span className="text-xs text-gray-500 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm border border-gray-100">
            Talk to Arjun
          </span>
        </div>
      )}

      {/* Active widget panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-64 rounded-2xl shadow-2xl bg-white border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-btn px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line strokeLinecap="round" x1="12" y1="19" x2="12" y2="23" />
                  <line strokeLinecap="round" x1="8" y1="23" x2="16" y2="23" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-none">Arjun</p>
                <p className="text-white/70 text-[10px] mt-0.5">SahyogAI Agent</p>
              </div>
            </div>
            <button
              onClick={stop}
              aria-label="End conversation"
              className="text-white/70 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="px-4 py-5 flex flex-col items-center gap-3">
            {isConnecting ? (
              <p className="text-sm text-gray-400 animate-pulse">Connecting…</p>
            ) : (
              <>
                <SoundWave active={conversation.isSpeaking} />
                <p className="text-sm text-gray-500">
                  Arjun is{" "}
                  <span className="font-medium text-primary">
                    {conversation.isSpeaking ? "speaking" : "listening"}
                  </span>
                </p>
                <p className="text-xs text-gray-400 text-center leading-relaxed">
                  Ask about our AI calling system, pricing, or how to get started.
                </p>
              </>
            )}
          </div>

          {/* End call button */}
          <div className="px-4 pb-4">
            <button
              onClick={stop}
              className="w-full py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-500 text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25a4.5 4.5 0 01-9 0m9 0a4.5 4.5 0 00-9 0m9 0v.75A4.5 4.5 0 0112 13.5a4.5 4.5 0 01-4.5-4.5V8.25m9 0H21m-18 0h2.25" />
              </svg>
              End Call
            </button>
          </div>
        </div>
      )}
    </>
  )
}
