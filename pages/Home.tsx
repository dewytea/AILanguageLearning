import React from 'react';
import { ArrowRight, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import AITutorDemo from '../components/AITutorDemo';
import { TESTIMONIALS, FEATURES_LIST, IMAGES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Learning Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 font-medium text-sm">
              ✨ 24시간 언제나 만나는 나만의 튜터
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              원어민 없이도 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                완벽한 프리토킹
              </span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              영어 울렁증, 이제 그만. 실시간 발음 교정과 문맥을 이해하는 AI 튜터와 함께 가장 빠른 성장을 경험하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="shadow-lg shadow-indigo-500/30">
                7일 무료 체험 시작하기
              </Button>
              <Link to="/features">
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40">
                  기능 더 알아보기
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-900 flex items-center justify-center text-xs overflow-hidden">
                     <img src={`https://picsum.photos/id/${100 + i}/32/32`} alt="user" />
                  </div>
                ))}
              </div>
              <p>10,000+ 명의 사용자가 학습 중</p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
             <AITutorDemo />
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">왜 영어가 늘지 않을까요?</h2>
            <p className="text-lg text-gray-600">
              "말할 기회가 없어서", "틀릴까 봐 부끄러워서", "학원 갈 시간이 없어서"<br/>
              LinguaFlow는 이 모든 문제를 기술로 해결했습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🤐</span>
              </div>
              <h3 className="text-xl font-bold mb-3">침묵하는 영어</h3>
              <p className="text-gray-600">눈으로만 보는 공부는 이제 그만. AI가 끊임없이 대화를 유도하고 입을 열게 만듭니다.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-bold mb-3">부족한 시간</h3>
              <p className="text-gray-600">하루 10분만 투자하세요. 출퇴근길, 잠들기 전 언제 어디서나 학습이 가능합니다.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">💸</span>
              </div>
              <h3 className="text-xl font-bold mb-3">비싼 수강료</h3>
              <p className="text-gray-600">원어민 과외의 1/10 가격으로 24시간 나만을 위한 1:1 과외 선생님을 고용하세요.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Summary */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
               <img 
                src={IMAGES.aiFeature} 
                alt="AI Features" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]" 
              />
            </div>
            <div className="md:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                데이터가 증명하는<br/>확실한 실력 향상
              </h2>
              <div className="space-y-6">
                {FEATURES_LIST.map((feature) => (
                  <div key={feature.id} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                      <Check size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link to="/features" className="text-indigo-600 font-semibold hover:text-indigo-700 inline-flex items-center">
                  모든 기능 자세히 보기 <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">먼저 시작한 분들의 생생한 후기</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 mb-6 min-h-[80px]">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            망설이는 순간에도<br/>영어 실력은 제자리입니다.
          </h2>
          <p className="text-indigo-100 text-lg mb-10">
            지금 시작하면 모든 프리미엄 기능을 7일간 무료로 체험하실 수 있습니다.<br/>
            언제든 위약금 없이 해지 가능합니다.
          </p>
          <Button size="lg" variant="secondary" className="px-12 py-4 text-lg font-bold shadow-xl">
            무료 체험 시작하기
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
