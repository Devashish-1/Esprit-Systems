"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormState((prev) => ({ ...prev, type: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
  
    try {
      const response = await fetch(
        "YOUR_SCRIPT_URL",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            name: formState.name,
            email: formState.email,
            type: formState.type,
            message: formState.message
          }),
          redirect: "follow" // Add this line
        }
      );
  
      // Even with no-cors, we can't read the response, so assume success
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        type: "",
        message: "",
      });
    } catch (err) {
      setError("Submission failed. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-800/50 p-8 rounded-xl shadow-xl">
      {isSubmitted ? (
        <motion.div
          className="flex flex-col items-center justify-center h-full py-10 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-full bg-green-600/20 flex items-center justify-center mb-4">
            <Check className="h-8 w-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
          <p className="text-gray-300 mb-8">We'll get back to you as soon as possible.</p>
          <Button
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-700/50"
            onClick={() => setIsSubmitted(false)}
          >
            Send Another Message
          </Button>
        </motion.div>
      ) : (
        <>
          <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
          {error && (
            <motion.div
              className="mb-4 p-3 bg-red-500/20 text-red-300 rounded-md text-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </motion.div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="bg-gray-700/50 border-gray-600 focus:border-blue-500 text-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="bg-gray-700/50 border-gray-600 focus:border-blue-500 text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-300 mb-1">
                  I am a...
                </label>
                <Select value={formState.type} onValueChange={handleSelectChange} required>
                  <SelectTrigger className="bg-gray-700/50 border-gray-600 focus:border-blue-500 text-white">
                    <SelectValue placeholder="Select who you are" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="business">Business Owner</SelectItem>
                    <SelectItem value="university">University Representative</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="bg-gray-700/50 border-gray-600 focus:border-blue-500 text-white min-h-[120px]"
                  placeholder="How can we help you?"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              <p className="text-xs text-gray-400 text-center mt-4">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </div>
          </form>
        </>
      )}
    </div>
  )
}

export default ContactForm;