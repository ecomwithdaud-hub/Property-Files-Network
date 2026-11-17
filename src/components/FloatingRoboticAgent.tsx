"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  X,
  Phone,
  Send,
  Sparkles,
  Bot,
  RotateCcw,
  Volume2,
  VolumeX,
  Flame,
  Compass,
} from "lucide-react";
import { COMPANY_INFO, FOUNDERS_LEADERSHIP } from "@/lib/data";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  quickReplies?: { label: string; action: string }[];
  cta?: { label: string; href: string; type?: "whatsapp" | "call" | "link" };
  timestamp: string;
}

interface Waypoint {
  getX: (vw: number) => number;
  getY: (vh: number) => number;
  speechSide: "left" | "right";
  tilt: number;
  heading: string;
}

const WAYPOINTS: Waypoint[] = [
  // 1. Top-Right (Surveying from upper right)
  {
    getX: (vw) => (vw < 640 ? vw - 68 : vw - 88),
    getY: () => 110,
    speechSide: "left",
    tilt: 6,
    heading: "Surveying north-east",
  },
  // 2. Upper-Left (Cruising across to upper left)
  {
    getX: () => 20,
    getY: () => 180,
    speechSide: "right",
    tilt: -6,
    heading: "Cruising north-west",
  },
  // 3. Middle-Right (Mid-screen starboard patrol)
  {
    getX: (vw) => (vw < 640 ? vw - 68 : vw - 88),
    getY: (vh) => vh * 0.40,
    speechSide: "left",
    tilt: 5,
    heading: "Patrolling east",
  },
  // 4. Middle-Left (Center-west hover)
  {
    getX: () => 20,
    getY: (vh) => vh * 0.52,
    speechSide: "right",
    tilt: -5,
    heading: "Navigating west",
  },
  // 5. High-Right (Floating below hero header)
  {
    getX: (vw) => (vw < 640 ? vw - 68 : vw - 88),
    getY: (vh) => Math.min(260, vh * 0.32),
    speechSide: "left",
    tilt: 4,
    heading: "Hovering high-east",
  },
  // 6. Lower-Left Float (Safe height, well above footer)
  {
    getX: (vw) => (vw < 640 ? 16 : 28),
    getY: (vh) => Math.min(vh * 0.64, vh - 220),
    speechSide: "right",
    tilt: -4,
    heading: "Scanning south-west",
  },
];

const ROBOT_PROMPTS = [
  "🚀 Hey! I'm flying by... Need help with property files?",
  "📈 Looking for today's verified DHA Phase 9 Prism rates?",
  "🌊 Hey! Inquiring about MGH Mangla 1 Kanal waterfront files?",
  "🛡️ Need biometric verification on an affidavit or deed?",
  "📞 Hey! Tap me to speak directly with Co-Founder M Talha Cheema!",
  "💼 Seeking high-yield commercial plazas in DHA Phase 8?",
  "👋 Hey! I'm here everywhere on the page to solve your questions!",
];

const INITIAL_BOT_MESSAGE: ChatMessage = {
  id: "msg-0",
  sender: "bot",
  text: "Hello! I am Aero-Estate Bot 🤖, Property Files Network's autonomous AI Real Estate Advisor. I fly across the site to help you with instant rates, verification, and founder appointments. How can I assist you?",
  quickReplies: [
    { label: "📊 Check Today's File Rates", action: "rates" },
    { label: "🌊 MGH Mangla Waterfront Files", action: "mgh" },
    { label: "🏙️ DHA Lahore (Phases 6–10)", action: "dha" },
    { label: "🛡️ Verify an Affidavit File", action: "verify" },
    { label: "👤 Talk to Founders Directly", action: "founders" },
    { label: "🌍 Overseas Diaspora Desk", action: "overseas" },
  ],
  timestamp: "Just now",
};

export default function FloatingRoboticAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [waypointIndex, setWaypointIndex] = useState(0);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [showSpeechBubble, setShowSpeechBubble] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFlying, setIsFlying] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_BOT_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [flightCoords, setFlightCoords] = useState<{ x: number; y: number }>({
    x: 20,
    y: 110,
  });

  const waypointIndexRef = useRef(0);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Autonomous flight patrol loop
  useEffect(() => {
    // Initial placement at waypoint 0
    if (typeof window !== "undefined") {
      const initialWp = WAYPOINTS[0];
      setFlightCoords({
        x: initialWp.getX(window.innerWidth),
        y: initialWp.getY(window.innerHeight),
      });
    }

    const handleResize = () => {
      if (typeof window === "undefined") return;
      const currentIdx = waypointIndexRef.current;
      const wp = WAYPOINTS[currentIdx % WAYPOINTS.length];
      setFlightCoords({
        x: wp.getX(window.innerWidth),
        y: wp.getY(window.innerHeight),
      });
    };
    window.addEventListener("resize", handleResize);

    const performFlight = () => {
      if (isOpen || isHovered) return;
      if (typeof window === "undefined") return;

      const nextIdx = (waypointIndexRef.current + 1) % WAYPOINTS.length;
      waypointIndexRef.current = nextIdx;
      setWaypointIndex(nextIdx);

      const nextWp = WAYPOINTS[nextIdx];
      setIsFlying(true);
      setShowSpeechBubble(false);

      setFlightCoords({
        x: nextWp.getX(window.innerWidth),
        y: nextWp.getY(window.innerHeight),
      });

      setCurrentPromptIndex((prev) => (prev + 1) % ROBOT_PROMPTS.length);

      // Re-enable speech bubble after flight completes (approx 3.2s)
      setTimeout(() => {
        setIsFlying(false);
        setShowSpeechBubble(true);
      }, 3200);
    };

    // Quick initial launch in 2 seconds so user sees takeoff immediately
    const initialTimer = setTimeout(() => {
      performFlight();
    }, 2000);

    // Continuous patrol every 6.5 seconds
    const flightInterval = setInterval(() => {
      performFlight();
    }, 6500);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(flightInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, isHovered]);

  // Auto-scroll chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  const currentWp = WAYPOINTS[waypointIndex % WAYPOINTS.length];

  const handleQuickReply = (action: string, label: string) => {
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: label,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let botResponse: ChatMessage;

      switch (action) {
        case "rates":
          botResponse = {
            id: `bot-${Date.now()}`,
            sender: "bot",
            text: "Here are today's verified market rates:\n\n• MGH Mangla (1 Kanal Waterfront): PKR 68 – 78 Lakh\n• DHA Phase 9 Prism (1 Kanal): PKR 2.45 – 2.95 Crore\n• DHA Phase 10 (1 Kanal Allocation): PKR 38 – 45 Lakh\n• DHA Phase 8 Broadway (4M Commercial): PKR 7.80 – 9.60 Crore\n• MGH Mangla (10 Marla Lakefront): PKR 36 – 44 Lakh\n\nRates fluctuate based on daily trading volume. Would you like a live bid/ask quote directly on WhatsApp?",
            cta: {
              label: "Get Live Quote on WhatsApp",
              href: `https://wa.me/923234304259?text=${encodeURIComponent(
                "Hello Property Files Network, I would like today's verified rate quote."
              )}`,
              type: "whatsapp",
            },
            quickReplies: [
              { label: "🌊 MGH Mangla Details", action: "mgh" },
              { label: "🏙️ DHA Phase 9 Prism", action: "dha" },
              { label: "👤 Speak with Founders", action: "founders" },
            ],
            timestamp: "Just now",
          };
          break;

        case "mgh":
          botResponse = {
            id: `bot-${Date.now()}`,
            sender: "bot",
            text: "Mangla Garrison Housing (MGH Pakistan) is the country's #1 waterfront master development. We actively trade 1 Kanal and 10 Marla affidavit files featuring water sports clubs, 18-hole golf, and direct lakefront access.\n\nCo-Founder M Talha Cheema specializes personally in MGH affidavit trading.",
            cta: {
              label: "Consult M Talha Cheema on WhatsApp",
              href: `https://wa.me/923234304259?text=${encodeURIComponent(
                "Hello M Talha Cheema, I would like to consult on MGH affidavit files."
              )}`,
              type: "whatsapp",
            },
            quickReplies: [
              { label: "📊 Check MGH Rates", action: "rates" },
              { label: "🛡️ How to Verify MGH Files", action: "verify" },
            ],
            timestamp: "Just now",
          };
          break;

        case "dha":
          botResponse = {
            id: `bot-${Date.now()}`,
            sender: "bot",
            text: "We specialize across DHA Lahore:\n\n1. Phase 6: Raya Golf & prime ready possession\n2. Phase 8 Broadway: 200ft commercial boulevard (up to 12.8% rental yield)\n3. Phase 9 Prism: 40,000+ Kanals across 16 sectors with dedicated Ring Road interchange\n4. Phase 10: High-multiplier allocation files along proposed 300ft highway\n\nAll transactions are executed biometrically at DHA directorate.",
            cta: {
              label: "Discuss DHA Files on WhatsApp",
              href: `https://wa.me/923204154156?text=${encodeURIComponent(
                "Hello Property Files Network, I want to discuss DHA Lahore property files."
              )}`,
              type: "whatsapp",
            },
            quickReplies: [
              { label: "📊 View DHA File Rates", action: "rates" },
              { label: "👤 Speak with M Daud Ali Lashari", action: "founders" },
            ],
            timestamp: "Just now",
          };
          break;

        case "verify":
          botResponse = {
            id: `bot-${Date.now()}`,
            sender: "bot",
            text: "Our 3-Step Legal Safety Protocol protects you from bogus or duplicate files:\n\n1. Direct biometric verification at DHA Lahore / MGH Directorate\n2. Clean NDC (No Demand Certificate) and verified FBR tax ledger\n3. Safe in-person deed execution at Office 98-D, DHA Phase 8 Lahore\n\nWe provide 100% legal title assurance on every transaction.",
            cta: {
              label: "Verify an Affidavit File Now",
              href: `https://wa.me/923234304259?text=${encodeURIComponent(
                "Hello, I have a property file/affidavit and want to verify it under your 3-step safety protocol."
              )}`,
              type: "whatsapp",
            },
            quickReplies: [
              { label: "📊 Check Today's Rates", action: "rates" },
              { label: "👤 Chat with Founders", action: "founders" },
            ],
            timestamp: "Just now",
          };
          break;

        case "founders":
          botResponse = {
            id: `bot-${Date.now()}`,
            sender: "bot",
            text: "You can speak directly with our executive leadership at Office 98-D, DHA Phase 8, Lahore:\n\n• M Talha Cheema (Co-Founder): Head of File Trading & MGH/DHA Liquidity (+92 323 4304259)\n• M Daud Ali Lashari (Co-Founder): Director of Strategic Advisory & Commercial Plazas (+92 320 4154156)\n\nBoth lines are online right now on WhatsApp and direct call.",
            cta: {
              label: "Direct WhatsApp Hotline",
              href: COMPANY_INFO.whatsappUrl,
              type: "whatsapp",
            },
            quickReplies: [
              { label: "📊 Live Market Rates", action: "rates" },
              { label: "🌊 MGH Waterfront Files", action: "mgh" },
            ],
            timestamp: "Just now",
          };
          break;

        case "overseas":
          botResponse = {
            id: `bot-${Date.now()}`,
            sender: "bot",
            text: "Dedicated service for overseas Pakistanis in the UK, Mirpur diaspora, UAE, and North America:\n\n• Embassy-attested Special Power of Attorney (PoA) guidance\n• Legal fund transfers via Roshan Digital Account (RDA)\n• Multilingual consultation in English, Urdu, and Punjabi\n• Video inspections of plots and infrastructure",
            cta: {
              label: "Contact Diaspora Advisory Desk",
              href: `https://wa.me/923234304259?text=${encodeURIComponent(
                "Hello, I am an overseas investor and would like advisory on DHA/MGH files."
              )}`,
              type: "whatsapp",
            },
            quickReplies: [
              { label: "📊 Check Today's Rates", action: "rates" },
              { label: "🛡️ File Verification Protocol", action: "verify" },
            ],
            timestamp: "Just now",
          };
          break;

        default:
          botResponse = {
            id: `bot-${Date.now()}`,
            sender: "bot",
            text: "Thank you for reaching out! Would you like to check today's verified rates, consult on MGH affidavit files, or speak directly with our Co-Founders?",
            quickReplies: [
              { label: "📊 Live File Rates", action: "rates" },
              { label: "🌊 MGH Waterfront Files", action: "mgh" },
              { label: "👤 Connect on WhatsApp", action: "founders" },
            ],
            timestamp: "Just now",
          };
      }

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 600);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const text = inputValue.trim();
    setInputValue("");

    const lower = text.toLowerCase();
    let action = "default";
    if (lower.includes("rate") || lower.includes("price") || lower.includes("cost")) {
      action = "rates";
    } else if (lower.includes("mgh") || lower.includes("mangla") || lower.includes("water")) {
      action = "mgh";
    } else if (lower.includes("dha") || lower.includes("prism") || lower.includes("phase")) {
      action = "dha";
    } else if (lower.includes("verify") || lower.includes("fraud") || lower.includes("fake") || lower.includes("legal")) {
      action = "verify";
    } else if (lower.includes("founder") || lower.includes("cheema") || lower.includes("lashari") || lower.includes("call") || lower.includes("phone")) {
      action = "founders";
    } else if (lower.includes("overseas") || lower.includes("uk") || lower.includes("mirpur") || lower.includes("dubai") || lower.includes("foreign")) {
      action = "overseas";
    }

    handleQuickReply(action, text);
  };

  return (
    <>
      {/* 1. Autonomous Flying Robot Container (Glides across entire page) */}
      {!isOpen && (
        <div
          className="fixed top-0 left-0 z-[9999] pointer-events-none select-none"
          style={{
            transform: `translate3d(${flightCoords.x}px, ${flightCoords.y}px, 0px) rotate(${
              isFlying ? currentWp.tilt * 1.5 : 0
            }deg)`,
            transition: "transform 3.2s cubic-bezier(0.25, 1, 0.5, 1)",
            willChange: "transform",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative group cursor-pointer pointer-events-auto" onClick={() => setIsOpen(true)}>
            {/* Proactive Dynamic Speech Bubble (Aligns left or right based on screen position) */}
            {showSpeechBubble && (
              <div
                className={`absolute -top-16 w-60 sm:w-72 p-2.5 rounded-2xl glass-3d-dark border border-amber-400/50 text-white text-xs shadow-2xl animate-in fade-in zoom-in-95 duration-300 pointer-events-auto ${
                  currentWp.speechSide === "left"
                    ? "right-0 sm:right-2"
                    : "left-0 sm:left-2"
                }`}
              >
                <div className="flex items-center justify-between text-amber-300 text-[10px] font-bold mb-0.5">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400 animate-spin" />
                    <span>Aero-Estate Bot • Patrolling</span>
                  </span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                    Tap to Chat
                  </span>
                </div>
                <p className="text-slate-100 text-[11px] leading-snug font-medium">
                  {isHovered
                    ? "👋 Hey! Need help with property files? Tap me to chat!"
                    : ROBOT_PROMPTS[currentPromptIndex]}
                </p>
                {/* Pointer triangle */}
                <div
                  className={`absolute -bottom-1.5 w-3 h-3 bg-slate-900 border-r border-b border-amber-400/50 transform rotate-45 ${
                    currentWp.speechSide === "left" ? "right-8" : "left-8"
                  }`}
                />
              </div>
            )}

          {/* Futuristic Flying Robot Figure */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 animate-robot-levitate">
            {/* Holographic Plasma Thruster Jet Glow */}
            <div
              className={`absolute -bottom-2 inset-x-2 h-5 bg-gradient-to-t from-cyan-400 via-amber-400 to-transparent filter blur-md rounded-full transition-opacity duration-300 ${
                isFlying ? "opacity-95 scale-125" : "opacity-70 animate-thruster-pulse"
              }`}
            />

            {/* Jet Exhaust Flame Particles */}
            {isFlying && (
              <div className="absolute -bottom-3 inset-x-4 flex justify-center">
                <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
              </div>
            )}

            {/* Robot Head Structure */}
            <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 border-2 border-amber-400 shadow-2xl p-1.5 flex flex-col items-center justify-between group-hover:scale-110 group-hover:border-amber-300 transition-all duration-300">
              {/* Top Sensor Antenna with Pulsing Beacon */}
              <div className="absolute -top-2 inset-x-0 flex justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400 animate-ping" />
                  <div className="absolute w-2 h-2 rounded-full bg-amber-300" />
                </div>
              </div>

              {/* Digital Visor with Glowing Robot Eyes */}
              <div className="w-full h-7 rounded-xl bg-slate-950 border border-cyan-500/50 p-1 flex items-center justify-around overflow-hidden shadow-inner mt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-300 animate-robot-blink" />
                <div className="w-3 h-0.5 rounded-full bg-cyan-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-300 animate-robot-blink" />
              </div>

              {/* Lower Body Real Estate Emblem */}
              <div className="w-full flex items-center justify-between px-1 text-[8px] font-bold text-amber-300 font-serif">
                <span>AI</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>BOT</span>
              </div>
            </div>

            {/* Hover Tooltip */}
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950 text-white text-[10px] font-bold px-2 py-0.5 rounded border border-slate-700 whitespace-nowrap pointer-events-none shadow-md">
              Tap to Consult AI
            </div>
          </div>
        </div>
      </div>
    )}

      {/* 2. Interactive AI Assistant Dialog Modal */}
      {isOpen && (
        <div className="fixed inset-y-0 right-0 sm:inset-y-auto sm:bottom-6 sm:left-24 z-[9999] w-full sm:w-[390px] sm:max-h-[620px] bg-slate-950/95 backdrop-blur-2xl border-t sm:border border-white/15 sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Chat Header */}
          <div className="p-4 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 rounded-xl bg-slate-900 border border-amber-400/50 flex items-center justify-center text-amber-400 shadow-md">
                <Bot className="w-5 h-5 animate-bounce" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-950 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs font-serif font-bold text-white">
                    Aero-Estate Robotic Advisor
                  </h3>
                  <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[9px] font-bold border border-amber-500/30">
                    24/7 AI
                  </span>
                </div>
                <p className="text-[10px] text-slate-400">
                  Property Files Network • DHA Phase 8 Lahore
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages([INITIAL_BOT_MESSAGE])}
                title="Reset Chat"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs max-h-[380px] sm:max-h-[420px]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 shadow-sm ${
                    msg.sender === "user"
                      ? "bg-amber-500 text-slate-950 font-medium rounded-tr-xs"
                      : "bg-slate-900 border border-white/10 text-slate-200 rounded-tl-xs space-y-2"
                  }`}
                >
                  <p className="whitespace-pre-line leading-relaxed text-[11px] sm:text-xs">
                    {msg.text}
                  </p>

                  {/* Direct Action Link in Bot Message */}
                  {msg.cta && (
                    <div className="pt-2 border-t border-white/10">
                      <a
                        href={msg.cta.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] transition-colors shadow-xs"
                      >
                        <Phone className="w-3 h-3" />
                        <span>{msg.cta.label}</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Quick Reply Pills */}
                {msg.quickReplies && msg.quickReplies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 max-w-[95%]">
                    {msg.quickReplies.map((qr) => (
                      <button
                        key={qr.action}
                        onClick={() => handleQuickReply(qr.action, qr.label)}
                        className="px-2.5 py-1 rounded-full bg-slate-900 hover:bg-slate-800 text-amber-300 hover:text-white border border-amber-400/30 text-[10px] font-medium transition-all shadow-xs hover:scale-105"
                      >
                        {qr.label}
                      </button>
                    ))}
                  </div>
                )}

                <span className="text-[9px] text-slate-500 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-slate-900 border border-white/10 text-slate-400 w-24">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Shortcuts Bar */}
          <div className="px-4 py-2 border-t border-white/5 bg-slate-900/50 flex items-center justify-between text-[10px] text-slate-400">
            <span>Direct Call Hotlines:</span>
            <a
              href={`tel:${COMPANY_INFO.pakistanPhoneRaw}`}
              className="text-amber-400 font-semibold hover:underline"
            >
              {COMPANY_INFO.pakistanPhone}
            </a>
          </div>

          {/* Chat Input Field */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-slate-950 border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about MGH, DHA rates, or verification..."
              className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors shrink-0 shadow-sm font-bold"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* CSS Animations for Smooth Flying & Hover */}
      <style jsx global>{`
        @keyframes robot-levitate {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(1deg);
          }
        }

        @keyframes thruster-pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.15);
          }
        }

        @keyframes robot-blink {
          0%, 90%, 100% {
            opacity: 1;
            transform: scaleY(1);
          }
          95% {
            opacity: 0.2;
            transform: scaleY(0.1);
          }
        }

        .animate-robot-levitate {
          animation: robot-levitate 3s ease-in-out infinite;
        }

        .animate-thruster-pulse {
          animation: thruster-pulse 1.6s ease-in-out infinite;
        }

        .animate-robot-blink {
          animation: robot-blink 3.5s infinite;
        }
      `}</style>
    </>
  );
}
