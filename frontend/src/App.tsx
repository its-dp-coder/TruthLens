import { useState } from 'react'
import './App.css'

function App() {
  const [inputText, setInputText] = useState('')
  const [analysisType, setAnalysisType] = useState('message')

  const handleAnalyze = () => {
    if (!inputText.trim()) {
      alert('Please enter a message or URL to analyze.')
      return
    }

    alert('Analysis feature is coming soon!')
  }

  return (
    <div className="app">
      <header className="navbar">
        <a href="/" className="brand">
          <span className="brand-icon">T</span>
          <span>TruthLens</span>
        </a>

        <nav className="nav-links">
          <a href="#analyzer">Analyzer</a>
          <a href="#how-it-works">How it works</a>
        </nav>

        <a href="#analyzer" className="nav-button">
          Get Started
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-badge">
            <span className="status-dot" />
            AI-powered risk analysis
          </div>

          <h1>
            Think before you
            <br />
            <span>trust.</span>
          </h1>

          <p className="hero-description">
            Analyze suspicious messages, links, and online content.
            Understand potential warning signs before you take action.
          </p>

          <a href="#analyzer" className="primary-button">
            Analyze suspicious content <span>→</span>
          </a>

          <p className="hero-note">
            Evidence-based insights. No guarantee of absolute safety.
          </p>
        </section>

        <section className="analyzer-section" id="analyzer">
          <div className="section-heading">
            <span className="eyebrow">YOUR FIRST LINE OF DEFENSE</span>
            <h2>What would you like to check?</h2>
            <p>Paste suspicious content below to get started.</p>
          </div>

          <div className="analyzer-card">
            <div className="analyzer-tabs">
              <button
                className={analysisType === 'message' ? 'tab active' : 'tab'}
                onClick={() => setAnalysisType('message')}
                type="button"
              >
                Message
              </button>

              <button
                className={analysisType === 'url' ? 'tab active' : 'tab'}
                onClick={() => setAnalysisType('url')}
                type="button"
              >
                Website URL
              </button>
            </div>

            <label htmlFor="content-input" className="input-label">
              {analysisType === 'message'
                ? 'Suspicious message or email'
                : 'Website URL'}
            </label>

            <textarea
              id="content-input"
              value={inputText}
              onChange={(event) => setInputText(event.target.value)}
              placeholder={
                analysisType === 'message'
                  ? 'Example: Congratulations! You have won a prize. Click this link and share your bank details...'
                  : 'https://example.com'
              }
              rows={5}
            />

            <div className="analyzer-footer">
              <span>{inputText.length} characters</span>

              <button
                className="analyze-button"
                onClick={handleAnalyze}
                type="button"
              >
                Analyze content <span>→</span>
              </button>
            </div>

            <p className="privacy-note">
              Your content should be treated as untrusted. Never share
              passwords, OTPs, or sensitive personal information.
            </p>
          </div>
        </section>

        <section className="features-section" id="how-it-works">
          <div className="section-heading">
            <span className="eyebrow">BUILT FOR A SAFER INTERNET</span>
            <h2>Spot the warning signs</h2>
            <p>Make more informed decisions about suspicious content.</p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">⌕</div>
              <h3>Message analysis</h3>
              <p>
                Identify suspicious wording, urgency, impersonation, and
                requests for sensitive information.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">↗</div>
              <h3>URL risk checks</h3>
              <p>
                Inspect website addresses for potential phishing indicators
                and suspicious patterns.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>Clear explanations</h3>
              <p>
                Understand the warning signs behind a risk assessment instead
                of receiving only a score.
              </p>
            </article>
          </div>
        </section>

        <section className="disclaimer">
          <strong>Stay alert, stay informed.</strong>
          <p>
            TruthLens provides risk indicators, not definitive proof that
            content is safe or fraudulent. Verify important claims through
            trusted sources.
          </p>
        </section>
      </main>

      <footer className="footer">
        <a href="/" className="brand footer-brand">
          <span className="brand-icon">T</span>
          <span>TruthLens</span>
        </a>
        <p>Built to help you think before you trust.</p>
        <span>© 2026 TruthLens</span>
      </footer>
    </div>
  )
}

export default App