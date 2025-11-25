import React from 'react';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Everyone Deserves a Global Voice</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            우리는 언어가 장벽이 아닌, 새로운 기회의 창이 되는 세상을 만듭니다.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <img src={IMAGES.team} alt="Team" className="rounded-2xl shadow-lg w-full h-96 object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">설립 배경</h2>
            <p className="text-gray-600 leading-relaxed">
              LinguaFlow는 2023년, 구글과 딥마인드 출신의 엔지니어들이 모여 설립했습니다. 
              기존의 주입식 영어 교육이 가진 한계를 AI 기술로 극복하고자 했습니다.
            </p>
            <p className="text-gray-600 leading-relaxed">
              "왜 우리는 10년을 공부해도 외국인 앞에서 말 한마디 못할까?"라는 질문에서 시작하여, 
              이제는 전 세계 10만 명이 사용하는 글로벌 에듀테크 서비스로 성장했습니다.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-indigo-900 rounded-3xl p-12 text-white mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-indigo-300">사용자 만족도</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5M+</div>
              <div className="text-indigo-300">대화 데이터</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-indigo-300">국가 서비스</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24h</div>
              <div className="text-indigo-300">평균 응답시간</div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">우리의 미션</h2>
            <p className="text-2xl font-light text-gray-600 italic">
              "To democratize language learning through artificial intelligence."
            </p>
            <p className="text-gray-500">
              누구나 비용 걱정 없이 최고의 교육을 받을 수 있도록 기술을 연구합니다.
            </p>
        </div>

      </div>
    </div>
  );
};

export default About;
