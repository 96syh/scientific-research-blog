import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link href="/bugbot" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Bugbot
                </Link>
              </li>
              <li>
                <Link href="/cli" className="text-gray-600 hover:text-gray-900 transition-colors">
                  CLI
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/download" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/agents" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Web Agents
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Changelog
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="/forum" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Forum →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Careers →
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/students" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Students
                </Link>
              </li>
              <li>
                <Link href="/brand" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Brand
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/data-use" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Data Use
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://x.com/cursor_ai" className="text-gray-600 hover:text-gray-900 transition-colors">
                  X →
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/cursorai" className="text-gray-600 hover:text-gray-900 transition-colors">
                  LinkedIn →
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/@cursor_ai" className="text-gray-600 hover:text-gray-900 transition-colors">
                  YouTube →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>© 2025 Anysphere, Inc.</span>
            <Link href="/security" className="hover:text-gray-900 transition-colors">
              SOC 2 Certified
            </Link>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM9 9V6h2v3h3v2h-3v3H9v-3H6V9h3z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.707 8.293l-3-3a1 1 0 0 0-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.707 8.293l-3-3a1 1 0 0 0-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">English</span>
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
