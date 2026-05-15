'use client'

import { useState } from 'react'
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

// Mock searchable topics
const allTopics = [
  { subject: 'MATH', title: 'Fractions', title_zh: '分數' },
  { subject: 'MATH', title: 'Algebra', title_zh: '代數' },
  { subject: 'MATH', title: 'Geometry', title_zh: '幾何' },
  { subject: 'ENG', title: 'Reading', title_zh: '閱讀' },
  { subject: 'ENG', title: 'Writing', title_zh: '寫作' },
  { subject: 'CHIN', title: '閱讀理解', title_zh: 'Reading Comprehension' },
]

export default function Home() {
  const [search, setSearch] = useState('')
  
  const filteredTopics = search 
    ? allTopics.filter(t => 
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.title_zh.includes(search)
      )
    : []

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">📚</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Subject Wiki
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Collaborative knowledge base for Hong Kong schools
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              placeholder="Search topics... (e.g., fractions, 分數, algebra)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-6 py-4 text-lg bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
          </div>
          
          {/* Search Results */}
          {search && (
            <div className="mt-4 bg-white rounded-xl border border-gray-100 shadow-lg overflow-hidden">
              {filteredTopics.length > 0 ? (
                filteredTopics.map((topic, i) => (
                  <Link
                    key={i}
                    href={`/subjects/${topic.subject}/${topic.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center justify-between p-4 hover:bg-gray-50 border-b border-gray-50 last:border-0"
                  >
                    <div>
                      <p className="font-medium text-gray-900">{topic.title}</p>
                      <p className="text-sm text-gray-500">{topic.title_zh}</p>
                    </div>
                    <span className="text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded">{topic.subject}</span>
                  </Link>
                ))
              ) : (
                <div className="p-4 text-center text-gray-500">
                  No topics found for "{search}"
                </div>
              )}
            </div>
          )}
        </div>

        {/* Subject Grid */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Browse by Subject</h2>
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
