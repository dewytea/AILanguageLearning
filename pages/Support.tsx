import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, Phone, MapPin } from 'lucide-react';
import Button from '../components/Button';
import { IMAGES } from '../constants';

const FAQ_DATA = [
  {
    q: "무료 체험 기간이 끝나면 자동으로 결제되나요?",
    a: "아닙니다. 무료 체험 기간 7일이 종료되기 하루 전에 알림을 드리며, 사용자가 직접 유료 전환을 선택하지 않으면 결제되지 않습니다."
  },
  {
    q: "AI 튜터와 어떤 주제로 대화할 수 있나요?",
    a: "일상 대화부터 비즈니스, 여행, 시사 문제, 심지어 연애 상담까지 거의 모든 주제로 대화가 가능합니다."
  },
  {
    q: "영어를 전혀 못하는 왕초보도 가능한가요?",
    a: "네, 가능합니다. 레벨 테스트를 통해 왕초보 모드로 설정되면, 한국어 설명을 섞어서 천천히 진행하며, 추천 답변 기능도 제공됩니다."
  },
  {
    q: "환불 정책은 어떻게 되나요?",
    a: "결제 후 7일 이내, 사용 이력이 없는 경우 100% 환불해 드립니다."
  }
];

const Support: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      
      {/* Hero */}
      <div className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">무엇을 도와드릴까요?</h1>
          <p className="text-gray-600">자주 묻는 질문을 확인하거나 직접 문의를 남겨주세요.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
        
        {/* Left Column: FAQ */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">자주 묻는 질문 (FAQ)</h2>
          <div className="space-y-4">
            {FAQ_DATA.map((item, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-medium text-gray-900">{item.q}</span>
                  {openIndex === index ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100 mt-2">
                    <div className="pt-4">{item.a}</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-indigo-50 rounded-2xl p-6 flex items-center gap-6">
             <img src={IMAGES.support} alt="Support Agent" className="w-20 h-20 rounded-full object-cover border-2 border-white" />
             <div>
               <h3 className="font-bold text-indigo-900">아직 해결되지 않았나요?</h3>
               <p className="text-indigo-700 text-sm mb-2">전문 상담원이 친절하게 안내해 드립니다.</p>
               <a href="mailto:support@linguaflow.ai" className="text-indigo-600 font-semibold text-sm underline">support@linguaflow.ai</a>
             </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 h-fit">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">1:1 문의하기</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" placeholder="홍길동" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" placeholder="example@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">문의 유형</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white">
                <option>기술 지원</option>
                <option>결제/환불</option>
                <option>제휴 문의</option>
                <option>기타</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">내용</label>
              <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" placeholder="문의하실 내용을 자세히 적어주세요."></textarea>
            </div>
            <Button fullWidth size="lg">문의하기</Button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Support;
