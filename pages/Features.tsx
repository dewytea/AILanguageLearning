import React from 'react';
import { Mic, Activity, MessageSquare, Brain, Zap, Layers } from 'lucide-react';
import { IMAGES } from '../constants';

const Features: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI 기술의 정점</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            LinguaFlow는 단순한 챗봇이 아닙니다. 최신 자연어 처리 모델과 음성 인식 기술이 결합된 당신의 지능형 파트너입니다.
          </p>
        </div>
      </div>

      {/* Main Feature Visualization */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <img 
          src={IMAGES.aiFeature} 
          alt="AI Visualization" 
          className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-white"
        />
      </div>

      {/* Detailed Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div className="space-y-6">
            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
              <Mic size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">초정밀 음성 인식 (STT)</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              사용자의 발음을 음소 단위로 분해하여 분석합니다. 억양, 강세, 리듬까지 파악하여 원어민과의 일치율을 %로 보여주고, 구체적인 교정 가이드를 제공합니다.
            </p>
            <ul className="space-y-3 pt-4">
              <li className="flex items-center text-gray-700"><Zap size={16} className="text-yellow-500 mr-2"/> 노이즈 캔슬링 적용</li>
              <li className="flex items-center text-gray-700"><Zap size={16} className="text-yellow-500 mr-2"/> 0.1초 이내 빠른 반응 속도</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
             <div className="font-mono text-sm text-gray-500 mb-2">Analyzing...</div>
             <div className="space-y-4">
               <div className="flex gap-4 items-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 w-full">
                    <p className="text-gray-800">I go to school yesterday.</p>
                  </div>
               </div>
               <div className="flex gap-4 items-start justify-end">
                  <div className="bg-indigo-600 p-3 rounded-lg shadow-sm w-full text-white">
                    <p className="font-semibold text-indigo-200 text-xs mb-1">AI Feedback</p>
                    <p>과거 시제 오류가 감지되었습니다.</p>
                    <p className="mt-1 font-mono bg-indigo-700 p-1 rounded">"I <span className="text-yellow-300 underline">went</span> to school yesterday."</p>
                  </div>
               </div>
             </div>
          </div>

          <div className="order-4 md:order-3 bg-gray-50 rounded-2xl p-8 border border-gray-100 flex items-center justify-center">
             <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                   <Brain size={32} className="mx-auto text-purple-500 mb-2"/>
                   <div className="font-bold">Context Aware</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                   <Activity size={32} className="mx-auto text-green-500 mb-2"/>
                   <div className="font-bold">Real-time</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm text-center col-span-2">
                   <Layers size={32} className="mx-auto text-blue-500 mb-2"/>
                   <div className="font-bold">Deep Learning</div>
                </div>
             </div>
          </div>

          <div className="order-3 md:order-4 space-y-6">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">
              <MessageSquare size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">맥락을 이해하는 대화 엔진</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              단순히 문장을 번역하는 것이 아닙니다. 이전 대화 내용을 기억하고, 사용자의 관심사를 파악하여 끊임없이 새로운 대화 주제를 던져줍니다.
            </p>
            <p className="text-gray-600">
              비즈니스 미팅, 호텔 체크인, 소개팅 등 500개 이상의 시나리오 롤플레잉이 가능합니다.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Features;
