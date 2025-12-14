import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Confirmo mi asistencia, nos vemos!')
    const phoneNumber = '3173503132'
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  useEffect(() => {
    if (currentStep !== 2) {
      setShowScrollIndicator(false)
      return
    }

    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollBottom = scrollTop + windowHeight

      // Si estamos cerca del final (con un margen de 50px), ocultar la flecha
      if (scrollBottom >= documentHeight - 50) {
        setShowScrollIndicator(false)
      } else {
        setShowScrollIndicator(true)
      }
    }

    // Verificar posición inicial
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [currentStep])

  return (
    <div className="app">
      <div className="progress-indicator">
        <div className={`progress-dot ${currentStep >= 0 ? 'active' : ''}`}></div>
        <div className={`progress-line ${currentStep >= 1 ? 'active' : ''}`}></div>
        <div className={`progress-dot ${currentStep >= 1 ? 'active' : ''}`}></div>
        <div className={`progress-line ${currentStep >= 2 ? 'active' : ''}`}></div>
        <div className={`progress-dot ${currentStep >= 2 ? 'active' : ''}`}></div>
      </div>
      <div className="step-container">
        {currentStep === 0 && (
          <div className="step step-1">
            <div className="step-1-layout">
              <div className="photo-container photo-featured">
                <img src="/primera.jpeg" alt="Mari" />
              </div>
              <div className="content content-overlay">
                <h1 className="title">El cumpleaños de la hermosa Mari</h1>
                <p className="text">
                  Como ya sabemos, su cumpleaños es el <strong>21 de diciembre</strong>, 
                  cumpliendo <strong>20 años</strong>...
                </p>
              </div>
            </div>
            <div className="button-container">
              <button className="next-button" onClick={handleNext}>
                Continuar →
              </button>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="step step-2">
            <div className="step-2-layout">
              <div className="content content-side">
                <h2 className="subtitle">Eres muy especial</h2>
                <p className="text">
                  Sé que eres una persona importante para ella y estoy seguro de que 
                  va a estar muy feliz.
                </p>
              </div>
              <div className="photo-container photo-side">
                <img src="/segunda.jpeg" alt="Mari" />
              </div>
            </div>
            <div className="button-container">
              <button className="back-button" onClick={handleBack}>
                ← Atrás
              </button>
              <button className="next-button" onClick={handleNext}>
                Continuar →
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <>
            <div className="step step-3">
              <div className="photo-container">
                <img src="/barra.jpg" alt="Cantina La 15" />
              </div>
              <div className="content">
                <h1 className="title">Invitación especial</h1>
                <p className="text">
                  Quiero que acompañes y celebres con <strong>Mari</strong> su tan esperado cumpleaños <strong>#20</strong>
                </p>
                <div className="details">
                  <p className="detail-item">
                    <span className="detail-label">📍 Lugar:</span>
                    <span className="detail-value">Cantina La 15 - Sede Granada</span>
                  </p>
                  <p className="detail-item">
                    <span className="detail-label">📅 Fecha:</span>
                    <span className="detail-value">20 de diciembre, Sábado</span>
                  </p>
                  <p className="detail-item">
                    <span className="detail-label">🕘 Hora:</span>
                    <span className="detail-value">08:00 PM (sé puntual)</span>
                  </p>
                </div>
                <div className="surprise-notice">
                  <p className="surprise-text">
                    ⚠️ <strong>Es sorpresa:</strong> El lugar y los invitados son sorpresa, 
                    así que <strong>no le digas nada</strong>
                  </p>
                </div>
                <p className="closing-text">
                  Pasaremos una excelente noche juntos
                </p>
              </div>
              <div className="button-container">
                <button className="back-button" onClick={handleBack}>
                  ← Atrás
                </button>
                <button className="whatsapp-button" onClick={handleWhatsApp}>
                  Claro, allí estaré 🎉
                </button>
              </div>
            </div>
            {showScrollIndicator && (
              <div className="scroll-indicator">
                <div className="scroll-arrow">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M7 13L12 18L17 13M7 6L12 11L17 6" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default App
