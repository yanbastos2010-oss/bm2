/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';

export default function App() {
  const [showDownsell, setShowDownsell] = useState(false);
  const [showBasicUpsell, setShowBasicUpsell] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState(0);
  const feedbacks = [
    'https://i.ibb.co/7dKNZt5Z/Chat-GPT-Image-4-de-jun-de-2026-23-52-30.png',
    'https://i.ibb.co/3yYjscWK/Chat-GPT-Image-5-de-jun-de-2026-00-10-56.png',
    'https://i.ibb.co/kTx74Dq/Chat-GPT-Image-5-de-jun-de-2026-00-12-32.png'
  ];

  // Optimize performance: Preload all feedback images into cache
  useEffect(() => {
    feedbacks.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);



  const nextFeedback = () => setCurrentFeedback((prev) => (prev + 1) % feedbacks.length);
  const prevFeedback = () => setCurrentFeedback((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Invisible SVG element defining the global red-orange gradient for icons */}
      <svg width="0" height="0" className="absolute invisible pointer-events-none">
        <defs>
          <linearGradient id="orange-red-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
      </svg>

      {/* Downsell Modal */}
      {showDownsell && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md max-h-[95vh] sm:max-h-[90vh] bg-white rounded-2xl md:rounded-[1.5rem] flex flex-col font-sans shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border-4 border-slate-900">
            <div className="bg-slate-900 text-center pt-5 pb-4 px-4 sm:pt-6 sm:px-6 sm:pb-5 relative shrink-0">
              <button 
                type="button" 
                onClick={() => setShowDownsell(false)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 text-white/80 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"></path></svg>
              </button>
              <div className="inline-block bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white text-[10px] sm:text-xs font-black uppercase px-3 py-1 rounded-full mb-2 sm:mb-3 tracking-wide">OFERTA ÚNICA</div>
              <h3 className="text-[22px] sm:text-3xl font-black italic tracking-tight leading-none uppercase text-white">ESPERA! NÃO VÁ EMBORA!</h3>
            </div>
            <div className="p-5 sm:p-8 text-center flex flex-col items-center overflow-y-auto">
              {/* CSS Cover mockup for Downsell */}
              <div className="relative mb-5 sm:mb-6 max-w-[140px] sm:max-w-[180px] shrink-0 mt-2 sm:mt-0">
                <div className="w-full bg-gradient-to-br from-slate-800 to-slate-950 rounded-lg p-4 border-r-4 border-slate-900 shadow-lg text-white aspect-[3/4] flex flex-col justify-between">
                  <div className="text-left">
                    <span className="bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white font-black text-[7px] px-1.5 py-0.5 rounded uppercase font-sans">COMPLETO</span>
                    <h4 className="text-[14px] font-black leading-tight tracking-tight uppercase-none mt-2">BOMBEIRO MIRIM</h4>
                    <span className="text-[8px] text-slate-300 uppercase block tracking-wider">250+ DINÂMICAS</span>
                  </div>
                  <div className="flex justify-center py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-yellow-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/>
                    </svg>
                  </div>
                  <span className="text-[7.5px] uppercase text-yellow-300 font-bold block text-center border-t border-white/20 pt-1.5 font-mono">MANUAL DIGITAL + BÔNUS</span>
                </div>
                <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white font-black text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full transform rotate-[-8deg] shadow-lg border-2 border-white">70% OFF</div>
              </div>
              <p className="text-slate-600 font-medium text-xs sm:text-sm mb-4 leading-relaxed max-w-[300px]">Leve o <strong className="text-slate-800">PACOTE COMPLETO</strong> agora com todos os bônus inclusos por um valor especial:</p>
              
              <ul className="text-left w-full space-y-2 mb-5 max-w-[320px] mx-auto text-xs sm:text-[13px]">
                {[
                  "+250 DINÂMICAS PARA BOMBEIROS MIRINS",
                  "ACESSO VITALÍCIO + ATUALIZAÇÕES",
                  "BÔNUS EXCLUSIVOS"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 font-bold text-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="url(#orange-red-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-5 sm:mb-6 flex flex-col items-center shrink-0">
                <div className="text-slate-400 line-through text-[10px] sm:text-xs font-semibold mb-1">De R$ 147,00</div>
                <div className="flex items-baseline justify-center text-slate-900 font-sans">
                  <span className="text-base sm:text-xl font-bold">R$</span><span className="text-5xl sm:text-6xl font-black tracking-tighter mx-1">14</span><span className="text-base sm:text-xl font-bold">,99</span>
                </div>
                <div className="text-stone-500 text-[10px] sm:text-xs font-black uppercase tracking-wide mt-1">ECONOMIZE +R$ 132,01 AGORA!</div>
              </div>
              <div className="w-full space-y-3 sm:space-y-4 shrink-0 mt-auto">
                <a href="https://checkout.pagmaterial.shop/VCCL1O8SD0WP" className="px-4 sm:px-8 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap animate-pulse-scale w-full bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white font-black text-[13px] sm:text-[14px] py-3.5 sm:py-4 rounded-xl shadow-lg hover:brightness-105 active:scale-95 uppercase tracking-wide">SIM! QUERO O COMPLETO (R$ 14,99)</a>
                <a href="https://checkout.pagmaterial.shop/VCCL1O8SD28C" onClick={() => setShowDownsell(false)} className="text-slate-500 text-center font-medium text-[11px] sm:text-xs hover:text-slate-800 transition-colors underline decoration-slate-300 underline-offset-4 pb-2 sm:pb-0 block w-full">Não, prefiro continuar com o básico por R$ 10,00</a>
              </div>
            </div>
            <div className="bg-slate-50 py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-center gap-3 sm:gap-6 border-t border-slate-100 shrink-0">
              <div className="flex items-center gap-1.5 text-slate-500 text-[10px] sm:text-[11px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check text-emerald-600" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Compra Segura
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 text-[10px] sm:text-[11px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                Acesso Imediato
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Basic Upsell Modal */}
      {showBasicUpsell && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-[385px] max-h-[95vh] sm:max-h-[92vh] bg-white rounded-2xl md:rounded-[1.5rem] flex flex-col font-sans shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="bg-slate-900 text-center pt-5 pb-4 px-5 sm:pt-6 sm:px-6 sm:pb-5 relative shrink-0">
              <button 
                type="button" 
                onClick={() => setShowBasicUpsell(false)}
                className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all cursor-pointer"
                aria-label="Fechar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
              <div className="inline-block bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white text-[10px] sm:text-xs font-black uppercase px-3 py-1 rounded-full mb-1.5 sm:mb-3 tracking-wide">OFERTA VÁLIDA SÓ NESTE MOMENTO</div>
              <h3 className="text-[19px] sm:text-2xl font-black italic tracking-tight leading-none uppercase text-white">Espere! Antes de finalizar...</h3>
            </div>
            
            <div className="px-4 py-4.5 sm:p-7 text-center flex flex-col items-center overflow-y-auto w-full">
              <p className="text-slate-600 font-semibold text-[12.5px] sm:text-sm mb-3.5 leading-relaxed max-w-[340px] mt-0.5 sm:mt-0">
                Você escolheu o plano básico de <strong className="text-slate-800">R$ 10,00</strong>, mas por apenas <span className="bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent font-black">R$ 9,90 a mais</span> pode liberar o <span className="text-slate-800 font-normal">Pacote Completo</span>, com acesso total a +250 Dinâmicas de Bombeiros Mirins e todos os bônus inclusos.
              </p>
 
               <div className="w-full mb-4 sm:mb-6 text-left shrink-0 max-w-[340px] mx-auto bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200">
                <div className="flex flex-col items-center pb-2.5 sm:pb-3.5 border-b border-slate-200/80">
                  <div className="flex items-baseline justify-center text-slate-900">
                    <span className="text-base sm:text-xl font-bold">R$</span><span className="text-[48px] sm:text-6xl font-black tracking-tighter mx-1 leading-none">19</span><span className="text-base sm:text-xl font-bold">,90</span>
                  </div>
                </div>
 
                <div className="space-y-2 sm:space-y-2.5 mt-2.5 sm:mt-3.5">
                  <div className="flex items-center gap-2 text-[10.5px] sm:text-[12px] font-bold text-slate-700 leading-tight">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="url(#orange-red-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span>+250 DINÂMICAS PARA BOMBEIROS MIRINS</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10.5px] sm:text-[12px] font-bold text-slate-700 leading-tight">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="url(#orange-red-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span>ACESSO VITALÍCIO + ATUALIZAÇÕES</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10.5px] sm:text-[12px] font-bold text-slate-700 leading-tight">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="url(#orange-red-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span>BÔNUS EXCLUSIVOS</span>
                  </div>
                </div>
              </div>
 
              <div className="w-full space-y-2.5 sm:space-y-4 shrink-0 mt-auto">
                <a 
                  href="https://checkout.pagmaterial.shop/VCCL1O8SD28A" 
                  className="px-5 transition-all flex items-center justify-center gap-2 cursor-pointer w-full bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white font-black text-[13px] sm:text-[15px] py-3.5 sm:py-4 rounded-xl shadow-[0_4px_20px_rgba(220,38,38,0.25)] hover:brightness-105 active:scale-95 uppercase tracking-wide text-center"
                >
                  SIM, QUERO O PLANO COMPLETO!
                </a>
                <a 
                  href="https://checkout.pagmaterial.shop/VCCL1O8SD28C" 
                  onClick={() => setShowBasicUpsell(false)} 
                  className="px-5 transition-all flex items-center justify-center gap-2 cursor-pointer w-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-600 hover:text-slate-900 font-extrabold text-[13px] sm:text-[15px] py-3.5 sm:py-4 rounded-xl active:scale-95 uppercase tracking-wide text-center"
                >
                  Não, prefiro o plano básico
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Top Banner Alert */}
      <div className="w-full bg-slate-950 py-2.5 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold tracking-wide text-slate-200">
          <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
          OFERTA VÁLIDA ATÉ HOJE <span className="text-white font-semibold">({new Date().toLocaleDateString('pt-BR')})</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto pt-8">
        <h1 className="text-[28px] sm:text-[34px] md:text-[40px] font-black leading-tight mb-4 md:mb-6 text-gray-900 text-center font-['Plus_Jakarta_Sans'] px-4">
          +250 Dinâmicas para <span className="bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent font-extrabold">Bombeiros Mirins</span> prontas para aplicar
        </h1>

        {/* Reinstated Original Image Mockup */}
        <div className="mb-8 md:mb-10 flex justify-center px-4 sm:px-0">
          <img 
            fetchPriority="high" 
            loading="eager" 
            width={420}
            height={420}
            alt="Bombeiro Mirim Mockup" 
            className="max-w-[340px] sm:max-w-[420px] w-full h-auto drop-shadow-md rounded-lg" 
            referrerPolicy="no-referrer" 
            src="https://i.ibb.co/VYHZkxPd/Untitled-design-20260509-105632-0000.png" 
          />
        </div>

        {/* Call to Action and Trust badges */}
        <div className="flex flex-col items-center pb-8 md:pb-14 mt-2">
          <button 
            type="button" 
            onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })} 
            className="w-[85%] max-w-[245px] sm:w-[230px] h-[52px] px-8 sm:px-10 rounded-full font-bold transition-all flex items-center justify-center gap-2 text-[14px] sm:text-base cursor-pointer whitespace-nowrap bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white hover:brightness-105 shadow-lg shadow-red-650/20 active:scale-95" 
          >
            Quero Agora!
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right shrink-0" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </button>
          <div className="mt-2.5 flex flex-col sm:flex-row items-center gap-2 justify-center">
            <div className="flex items-center gap-0.5">
              <span className="text-yellow-400 text-sm leading-none">⭐</span>
              <span className="text-yellow-400 text-sm leading-none">⭐</span>
              <span className="text-yellow-400 text-sm leading-none">⭐</span>
              <span className="text-yellow-400 text-sm leading-none">⭐</span>
              <span className="text-yellow-400 text-sm leading-none">⭐</span>
            </div>
            <p className="text-[13px] font-extrabold text-slate-700 tracking-wider uppercase">+5MIL AVALIAÇÕES</p>
          </div>
        </div>
      </div>

      {/* Section 1: What you receive */}
      <section className="py-12 md:py-16 bg-stone-50 border-t-4 border-white font-sans">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 px-4 sm:px-0">O Que Você Vai Receber</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Card 1: +250 Dinâmicas prontas */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-slate-200 hover:shadow-lg transition-all flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#DC2626] to-[#F97316] rounded-xl flex items-center justify-center text-white mb-5 shadow-[0_4px_12px_rgba(220,38,38,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy w-6 h-6 shrink-0" aria-hidden="true"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-tight">+250 Dinâmicas Prontas</h3>
              <p className="text-[13px] sm:text-sm text-stone-600 leading-relaxed font-sans">Dinâmicas organizadas e fáceis de aplicar em treinamentos e aulas práticas. É só abrir e aplicar.</p>
            </div>

            {/* Card 2: Para Todos os Níveis */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-slate-200 hover:shadow-lg transition-all flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#DC2626] to-[#F97316] rounded-xl flex items-center justify-center text-white mb-5 shadow-[0_4px_12px_rgba(220,38,38,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-6 h-6 shrink-0" aria-hidden="true"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-tight">Para Todas as Idades</h3>
              <p className="text-[13px] sm:text-sm text-stone-600 leading-relaxed font-sans">Atividades adaptadas do infantil ao juvenil (5 a 14 anos) com foco prático.</p>
            </div>

            {/* Card 3: 100% Organizado */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-slate-200 hover:shadow-lg transition-all flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#DC2626] to-[#F97316] rounded-xl flex items-center justify-center text-white mb-5 shadow-[0_4px_12px_rgba(220,38,38,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-6 h-6 shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-tight">100% Organizadas</h3>
              <p className="text-[13px] sm:text-sm text-stone-600 leading-relaxed font-sans">Separadas por módulos de desenvolvimento (Primeiros Socorros, Cidadania, Liderança, Trabalho em Equipe e Disciplina).</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE BÔNUS - Requested by user to be placed right below "O Que Você Vai Receber" */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-orange-50/20 to-red-50/20 border-t-4 border-white font-sans">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-10">
            <span className="inline-block bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white text-[10px] sm:text-xs font-black uppercase px-3 py-1 rounded-full mb-3 tracking-wide">BÔNUS EXCLUSIVOS</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 px-4 sm:px-0">Garanta Hoje e Leve Tudo Isso de Graça</h2>
            <p className="text-stone-600 text-sm md:text-base font-semibold mt-2 px-4">Materiais complementares inclusos gratuitamente no Plano Completo</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Card Bonus 1 */}
            <div className="bg-white p-5 rounded-2xl border-2 border-red-100 hover:border-orange-200 hover:shadow-lg transition-all flex items-center gap-4 relative overflow-hidden">
              <div className="w-12 h-12 bg-gradient-to-br from-[#DC2626] to-[#F97316] rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-6 h-6" aria-hidden="true"><circle cx="12" cy="8" r="7"></circle><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"></path></svg>
              </div>
              <div className="text-left">
                <h3 className="text-[15px] font-extrabold text-slate-900 leading-tight">Certificado de Conclusão</h3>
                <span className="text-[14px] font-bold text-red-600 line-through block mt-0.5">R$ 27</span>
              </div>
            </div>

            {/* Card Bonus 2 */}
            <div className="bg-white p-5 rounded-2xl border-2 border-red-100 hover:border-orange-200 hover:shadow-lg transition-all flex items-center gap-4 relative overflow-hidden">
              <div className="w-12 h-12 bg-gradient-to-br from-[#DC2626] to-[#F97316] rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-check w-6 h-6" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
              </div>
              <div className="text-left">
                <h3 className="text-[15px] font-extrabold text-slate-900 leading-tight">Quiz Interativo</h3>
                <span className="text-[14px] font-bold text-red-600 line-through block mt-0.5">R$ 33</span>
              </div>
            </div>

            {/* Card Bonus 3 */}
            <div className="bg-white p-5 rounded-2xl border-2 border-red-100 hover:border-orange-200 hover:shadow-lg transition-all flex items-center gap-4 relative overflow-hidden">
              <div className="w-12 h-12 bg-gradient-to-br from-[#DC2626] to-[#F97316] rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame w-6 h-6" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
              </div>
              <div className="text-left">
                <h3 className="text-[15px] font-extrabold text-slate-900 leading-tight">Manual de Prevenção de Incêndios em Casa e Escola</h3>
                <span className="text-[14px] font-bold text-red-600 line-through block mt-0.5">R$ 37</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-16 md:py-20 bg-white" id="feedbacks">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 px-4 sm:px-0 whitespace-nowrap">Feedbacks de quem usou</h2>
          </div>
          <div className="max-w-[280px] sm:max-w-xl mx-auto relative group">
            <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl bg-slate-900">
              <div 
                className="flex transition-transform duration-500 ease-out" 
                style={{ transform: `translateX(-${currentFeedback * 100}%)` }}
              >
                {feedbacks.map((src, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img loading="lazy" decoding="async" alt={`Feedback ${index + 1}`} className="w-full h-auto object-cover" src={src} referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Testimonial slider navigation buttons */}
            <button 
              onClick={prevFeedback}
              className="absolute left-[-15px] sm:left-[-30px] top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-50 transition-all shadow-lg z-30 cursor-pointer border border-stone-200" 
              aria-label="Feedback anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left sm:hidden" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left hidden sm:block" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
            </button>
            <button 
              onClick={nextFeedback}
              className="absolute right-[-15px] sm:right-[-30px] top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-50 transition-all shadow-lg z-30 cursor-pointer border border-stone-200" 
              aria-label="Próximo feedback"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right sm:hidden" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right hidden sm:block" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
            </button>
            
            {/* Feedback slider index dot markers */}
            <div className="flex justify-center gap-2 mt-8">
              {feedbacks.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentFeedback(index)}
                  className={`h-2 sm:h-3 rounded-full transition-all cursor-pointer ${currentFeedback === index ? 'bg-gradient-to-r from-[#DC2626] to-[#F97316] w-6 sm:w-8' : 'bg-slate-300 w-2 sm:w-3'}`} 
                  id={`feedback-dot-${index}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Options */}
      <section id="oferta" className="py-12 md:py-20 px-4 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 md:mb-4 px-4 sm:px-0">Escolha seu Plano</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-2 sm:px-0">
            {/* PLAN 1: R$10 (Standard / Básico) */}
            <div className="bg-white p-6 sm:p-10 rounded-2xl border-2 border-slate-200 flex flex-col relative shadow-md text-slate-800 hover:border-slate-350 transition-all">
              <h3 className="text-xl sm:text-2xl font-black mb-2 text-center text-slate-900 mt-2 sm:mt-0">Plano Básico</h3>
              
              <div className="text-center w-full mb-8">
                <div className="text-slate-400 line-through text-sm mb-1">R$ 47,00</div>
                <div className="flex items-baseline justify-center mb-1 text-slate-950">
                  <span className="text-xl sm:text-2xl font-bold">R$</span><span className="text-5xl sm:text-6xl font-bold tracking-tight">10</span><span className="text-xl sm:text-2xl font-bold">,00</span>
                </div>
                <div className="text-slate-500 text-xs mt-1">pagamento único</div>
              </div>

              <ul className="text-left w-full space-y-4 mb-8">
                {[
                  { name: "+250 Dinâmicas para Bombeiros Mirins", isAvailable: true },
                  { name: "Acesso Digital", isAvailable: true },
                  { name: "Garantia de 7 dias", isAvailable: true },
                  { name: "Bônus Exclusivos", isAvailable: false },
                  { name: "Atualizações Mensais", isAvailable: false },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] sm:text-sm">
                    {item.isAvailable ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="url(#orange-red-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m15 9-6 6"></path>
                        <path d="m9 9 6 6"></path>
                      </svg>
                    )}
                    <span className="leading-tight text-slate-700">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-center gap-3 w-full mt-auto">
                <button 
                  type="button"
                  onClick={() => setShowBasicUpsell(true)}
                  className="w-[85%] max-w-[240px] sm:w-[220px] h-[50px] px-8 sm:px-10 border border-stone-200 rounded-full font-bold transition-all flex items-center justify-center gap-2 text-[14px] sm:text-base cursor-pointer whitespace-nowrap bg-slate-900 text-white hover:bg-slate-850 shadow-sm hover:shadow animate-scale-pulse" 
                >
                  Comprar agora!
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right shrink-0" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </button>
                <div className="text-slate-500 text-xs font-medium italic">Acesso Imediato e Vitalício</div>
              </div>
            </div>

            {/* PLAN 2: R$27 (Premium / Profissional Completo) */}
            <div className="bg-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-800 flex flex-col relative shadow-xl text-white">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white font-extrabold px-6 py-1.5 rounded-full text-xs flex items-center gap-2 whitespace-nowrap uppercase tracking-wider shadow-md">Mais Escolhido</div>
              <h3 className="text-xl sm:text-2xl font-extrabold mb-2 text-center text-white mt-2 sm:mt-0">Plano Completo</h3>
              
              <div className="mt-4"></div>

              <div className="text-center w-full mb-8">
                <div className="text-slate-400 line-through text-sm mb-1">R$ 97,00</div>
                <div className="flex items-baseline justify-center mb-1 text-white">
                  <span className="text-xl sm:text-2xl font-bold">R$</span><span className="text-5xl sm:text-6xl font-black tracking-tight">27</span><span className="text-xl sm:text-2xl font-bold">,00</span>
                </div>
                <div className="text-slate-400 text-xs mt-1">pagamento único</div>
              </div>

              <ul className="text-left w-full space-y-4 mb-8">
                {[
                  "+250 Dinâmicas para Bombeiros Mirins",
                  "Organizadas por Categorias",
                  "Método Passo a Passo",
                  "+ Bônus Exclusivos",
                  "Atualizações Mensais",
                  "Entrega via Email",
                  "Suporte VIP 24/7",
                  "Garantia de 7 dias"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-[13px] sm:text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="url(#orange-red-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-center gap-3 w-full mt-auto">
                <a 
                  href="https://checkout.pagmaterial.shop/VCCL1O8SD28B" 
                  className="w-[85%] max-w-[240px] sm:w-[220px] h-[50px] px-8 sm:px-10 rounded-full font-bold transition-all flex items-center justify-center gap-2 text-[14px] sm:text-base cursor-pointer whitespace-nowrap bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white hover:brightness-105 shadow-md hover:shadow-lg animate-scale-pulse" 
                >
                  Comprar agora!
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right shrink-0" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
                <div className="text-slate-400 text-xs font-medium italic">Acesso Imediato e Vitalício</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-8 md:mb-10 text-gray-900 font-sans">Dúvidas Frequentes</h2>
          {[
            {
              q: "Como vou receber o acesso?",
              a: "O envio é 100% imediato e automático por WhatsApp e E-mail logo após a aprovação do pagamento."
            },
            {
              q: "O acesso é vitalício?",
              a: "Sim! Comprando uma única vez você tem direito permanente aos manuais e pode consultar e baixar os arquivos sempre que quiser."
            },
            {
              q: "Para quem servem as dinâmicas?",
              a: "Para coordenadores, instrutores, militares e voluntários que atuam diretamente na instrução e desenvolvimento de Bombeiros Mirins."
            },
            {
              q: "Preciso de materiais caros ou exclusivos de bombeiro para aplicar?",
              a: "Não! A grande maioria das atividades utiliza materiais simples e de baixo custo como cones, garrafas plásticas, giz de lousa, bexigas e cordas, priorizando gincanas de criatividade, superação e cooperação."
            },
            {
              q: "Como funciona a garantia de 7 dias?",
              a: "Nossa garantia de reembolso é incondicional. Se você não gostar do material por qualquer motivo, basta solicitar e faremos a devolução total sem burocracia."
            }
          ].map((faq, i) => (
            <details key={i} className="group border border-red-600/20 rounded-lg mb-3 bg-white overflow-hidden text-left">
              <summary className="w-full text-left px-4 py-3 md:px-5 md:py-4 font-semibold text-gray-800 flex justify-between items-center focus:outline-none hover:bg-stone-50 text-sm md:text-base cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                {faq.q}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-5 h-5 text-red-600 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
              </summary>
              <div className="px-4 pb-4 md:px-5 md:pb-5 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 md:py-10 px-4 text-center text-xs md:text-sm">
        <div className="max-w-4xl mx-auto">
          <p className="font-extrabold text-slate-300">© 2026 Bombeiros Mirins - Dinâmicas Criativas. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
