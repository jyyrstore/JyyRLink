

    // =========================
    // BUTTON HOVER EFFECT
    // =========================

    const buttons = document.querySelectorAll('.btn')

    buttons.forEach(button => {

      button.addEventListener('mousemove', e => {

        const rect = button.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        button.style.background = `
        radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255,255,255,0)
        transparent 60%
        )`

      })

      button.addEventListener('mouseleave', () => {

        button.style.background = 'transparent'

      })

    })

  