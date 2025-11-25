import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BookOpen, Trophy, Target, Clock } from 'lucide-react';
import { CURRICULUM_DATA, IMAGES } from '../constants';
import Button from '../components/Button';

const data = [
  { name: '1주', score: 20 },
  { name: '4주', score: 45 },
  { name: '8주', score: 65 },
  { name: '12주', score: 85 },
  { name: '16주', score: 95 },
];

const Curriculum: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">학습 커리큘럼</h1>
              <p className="text-lg text-gray-600">
                초보부터 원어민 수준까지, 당신의 목표에 맞춘 체계적인 로드맵을 확인하세요.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
               <img src={IMAGES.curriculum} alt="Curriculum" className="w-64 h-40 object-cover rounded-xl shadow-lg transform rotate-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Levels Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">레벨별 학습 로드맵</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CURRICULUM_DATA.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-indigo-500 transition-colors group">
              <div className="flex justify-between items-start mb-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  index === 0 ? 'bg-green-100 text-green-800' :
                  index === 1 ? 'bg-blue-100 text-blue-800' :
                  index === 2 ? 'bg-indigo-100 text-indigo-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {item.level}
                </span>
                <Clock size={16} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600">{item.target}</h3>
              <p className="text-sm text-gray-500 mb-4">예상 소요: {item.duration}</p>
              
              <div className="space-y-2">
                {item.focus.map((focus, i) => (
                  <div key={i} className="flex items-center text-sm text-gray-600">
                    <Target size={14} className="mr-2 text-indigo-400" />
                    {focus}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Graph Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">눈에 보이는 성장</h2>
              <p className="text-gray-600 mb-8">
                하루 10분 꾸준한 학습으로 3개월 후 달라진 모습을 확인하세요. LinguaFlow의 데이터 분석이 최적의 성장 곡선을 만들어드립니다.
              </p>
              <div className="flex gap-4">
                 <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    <span className="text-sm font-medium">유창성 점수</span>
                 </div>
              </div>
            </div>
            <div className="lg:w-2/3 w-full h-[400px] bg-gray-50 rounded-2xl p-4 border border-gray-100">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#4F46E5" 
                    strokeWidth={4} 
                    dot={{ r: 6, fill: '#4F46E5', strokeWidth: 2, stroke: '#fff' }} 
                    activeDot={{ r: 8 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Level Test CTA */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <div className="bg-indigo-900 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-800 rounded-full opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">내 레벨이 궁금하다면?</h2>
            <p className="text-indigo-200 mb-8">3분 만에 끝나는 AI 레벨 테스트로 정확한 실력을 진단받으세요.</p>
            <Button variant="secondary" size="lg">레벨 테스트 시작하기</Button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Curriculum;
