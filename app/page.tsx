import Link from 'next/link'

const subjects = [
  { name: 'Chinese Language', code: 'CHIN', level: 'dse', color: 'bg-red-500' },
  { name: 'English Language', code: 'ENG', level: 'dse', color: 'bg-blue-500' },
  { name: 'Mathematics', code: 'MATH', level: 'dse', color: 'bg-green-500' },
  { name: 'Liberal Studies', code: 'LS', level: 'dse', color: 'bg-purple-500' },
  { name: 'Physics', code: 'PHY', level: 'dse', color: 'bg-yellow-500' },
  { name: 'Chemistry', code: 'CHEM', level: 'dse', color: 'bg-orange-500' },
  { name: 'Biology', code: 'BIO', level: 'dse', color: 'bg-teal-500' },
  { name: 'Economics', code: 'ECON', level: 'dse', color: 'bg-indigo-500' },
  { name: 'History', code: 'HIST', level: 'dse', color: 'bg-pink-500' },
  { name: 'Geography', code: 'GEOG', level: 'dse', color: 'bg-cyan-500' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">📚</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Subject Wiki
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Collaborative knowledge base for Hong Kong schools
          </p>
        </div>

        {/* Subject Grid */}
        <div className="grid md:grid-cols-5 gap-3">
          {subjects.map(subject => (
            <Link 
              key={subject.code}
              href={`/subjects/${subject.code}`}
              className="group p-5 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
            >
              <div className={`w-full h-1.5 rounded-full ${subject.color} mb-3 group-hover:h-2 transition-all`}></div>
              <h3 className="font-semibold text-gray-900">{subject.name}</h3>
              <p className="text-sm text-gray-400 mt-1">{subject.code}</p>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-gray-400">
          <p>EDB & HKAA Curriculum Aligned</p>
        </div>
      </div>
    </main>
  )
}
