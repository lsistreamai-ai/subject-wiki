import Link from 'next/link'

const topicContent: Record<string, { 
  title: string
  title_zh: string
  level: string[]
  content: string
  objectives: string[]
  examples: { title: string; content: string }[]
  relatedTopics: { title: string; subject: string }[]
}> = {
  'fractions': {
    title: 'Fractions',
    title_zh: '分數',
    level: ['P4', 'P5', 'P6'],
    content: 'A fraction represents a part of a whole or, more generally, any number of equal parts. When spoken in everyday English, a fraction describes how many parts of a certain size there are.',
    objectives: [
      'Understand the concept of fractions',
      'Identify numerator and denominator',
      'Compare and order fractions',
      'Add and subtract fractions with like denominators',
    ],
    examples: [
      { title: 'Example 1: Understanding Fractions', content: 'If a pizza is divided into 4 equal parts and you eat 1 part, you have eaten 1/4 of the pizza.' },
      { title: 'Example 2: Comparing Fractions', content: '1/2 is greater than 1/4 because the pieces are larger when there are fewer of them.' },
    ],
    relatedTopics: [
      { title: 'Decimals', subject: 'MATH' },
      { title: 'Percentages', subject: 'MATH' },
      { title: 'Ratio', subject: 'MATH' },
    ],
  },
  'reading': {
    title: 'Reading',
    title_zh: '閱讀',
    level: ['P1', 'P2', 'P3'],
    content: 'Reading comprehension is the ability to process text, understand its meaning, and integrate it with what the reader already knows.',
    objectives: [
      'Identify main ideas in a text',
      'Understand supporting details',
      'Make inferences from context',
      'Summarize passages effectively',
    ],
    examples: [
      { title: 'Example: Finding the Main Idea', content: 'Read the paragraph and ask: What is this mostly about?' },
    ],
    relatedTopics: [
      { title: 'Writing', subject: 'ENG' },
      { title: 'Grammar', subject: 'ENG' },
    ],
  },
}

export default function TopicPage({ params }: { params: { code: string; topic: string } }) {
  const topicKey = params.topic.replace(/-/g, '').toLowerCase()
  const topic = topicContent[topicKey] || topicContent['fractions']
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Subjects</Link>
          <span className="mx-2">/</span>
          <Link href={`/subjects/${params.code}`} className="hover:text-gray-600">{params.code}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{topic.title}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            {topic.level.map(l => (
              <span key={l} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium">
                {l}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold text-gray-900">{topic.title}</h1>
          <p className="text-xl text-gray-500 mt-2">{topic.title_zh}</p>
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 text-lg leading-relaxed">{topic.content}</p>
        </article>

        {/* Learning Objectives */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Learning Objectives</h2>
          <ul className="space-y-2">
            {topic.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700">{obj}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📝 Examples</h2>
          <div className="space-y-4">
            {topic.examples.map((ex, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{ex.title}</h3>
                <p className="text-gray-600">{ex.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Topics */}
        <section className="border-t border-gray-100 pt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🔗 Related Topics</h3>
          <div className="flex flex-wrap gap-2">
            {topic.relatedTopics.map((rel, i) => (
              <Link
                key={i}
                href={`/subjects/${rel.subject}/${rel.title.toLowerCase()}`}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 text-sm font-medium transition-colors"
              >
                {rel.title}
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
          <p>📚 Content contributed by teachers via EduPilot</p>
          <p className="mt-1">Last updated: May 2026</p>
        </div>
      </div>
    </main>
  )
}
