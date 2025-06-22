import Link from "next/link"
import BookAppointmentButton from "@/components/book-appointment-button"
import { MapPin, Phone, Mail,  MessageCircle } from "lucide-react"

const Footer = () => {
  return (
    <footer className="w-full bg-white py-6 md:py-10 lg:py-16">
      <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* Brand Info */}
      <div className="lg:col-span-1">
        <div className="flex items-center">
          <div className="h-14 w-14 rounded-full flex items-center justify-center">
           <span> <img src="/logo.png" alt="Radiant Logo" className="h-14 w-14 object-contain" /></span>
          </div>
          <span className="bold p-3">Radiant Healthcare Hospital</span>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          Leading healthcare institution in Gorakhpur, providing exceptional services and personalized care at
          affordable rates.
        </p>
      </div>

      {/* Location Info */}
      <div>
        <h3 className="text-base font-semibold text-gray-800">Location</h3>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li>
            <Link href="#" className="hover:text-blue-600 flex items-start gap-2">
              <MapPin className="h-5 w-5" />
              <span>Buddh Vihar Part C, Ramgadh Tall, Taramandal, Gorakhpur, Pipara, Uttar Pradesh 273016</span>
            </Link>
          </li>
          <li>
            <Link href="tel:6389021255" className="hover:text-blue-600 flex items-center gap-2">
              <Phone className="h-5 w-5" />
              6389021255
            </Link>
          </li>
          <li>
            <Link href="https://wa.me/6389021255" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              WhatsApp: 6389021255
            </Link>
          </li>
          <li>
            <Link href="mailto:info@radianthealthcare.com" className="hover:text-blue-600 flex items-center gap-2">
              <Mail className="h-5 w-5" />
              info@radianthealthcare.com
            </Link>
          </li>
        </ul>
      </div>

      {/* Departments */}
      {/* <div>
        <h3 className="text-base font-semibold text-gray-800">Departments</h3>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          {["Cardiology", "Neurology", "Pediatrics", "Orthopedics"].map((dept) => (
            <li key={dept}>
              <Link href="#" className="hover:text-blue-600">
                {dept}
              </Link>
            </li>
          ))}
        </ul>
      </div> */}

      {/* Quick Links */}
      <div>
        <h3 className="text-base font-semibold text-gray-800">Quick Links</h3>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li><Link href="/appointment" className="hover:text-blue-600">Make Appointment</Link></li>
          <li><Link href="tel:6389021255" className="hover:text-blue-600">Emergency Call</Link></li>
          {/* <li><Link href="#" className="hover:text-blue-600">FAQ</Link></li> */}
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-base font-semibold text-gray-800">Services</h3>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          {["Primary Care", "Diagnostic Services", "Emergency Care", "Rehabilitation"].map((service) => (
            <li key={service}>
              {/* <Link href="" className="hover:text-blue-600"> */}
                {service}
              {/* </Link> */}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-10 border-t border-gray-200 pt-6 text-center">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Radiant Healthcare Hospital — The Best Multispecialty Hospital in Gorakhpur. All
        rights reserved.
      </p>
    </div>
  </div>

  {/* <BookAppointmentButton variant="floating" /> */}
</footer>
  )
}

export default Footer
