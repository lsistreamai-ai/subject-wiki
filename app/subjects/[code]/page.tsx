import Link from 'next/link'

const subjects = [
  { name: 'Chinese Language', code: 'CHIN' },
  { name: 'English Language', code: 'ENG' },
  { name: 'Mathematics', code: 'MATH' },
]

// Mock topic data (will connect to Supabase later)
const topicsData: Record<string, { title: string; title_zh: string; level: string[]; count: number }[]> = {
  CHIN: [
    { title: 'Reading Comprehension', title_zh: '閱讀理解', level: ['P1', 'P2', 'P3'], count: 15 },
    { title: 'Writing Skills', title_zh: '寫作技巧', level: ['P4', 'P5', 'P6'], count: 12 },
    { title: 'Grammar', title_zh: '語法', level: ['P1', 'P2'], count: 8 },
    { title: 'Classical Chinese', title_zh: '文言文', level: ['S1', 'S2', 'S3'], count: 10 },
  ],
  ENG: [
    { title: 'Reading', title_zh: '閱讀', level: ['P1', 'P2', 'P3'], count: 18 },
    { title: 'Writing', title_zh: '寫作', level: ['P4', 'P5', 'P6'], count: 14 },
    { title: 'Grammar', title_zh: '語法', level: ['P1', 'P2', 'P3'], count: 12 },
    { title: 'Speaking', title_zh: '口語', level: ['S1', 'S2'], count: 8 },
    { title: 'DSE Paper 1', title_zh: 'DSE 卷一', level: ['DSE'], count: 10 },
  ],
  MATH: [
    { title: 'Numbers & Operations', title_zh: '數字與運算', level: ['P1', 'P2'], count: 12 },
    { title: 'Fractions', title_zh: '分數', level: ['P4', 'P5', 'P6'], count: 8 },
    { title: 'Geometry', title_zh: '幾何', level: ['P3', 'P4', 'P5'], count: 10 },
    { title: 'Algebra', title_zh: '代數', level: ['S1', 'S2', 'S3'], count: 15 },
    { title: 'Trigonometry', title_zh: '三角學', level: ['S4', 'S5'], count: 12 },
    { title: 'Calculus', title_zh: '微積分', level: ['DSE'], count: 8 },
  ],
}

const colors: Record<string, string> = {
  CHIN: 'bg-red-500',
  ENG: 'bg-blue-500',
  MATH: 'bg-green-500',
  LS: 'bg-purple-500',
  PHY: 'bg-yellow-500',
  CHEM: 'bg-orange-500',
  BIO: 'bg-teal-500',
  ECON: 'bg-indigo-500',
  HIST: 'bg-pink-500',
  GEOG: 'bg-cyan-500',
}

export default function SubjectPage({ params }: { params: { code: string } }) {
  const subject = subjects.find(s => s.code === params.code)
  const topics = topicsData[params.code] || []
  const subjectColor = colors[params.code] || 'bg-gray-500'

  if (!subject) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-gray-900">Subject Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block">← Back to Subjects</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Subjects</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{subject.name}</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className={`w-2 h-16 rounded-full ${subjectColor}`}></div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{subject.name}</h1>
            <p className="text-gray-500 text-lg">{topics.length} Topics • Primary • Secondary • DSE</p>
          </div>
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {['All', 'P1-P3', 'P4-P6', 'S1-S3', 'S4-S6', 'DSE'].map(level => (
            <button
              key={level}
              className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              {level}
            </button>
          ))}
        </div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {topics.map((topic, i) => (
            <Link
              key={i}
              href={`/subjects/${params.code}/${topic.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group p-6 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg">{topic.title}</h3>
                  <p className="text-gray-500 text-sm">{topic.title_zh}</p>
                </div>
                <span className="text-2xl text-gray-200 group-hover:text-gray-300 transition-colors">→</span>
              </div>
              
              <div className="flex items-center gap-3 mt-4">
                <div className="flex gap-1">
                  {topic.level.map(l => (
                    <span key={l} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded font-medium">
                      {l}
                    </span>
                  ))}
                </div>
                <span className="text-gray-400 text-sm">{topic.count} items</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-gray-400">
          <p>Content managed by teachers via EduPilot</p>
        </div>
      </div>
    </main>
  )
}
