"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, Square } from "lucide-react";

interface AudioPlayerProps {
  title: string;
  content: string;
}

export default function AudioPlayer({ title, content }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [progress, setProgress] = useState(0);

  // We need a ref to track the utterance so we don't lose it to garbage collection on some browsers
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    // Load voices and pick a good English one
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      // Try to find a premium/realistic voice (e.g., Samantha, Daniel, Alex, or Google voices)
      const preferredVoices = ["Samantha", "Daniel", "Alex", "Google UK English Male", "Google US English"];
      let selectedVoice = voices.find(v => preferredVoices.includes(v.name));
      if (!selectedVoice) {
        selectedVoice = voices.find(v => v.lang.startsWith("en")) || voices[0];
      }
      setVoice(selectedVoice || null);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handlePlayPause = () => {
    if (!window.speechSynthesis) return;

    if (isPlaying && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    } else if (isPlaying && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      // Start playing
      const utterance = new SpeechSynthesisUtterance(`${title}. ${content}`);
      if (voice) utterance.voice = voice;
      utterance.rate = 0.95; // Slightly slower for a more natural reading pace
      utterance.pitch = 1;

      utterance.onstart = () => {
        setIsPlaying(true);
        setIsPaused(false);
      };

      utterance.onend = () => {
        setIsPlaying(false);
        setIsPaused(false);
        setProgress(0);
      };

      utterance.onboundary = (e) => {
        // Approximate progress based on character count
        const totalChars = (title.length + content.length);
        if (totalChars > 0) {
          setProgress((e.charIndex / totalChars) * 100);
        }
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
  };

  return (
    <div className="sticky top-24 z-40 bg-[rgba(10,10,15,0.8)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-full p-2 flex items-center gap-4 max-w-fit mx-auto mb-12 shadow-2xl transition-all duration-300">
      <button 
        onClick={handlePlayPause}
        className="w-10 h-10 rounded-full bg-[var(--text-primary)] text-black flex items-center justify-center hover:scale-105 hover:bg-[var(--chrome-light)] transition-all shrink-0"
        aria-label={isPlaying && !isPaused ? "Pause reading" : "Listen to article"}
      >
        {isPlaying && !isPaused ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-1" />}
      </button>
      
      {isPlaying && (
        <button 
          onClick={handleStop}
          className="w-8 h-8 rounded-full border border-[rgba(255,255,255,0.2)] text-[var(--text-secondary)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] hover:text-[var(--text-primary)] transition-all shrink-0"
          aria-label="Stop reading"
        >
          <Square size={12} fill="currentColor" />
        </button>
      )}

      <div className="flex flex-col gap-1 pr-4 min-w-[140px] md:min-w-[200px]">
        <div className="flex items-center gap-2">
          <Volume2 size={14} className="text-[var(--chrome-light)]" />
          <span className="text-[0.75rem] font-medium uppercase tracking-widest text-[var(--text-primary)]">
            {isPlaying && !isPaused ? "Playing" : isPlaying && isPaused ? "Paused" : "Listen"}
          </span>
        </div>
        <div className="w-full h-1 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[var(--chrome-dark)] to-[var(--chrome-light)] transition-all duration-300 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
