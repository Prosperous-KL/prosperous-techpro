import { useNavigate } from 'react-router-dom'

export default function LegalHeader() {
  const navigate = useNavigate()

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <img src="/logo.png" alt="Prosperous TechPro" className="h-10 w-auto" />
            <span className="text-xl font-bold gradient-text hidden sm:block">Prosperous TechPro</span>
          </div>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 text-gray-700 hover:text-primary-600 transition font-medium"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </nav>
  )
}
