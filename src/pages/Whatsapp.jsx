import React from 'react'

export default function Whatsapp() {
  return (
    <div>
      <a
        href="https://wa.me/918446055677?text=Hi%2C%20I%20loved%20your%20creations%20and%20want%20to%20place%20an%20order%20%F0%9F%98%8D" // custom message
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.18 1.59 6L0 24l6.26-1.63A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.02-1.33l-.36-.21-3.71.97.99-3.6-.23-.37A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.47c-.28-.14-1.65-.82-1.9-.91-.26-.1-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.17.19-.33.21-.61.07-.28-.14-1.18-.44-2.24-1.41-.83-.74-1.4-1.65-1.57-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.31.42-.47.14-.16.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.53-.88-2.1-.23-.55-.47-.48-.64-.49h-.55c-.18 0-.47.07-.72.34-.26.28-1 1-.95 2.43.05 1.42 1.04 2.8 1.18 2.99.14.19 2.03 3.1 4.92 4.35.69.3 1.22.48 1.64.62.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.11-.26-.18-.54-.32z" />
        </svg>
      </a>
    </div>
  )
}
