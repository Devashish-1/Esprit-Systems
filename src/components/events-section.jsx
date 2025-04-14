"use client"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Clock, MapPin, Users, ChevronRight, Award } from "lucide-react"

const upcomingEvents = [
  {
    id: 1,
    title: "Web Development Hackathon",
    description: "Join us for a 48-hour hackathon to build innovative web solutions for local businesses.",
    date: "June 15-17, 2023",
    time: "Starts at 9:00 AM",
    location: "SBBSU Campus, Tech Hub",
    attendees: 120,
    image: "/placeholder.jpg",
  },
  {
    id: 2,
    title: "Digital Marketing Workshop",
    description: "Learn the latest digital marketing strategies from industry experts in this hands-on workshop.",
    date: "July 5, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Virtual Event",
    attendees: 85,
    image: "/placeholder.jpg",
  },
  {
    id: 3,
    title: "Tech Innovation Summit",
    description: "Connect with tech leaders and showcase student projects to potential investors and partners.",
    date: "August 12-13, 2023",
    time: "9:00 AM - 6:00 PM",
    location: "SBBSU Auditorium",
    attendees: 200,
    image: "/placeholder.jpg",
  },
]

const pastEvents = [
  {
    id: 1,
    title: "E-Commerce Hackathon 2023",
    description: "Students built innovative e-commerce solutions for local small businesses.",
    winner: "Team TechWizards",
    project: "AI-Powered Inventory Management",
    participants: 18,
    image: "/placeholder.jpg",
  },
  {
    id: 2,
    title: "Digital Transformation Workshop",
    description: "Hands-on workshop focusing on helping traditional businesses adopt digital technologies.",
    winner: "N/A",
    project: "Multiple business transformations",
    participants: 45,
    image: "/placeholder.jpg",
  },
  {
    id: 3,
    title: "Annual Tech Showcase 2022",
    description: "Students presented their year-long projects to business owners and tech professionals.",
    winner: "Team InnovateX",
    project: "Smart Retail Analytics Platform",
    participants: 32,
    image: "/placeholder.jpg",
  },
]

const EventsSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Events & Tech Debates</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our events to learn, network, and showcase your talents to the community.
          </p>
        </motion.div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="bg-gray-800/70 border-gray-700 h-full flex flex-col overflow-hidden">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute bottom-0 left-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium">
                        {event.date}
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle>{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-300 text-sm flex-1">
                      <p className="mb-4">{event.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-400">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Users className="h-4 w-4 mr-2" />
                          <span>{event.attendees} registered</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Register Now <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700/50">
                View All Events
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="bg-gray-800/70 border-gray-700 h-full flex flex-col overflow-hidden">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="object-cover w-full h-full opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
                      {event.winner !== "N/A" && (
                        <div className="absolute bottom-3 left-3 flex items-center">
                          <Award className="h-5 w-5 text-yellow-500 mr-2" />
                          <span className="text-yellow-400 text-sm font-medium">{event.winner}</span>
                        </div>
                      )}
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle>{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-300 text-sm flex-1">
                      <p className="mb-4">{event.description}</p>
                      <div className="space-y-2">
                        {event.winner !== "N/A" && (
                          <div className="flex items-start text-gray-400">
                            <Award className="h-4 w-4 mr-2 mt-1" />
                            <div>
                              <span className="block text-white">Winning Project:</span>
                              <span>{event.project}</span>
                            </div>
                          </div>
                        )}
                        <div className="flex items-center text-gray-400">
                          <Users className="h-4 w-4 mr-2" />
                          <span>{event.participants} teams participated</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full border-gray-600 hover:bg-gray-700">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700/50">
                View Event Archive
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default EventsSection
