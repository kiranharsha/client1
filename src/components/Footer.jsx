import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (

    <footer class="bg-primary text-center text-white fixed-bottom">
        {/* <div class="container p-4 pb-0"> */}
            <section class="mb-4">
            <p>Nagakiran &copy; {currentYear}</p>
            </section>
        {/* </div> */}
    </footer>

  )
}

export default Footer