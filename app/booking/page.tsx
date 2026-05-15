import BookingForm from '@/components/BookingForm'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function BookingPage() {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen bg-white pt-32 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-rose-100 text-rose-600 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Get Started
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Book Your Free Consultation
            </h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Take the first step toward younger-looking skin. No commitment, no payment required.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>
      <Footer />
    </main>
  )
}