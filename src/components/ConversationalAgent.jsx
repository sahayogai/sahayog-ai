/**
 * ConversationalAgent.jsx — Pipecat + Sarvam AI voice widget
 * Browser-only. Lazy-loaded in SiteLayout.jsx — never runs during SSR.
 */

import { useState, useEffect, useRef, Suspense, lazy } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PipecatAppBase, usePipecatConnectionState } from "@pipecat-ai/voice-ui-kit"

const PlasmaComp = lazy(() =>
  import("@pipecat-ai/voice-ui-kit/webgl").then((m) => ({ default: m.Plasma }))
)

const BASE_CONFIG = {
  intensity: 2.0,
  radius: 1.5,
  effectScale: 0.6,
  ringCount: 4,
  ringVisibility: 0.8,
  ringDistance: 0.1,
  ringBounce: 0.3,
  ringThickness: 15,
  ringVariance: 0.7,
  ringAmplitude: 0.05,
  ringSpeed: 2.0,
  ringSegments: 6,
  colorCycleSpeed: 1.0,
  plasmaSpeed: 1.5,
  useCustomColors: true,
  color1: "#ff6b6b",
  color2: "#4ecdc4",
  color3: "#45b7d1",
  backgroundColor: "transparent",
  glowFalloff: 1.2,
  glowThreshold: 0.1,
}

const SPEAKING_CONFIG = { ...BASE_CONFIG, intensity: 2.8, ringSpeed: 3.0, ringAmplitude: 0.09 }
const THINKING_CONFIG = { ...BASE_CONFIG, intensity: 1.5, ringSpeed: 1.5, ringAmplitude: 0.04 }

function MicIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line strokeLinecap="round" x1="12" y1="19" x2="12" y2="23" />
      <line strokeLinecap="round" x1="8" y1="23" x2="16" y2="23" />
    </svg>
  )
}

function AgentWidget({ client, handleConnect, handleDisconnect, error, onSessionEnd }) {
  const [open, setOpen] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isThinking, setIsThinking] = useState(false)
  const [permissionDenied, setPermissionDenied] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(300)
  const plasmaRef = useRef(null)
  const timerRef = useRef(null)
  const stopRef = useRef(null)
  const isStoppingRef = useRef(false)

  const { isConnecting } = usePipecatConnectionState()

  useEffect(() => {
    if (!client) return
    const onBotStart = () => { setIsThinking(false); setIsSpeaking(true) }
    const onBotStop  = () => setIsSpeaking(false)
    const onUserStop = () => setIsThinking(true)
    client.on("botStartedSpeaking", onBotStart)
    client.on("botStoppedSpeaking", onBotStop)
    client.on("userStoppedSpeaking", onUserStop)
    return () => {
      client.off("botStartedSpeaking", onBotStart)
      client.off("botStoppedSpeaking", onBotStop)
      client.off("userStoppedSpeaking", onUserStop)
    }
  }, [client])

  // Respond to speaking / thinking state by updating plasma intensity
  useEffect(() => {
    const cfg = isSpeaking ? SPEAKING_CONFIG : isThinking ? THINKING_CONFIG : BASE_CONFIG
    plasmaRef.current?.updateConfig?.(cfg)
  }, [isSpeaking, isThinking])

  // Keep stopRef current so the timer always calls the latest stop closure
  useEffect(() => { stopRef.current = stop })

  // 5-minute hard limit — uses stopRef to avoid stale closure
  useEffect(() => {
    if (!open) return
    setSecondsLeft(300)
    timerRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) { stopRef.current?.(); return 0 }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [open])

  async function start() {
    setPermissionDenied(false)
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true })
    } catch {
      setPermissionDenied(true)
      return
    }
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      if (AudioCtx) { const c = new AudioCtx(); await c.resume(); await c.close() }
    } catch (_) {}
    setOpen(true)
    await handleConnect?.()
  }

  async function stop() {
    if (isStoppingRef.current) return
    isStoppingRef.current = true
    clearInterval(timerRef.current)
    setOpen(false)
    setIsSpeaking(false)
    setIsThinking(false)
    try {
      await handleDisconnect?.()
    } catch (e) {
      console.warn("[ConversationalAgent] disconnect error:", e)
    } finally {
      // Remount PipecatAppBase after the close animation (~500 ms) so the
      // internal RTVI client is fully reset before the next connect attempt.
      setTimeout(() => {
        onSessionEnd?.()
        isStoppingRef.current = false
      }, 550)
    }
  }

  const statusLabel = isConnecting
    ? "Connecting…"
    : isSpeaking ? "Arjun is speaking"
    : isThinking ? "Arjun is thinking…"
    : "Arjun is listening"

  return (
    <>
      {/* ── Floating trigger ─────────────────────────────────────────── */}
      <AnimatePresence>
        {!open && (
          <motion.div
            className="fixed bottom-24 right-4 z-[9999] flex flex-col items-end gap-2 sm:bottom-6 sm:right-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {(permissionDenied || error) && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl px-3 py-2 max-w-[180px] text-right shadow">
                {permissionDenied ? "Microphone access required." : "Connection error. Try again."}
              </div>
            )}
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-primary opacity-20 animate-ping" />
              <button
                onClick={start}
                aria-label="Talk to Arjun"
                className="relative w-14 h-14 rounded-full bg-gradient-btn shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200"
              >
                <MicIcon className="w-6 h-6 text-white" />
              </button>
            </div>
            <span className="text-xs text-gray-500 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm border border-gray-100">
              Talk to Arjun
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Active widget ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Scrim — mobile only, tap to close */}
            <motion.div
              className="fixed inset-0 z-[9998] bg-black/40 sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={stop}
            />

            {/*
              Mobile  (< sm): full-width bottom sheet, 75 vh, slides up
              Desktop (sm+) : fixed corner card, 320 px wide, auto height
            */}
            <motion.div
              className="
                fixed z-[9999] bg-white flex flex-col overflow-hidden
                inset-x-0 bottom-0 rounded-t-3xl h-[75vh]
                sm:inset-x-auto sm:bottom-6 sm:right-6 sm:h-auto sm:w-80 sm:rounded-2xl
              "
              style={{
                boxShadow: "0 20px 60px rgba(124,59,237,0.18), 0 4px 16px rgba(0,0,0,0.08)",
                border: "1px solid rgba(124,59,237,0.15)",
              }}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
            >
              {/* Pull handle — mobile only */}
              <div className="sm:hidden flex justify-center pt-3 pb-2 flex-shrink-0">
                <div className="w-10 h-1 rounded-full bg-gray-300" />
              </div>

              {/* Header */}
              <div className="px-4 py-3 flex items-center justify-between bg-white border-b border-gray-100 flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-btn flex items-center justify-center flex-shrink-0">
                    <MicIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm leading-none">Arjun</p>
                    <p className="text-gray-400 text-[11px] mt-0.5">SahyogAI Agent</p>
                  </div>
                </div>
                <button
                  onClick={stop}
                  aria-label="End conversation"
                  className="text-gray-400 hover:text-gray-700 transition-colors w-7 h-7 rounded-lg hover:bg-gray-100 flex items-center justify-center"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Plasma canvas
                  Mobile:  flex-1 → fills all remaining space in the sheet
                  Desktop: sm:h-56 → fixed 224 px tall card section        */}
              <div className="relative overflow-hidden bg-[#07070f] flex-1 min-h-0 sm:flex-none sm:h-56">
                <Suspense fallback={
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
                  </div>
                }>
                  <PlasmaComp
                    ref={plasmaRef}
                    initialConfig={BASE_CONFIG}
                    className="absolute inset-0 w-full h-full"
                  />
                </Suspense>
              </div>

              {/* Status + countdown */}
              <div className="py-3 px-4 flex items-center justify-between border-t border-gray-100 flex-shrink-0">
                <p className="text-sm text-gray-500 font-medium">{statusLabel}</p>
                <span
                  className={`text-xs font-mono font-semibold tabular-nums px-2 py-0.5 rounded-full ${
                    secondsLeft <= 60
                      ? "bg-red-50 text-red-500"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {String(Math.floor(secondsLeft / 60)).padStart(2, "0")}:
                  {String(secondsLeft % 60).padStart(2, "0")}
                </span>
              </div>

              {/* End Call — extra bottom padding on mobile for home-indicator clearance */}
              <div className="px-4 pb-8 sm:pb-4 flex-shrink-0">
                <button
                  onClick={stop}
                  className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 border border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/60"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25a4.5 4.5 0 01-9 0m9 0a4.5 4.5 0 00-9 0m9 0v.75A4.5 4.5 0 0112 13.5a4.5 4.5 0 01-4.5-4.5V8.25m9 0H21m-18 0h2.25" />
                  </svg>
                  End Call
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default function ConversationalAgent() {
  const [sessionKey, setSessionKey] = useState(0)

  return (
    <PipecatAppBase
      key={sessionKey}
      transportType="smallwebrtc"
      connectParams={{ webrtcUrl: "/api/offer" }}
      noThemeProvider
    >
      {(state) => (
        <AgentWidget
          {...state}
          onSessionEnd={() => setSessionKey((k) => k + 1)}
        />
      )}
    </PipecatAppBase>
  )
}
