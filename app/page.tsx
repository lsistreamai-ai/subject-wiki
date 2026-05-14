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
    <main className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">📚 Subject Wiki</h1>
        <p className="text-xl text-gray-600 mb-2">Collaborative Knowledge Base for Hong Kong Schools</p>
        <p className="text-gray-500">Teachers contribute → Knowledge grows → Students learn</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">🎯 Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-lg mb-2">👥 Teacher Driven</h3>
            <p className="text-gray-600">Teachers contribute and verify content</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🌱 Self-Growing</h3>
            <p className="text-gray-600">AI-enhanced suggestions and expansion</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-bold text-lg mb-2">📖 All Subjects</h3>
            <p className="text-gray-600">Primary, Secondary, DSE coverage</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">DSE Subjects</h2>
      <div className="grid md:grid-cols-5 gap-4">
        {subjects.map(subject => (
          <Link 
            key={subject.code}
            href={`/subjects/${subject.code}`}
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <div className={`w-full h-2 rounded ${subject.color} mb-2`}></div>
            <h3 className="font-bold">{subject.name}</h3>
            <p className="text-sm text-gray-500">{subject.code}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link 
          href="/login" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700"
        >
          🎓 Teacher Login
        </Link>
      </div>
    </main>
  )
}
