import { NavItem, Testimonial, Feature, CurriculumItem } from './types';

export const APP_NAME = "LinguaFlow AI";

export const NAV_ITEMS: NavItem[] = [
  { label: '홈', path: '/' },
  { label: '커리큘럼', path: '/curriculum' },
  { label: 'AI 기능', path: '/features' },
  { label: '서비스 소개', path: '/about' },
  { label: '고객 지원', path: '/support' },
];

export const COLORS = {
  primary: '#4F46E5', // Indigo 600
  secondary: '#10B981', // Emerald 500
  background: '#F9FAFB', // Gray 50
  text: '#1F2937', // Gray 800
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "김지민",
    role: "직장인 (마케터)",
    content: "야근 때문에 학원 갈 시간이 없었는데, LinguaFlow로 출퇴근 10분씩 연습해서 오픽 IH 달성했어요!",
    avatar: "https://picsum.photos/id/1011/64/64"
  },
  {
    id: 2,
    name: "이준호",
    role: "대학생",
    content: "원어민 앞에서는 입이 얼어붙었는데, AI랑 편하게 대화하다 보니 자신감이 생겼습니다. 발음 교정이 진짜 대박.",
    avatar: "https://picsum.photos/id/1005/64/64"
  },
  {
    id: 3,
    name: "박서연",
    role: "취업 준비생",
    content: "면접 예상 질문을 AI가 해주고 피드백까지 주니까 혼자 준비할 때보다 훨씬 든든해요.",
    avatar: "https://picsum.photos/id/1027/64/64"
  }
];

export const FEATURES_LIST: Feature[] = [
  {
    id: 1,
    title: "실시간 발음 교정",
    description: "당신의 발음을 0.1초 단위로 분석하여 원어민에 가깝게 교정해드립니다.",
    icon: "mic"
  },
  {
    id: 2,
    title: "문맥 기반 문법 체크",
    description: "단순한 규칙 검사가 아닌, 대화의 맥락을 이해하고 자연스러운 표현을 제안합니다.",
    icon: "check-circle"
  },
  {
    id: 3,
    title: "24/7 무제한 회화",
    description: "새벽 2시에도, 주말에도. 당신이 원할 때 언제든 대화할 수 있는 튜터입니다.",
    icon: "clock"
  },
  {
    id: 4,
    title: "개인화된 학습 분석",
    description: "데이터 기반으로 취약점을 파악하고 최적의 학습 로드맵을 제공합니다.",
    icon: "bar-chart"
  }
];

export const CURRICULUM_DATA: CurriculumItem[] = [
  {
    level: "Lv.1 입문",
    target: "영어 왕초보",
    duration: "4주",
    focus: ["기초 발음", "필수 단어 500개", "자기소개"]
  },
  {
    level: "Lv.2 초급",
    target: "여행 가능 수준",
    duration: "8주",
    focus: ["여행 회화", "감정 표현", "기초 문법"]
  },
  {
    level: "Lv.3 중급",
    target: "비즈니스 회화",
    duration: "12주",
    focus: ["이메일 작성", "회의 표현", "설득하기"]
  },
  {
    level: "Lv.4 고급",
    target: "네이티브 수준",
    duration: "12주+",
    focus: ["관용구", "뉴스 토론", "문화적 뉘앙스"]
  }
];

// Specific images from the request
export const IMAGES = {
  hero: "https://loremflickr.com/1600/900/technology,learning",
  aiFeature: "https://loremflickr.com/1600/900/artificial_intelligence,speech",
  curriculum: "https://loremflickr.com/1600/900/library,books",
  team: "https://loremflickr.com/1600/900/startup,team",
  support: "https://loremflickr.com/1600/900/customer_service,headset"
};
