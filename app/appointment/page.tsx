'use client';

import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    reason: '',
    department: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('📝 Form Data:', formData);
    

    try {
      const res = await fetch('/api/appoinment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        alert('Appoinment Book Successfully!')
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          reason: '',
          department: '',
        });
      } else {
        alert('Error: ' + (result.error || 'Failed to create appointment'));
      }
    } catch (err) {
      console.error('Submit error:', err);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      <section className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Book Your Appointment with Radiant Healthcare Hospital
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100 md:text-lg">
            Schedule a consultation with our healthcare professionals at your convenience
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-5xl rounded-xl bg-white p-6 shadow-lg md:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Date & Time Selection */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Select Date & Time</h2>

              <div className="mb-8 rounded-lg border border-gray-200 p-4">
                <div className="mb-4 flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-medium">Choose a Date</h3>
                </div>
                <DatePicker
  selected={formData.date ? new Date(formData.date) : null}
  onChange={(date) =>
    setFormData((prev) => ({
      ...prev,
      date: date?.toISOString().split('T')[0] || '',
    }))
  }
  dateFormat="yyyy-MM-dd"
  className="w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
                {/* <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                /> */}
              </div>

              <div className="rounded-lg border border-gray-200 p-4">
                <div className="mb-4 flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-medium">Choose a Time</h3>
                </div>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* User Information Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Your Information</h2>

              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Rajkumar"
                      className="w-full rounded-md border py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      autoComplete="name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rajkumar@example.com"
                      className="w-full rounded-md border py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="6389021255"
                      className="w-full rounded-md border py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      autoComplete="tel"
                    />
                  </div>
                </div>

                {/* Reason */}
                <div>
                  <label htmlFor="reason" className="mb-1 block text-sm font-medium text-gray-700">
                    Reason
                  </label>
                  <div className="relative">
                    <MessageSquare className="pointer-events-none absolute left-3 top-3 text-gray-400" />
                    <textarea
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      placeholder="Describe your reason"
                      rows={3}
                      className="w-full rounded-md border py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>
                </div>

                {/* Department */}
                <div>
                  <label htmlFor="department" className="mb-1 block text-sm font-medium text-gray-700">
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full rounded-md border py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a department</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="internal-medicine">Internal Medicine</option>
                    <option value="ophthalmology">Ophthalmology</option>
                    <option value="gastroenterology">Gastroenterology</option>
                    <option value="obgyn">Obstetrics & Gynecology</option>
                  </select>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-white shadow-md hover:shadow-lg hover:shadow-cyan-500/30"
                >
                  Confirm Appointment
                </Button>
              </form>

              {/* Terms */}
              <p className="mt-4 text-center text-xs text-gray-500">
                By booking an appointment, you agree to our{' '}
                <Link href="#" className="text-blue-600 hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



