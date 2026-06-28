import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface AgeVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function AgeVerificationModal({ isOpen, onClose, onConfirm }: AgeVerificationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-brand-darker border border-white/10 rounded-none overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/40">
          <h2 className="text-xl font-display text-white uppercase tracking-wider">
            You must be 18+ to view this content
          </h2>
          <div className="flex-shrink-0 ml-4 w-12 h-12 rounded-full border-2 border-brand-olive flex items-center justify-center text-brand-olive font-display text-lg font-bold">
            18+
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-zinc-300 font-sans text-sm">
          <div>
            <h3 className="font-bold text-white mb-1 uppercase tracking-wider">No Medical Claims</h3>
            <p>Our products are not intended to diagnose, treat, cure or prevent disease.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-1 uppercase tracking-wider">Know Your Limits</h3>
            <p>Start slow and go slow. Everyone's experience is different.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-1 uppercase tracking-wider">Consume Responsibly</h3>
            <p>Enjoy mindfully and always respect your surroundings.</p>
          </div>
          
          <div className="pt-4 border-t border-white/10 text-center font-medium text-white italic">
            By entering this site you confirm that you are 18 years or older.
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 bg-black/40 flex flex-col space-y-3">
          <button 
            onClick={onConfirm}
            className="w-full py-4 bg-brand-olive hover:bg-brand-olive-dark text-white font-medium uppercase tracking-widest text-sm transition-colors"
          >
            I am 18 or older
          </button>
          <button 
            onClick={onClose}
            className="w-full py-4 border border-zinc-700 hover:border-white text-zinc-400 hover:text-white font-medium uppercase tracking-widest text-sm transition-colors"
          >
            I am under 18
          </button>
        </div>
      </div>
    </div>
  );
}
