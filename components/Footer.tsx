import React from 'react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">{APP_NAME}</h3>
            <p className="text-gray-400 text-sm">
              AI 기술로 언어 장벽을 허무는<br />
              글로벌 에듀테크 플랫폼
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-indigo-400">서비스</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">AI 튜터링</a></li>
              <li><a href="#" className="hover:text-white">비즈니스 영어</a></li>
              <li><a href="#" className="hover:text-white">커리큘럼</a></li>
              <li><a href="#" className="hover:text-white">요금제</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-indigo-400">회사</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">회사 소개</a></li>
              <li><a href="#" className="hover:text-white">채용</a></li>
              <li><a href="#" className="hover:text-white">블로그</a></li>
              <li><a href="#" className="hover:text-white">제휴 문의</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-indigo-400">지원</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">고객센터</a></li>
              <li><a href="#" className="hover:text-white">이용약관</a></li>
              <li><a href="#" className="hover:text-white">개인정보처리방침</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
