export interface Subject {
  id: string
  name: string
  code: string
  level: 'primary' | 'secondary' | 'dse'
  description?: string
  created_at: string
}

export interface Topic {
  id: string
  subject_id: string
  name: string
  description?: string
  order: number
  created_at: string
}

export interface Content {
  id: string
  topic_id: string
  title: string
  body: string
  content_type: 'note' | 'exercise' | 'video' | 'resource'
  author_id: string
  verified: boolean
  created_at: string
  updated_at: string
}

export interface Teacher {
  id: string
  email: string
  name: string
  school?: string
  subjects: string[]
  role: 'teacher' | 'admin'
  created_at: string
}
