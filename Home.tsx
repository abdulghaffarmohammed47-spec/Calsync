import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Zap, Users, CheckCircle2, ArrowRight, Plus, Trash2, Edit2, Bell, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

/**
 * CalSync Home Page - Minimalist Enterprise Design
 * Design Philosophy: Bauhaus-inspired clarity with strategic use of forest green accents
 * Color Palette: Forest Green (#2D5016), Cream (#FFFBF0), Slate (#475569)
 * Typography: Crimson Text (display), Source Sans Pro (body)
 */

interface AppointmentType {
  id: string;
  name: string;
  duration: number;
  color: string;
}

interface Appointment {
  id: string;
  title: string;
  type: string;
  day: string;
  time: string;
  client: string;
  status: "confirmed" | "pending" | "completed";
}

const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const TIME_SLOTS = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

export default function Home() {
  const [appointmentTypes, setAppointmentTypes] = useState<AppointmentType[]>([
    { id: "1", name: "Consultation", duration: 30, color: "bg-primary" },
    { id: "2", name: "Strategy Session", duration: 60, color: "bg-primary/80" },
    { id: "3", name: "Follow-up", duration: 15, color: "bg-primary/60" },
  ]);

  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: "1", title: "Client Consultation", type: "Consultation", day: "Monday", time: "10:00", client: "Acme Corp", status: "confirmed" },
    { id: "2", title: "Strategy Session", type: "Strategy Session", day: "Wednesday", time: "14:00", client: "Tech Startup", status: "confirmed" },
    { id: "3", title: "Follow-up Call", type: "Follow-up", day: "Friday", time: "15:00", client: "Global Industries", status: "pending" },
  ]);

  const [newType, setNewType] = useState({ name: "", duration: 30 });
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [selectedTime, setSelectedTime] = useState("09:00");

  const handleAddType = () => {
    if (newType.name.trim()) {
      setAppointmentTypes([
        ...appointmentTypes,
        {
          id: Date.now().toString(),
          name: newType.name,
          duration: newType.duration,
          color: "bg-primary",
        },
      ]);
      setNewType({ name: "", duration: 30 });
    }
  };

  const handleDeleteType = (id: string) => {
    setAppointmentTypes(appointmentTypes.filter((t) => t.id !== id));
  };

  const handleDeleteAppointment = (id: string) => {
    setAppointments(appointments.filter((a) => a.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "text-primary";
      case "pending":
        return "text-yellow-600";
      case "completed":
        return "text-slate-400";
      default:
        return "text-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <h1 className="text-2xl font-bold text-primary">CalSync</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Features
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Pricing
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-background/95">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663629184452/HoemehFdZ8WA8ooao2k2ok/calsync-hero-bg-2uPMRjQWFWuQSQ4j2znG9q.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative py-24 md:py-32">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Scheduling Made Simple
            </h2>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              CalSync streamlines your booking process with an intuitive calendar interface, automated reminders, and seamless client integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Powerful Features</h2>
            <p className="text-lg text-foreground/60">Everything you need to manage appointments efficiently</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Weekly Calendar View",
                description: "Drag-and-drop appointment slots with real-time synchronization across all devices.",
              },
              {
                icon: Zap,
                title: "Smart Configurator",
                description: "Create custom appointment types with flexible durations and automated reminders.",
              },
              {
                icon: Users,
                title: "Client Booking Page",
                description: "Share a beautiful, branded booking page for clients to schedule appointments.",
              },
              {
                icon: Clock,
                title: "Availability Management",
                description: "Set your working hours and block time for breaks or personal commitments.",
              },
              {
                icon: Bell,
                title: "Automated Reminders",
                description: "Send SMS and email reminders to reduce no-shows and keep clients informed.",
              },
              {
                icon: CheckCircle2,
                title: "Calendar Integrations",
                description: "Sync with Google Calendar, Outlook, and other popular calendar services.",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="border border-border hover:border-primary/30 transition-colors">
                <CardHeader>
                  <feature.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/60">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Dashboard Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <Tabs defaultValue="calendar" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
              <TabsTrigger value="types">Appointment Types</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            </TabsList>

            {/* Calendar View Tab */}
            <TabsContent value="calendar" className="space-y-6">
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle>Weekly Schedule</CardTitle>
                  <CardDescription>Drag and drop to reschedule appointments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <div className="min-w-full">
                      {/* Header with days */}
                      <div className="grid grid-cols-8 gap-2 mb-4">
                        <div className="text-sm font-semibold text-foreground/60">Time</div>
                        {DAYS_OF_WEEK.map((day) => (
                          <div key={day} className="text-sm font-semibold text-foreground text-center">
                            {day.slice(0, 3)}
                          </div>
                        ))}
                      </div>

                      {/* Calendar grid */}
                      <div className="space-y-2 border-l-2 border-primary/20 pl-4">
                        {TIME_SLOTS.map((time) => (
                          <div key={time} className="grid grid-cols-8 gap-2 items-start">
                            <div className="text-xs text-foreground/60 font-medium">{time}</div>
                            {DAYS_OF_WEEK.map((day) => {
                              const appointment = appointments.find((a) => a.day === day && a.time === time);
                              return (
                                <div
                                  key={`${day}-${time}`}
                                  className="min-h-16 bg-background border border-border rounded-md p-2 hover:border-primary/50 transition-colors cursor-move group relative"
                                >
                                  {appointment && (
                                    <div className={`${appointment.type === "Consultation" ? "bg-primary/10" : "bg-primary/5"} rounded p-1.5 h-full flex flex-col justify-between`}>
                                      <div className="text-xs font-medium text-foreground line-clamp-2">{appointment.title}</div>
                                      <div className="text-xs text-foreground/60">{appointment.client}</div>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Appointment Types Tab */}
            <TabsContent value="types" className="space-y-6">
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle>Appointment Types</CardTitle>
                  <CardDescription>Create and manage your service offerings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Add New Type Form */}
                  <div className="p-4 bg-background border border-border rounded-lg space-y-4">
                    <h3 className="font-semibold text-foreground">Create New Type</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="type-name" className="text-foreground/70">
                          Service Name
                        </Label>
                        <Input
                          id="type-name"
                          placeholder="e.g., Initial Consultation"
                          value={newType.name}
                          onChange={(e) => setNewType({ ...newType, name: e.target.value })}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="type-duration" className="text-foreground/70">
                          Duration (minutes)
                        </Label>
                        <Input
                          id="type-duration"
                          type="number"
                          min="5"
                          max="480"
                          value={newType.duration}
                          onChange={(e) => setNewType({ ...newType, duration: parseInt(e.target.value) })}
                          className="mt-2"
                        />
                      </div>
                      <Button onClick={handleAddType} className="w-full bg-primary hover:bg-primary/90 text-white">
                        <Plus className="w-4 h-4 mr-2" /> Add Type
                      </Button>
                    </div>
                  </div>

                  {/* List of Types */}
                  <div className="space-y-3">
                    {appointmentTypes.map((type) => (
                      <div key={type.id} className="flex items-center justify-between p-4 bg-background border border-border rounded-lg hover:border-primary/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${type.color}`} />
                          <div>
                            <p className="font-medium text-foreground">{type.name}</p>
                            <p className="text-sm text-foreground/60">{type.duration} minutes</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="text-foreground/60 hover:text-primary">
                            <Edit2 className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-foreground/60 hover:text-destructive"
                            onClick={() => handleDeleteType(type.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Upcoming Appointments Tab */}
            <TabsContent value="upcoming" className="space-y-6">
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle>Upcoming Appointments</CardTitle>
                  <CardDescription>Your scheduled appointments and reminders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {appointments.map((appointment) => (
                      <div key={appointment.id} className="flex items-center justify-between p-4 bg-background border border-border rounded-lg hover:border-primary/30 transition-colors">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="flex flex-col gap-1">
                            <p className="font-medium text-foreground">{appointment.title}</p>
                            <div className="flex items-center gap-2 text-sm text-foreground/60">
                              <Calendar className="w-4 h-4" />
                              {appointment.day} at {appointment.time}
                            </div>
                            <p className="text-sm text-foreground/60">{appointment.client}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className={`text-sm font-medium ${getStatusColor(appointment.status)} capitalize`}>{appointment.status}</div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-foreground/60 hover:text-destructive"
                            onClick={() => handleDeleteAppointment(appointment.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Client Booking Preview Section */}
      <section className="py-20 bg-white border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Client Booking Page</h2>
              <p className="text-lg text-foreground/60 mb-6">
                Share a professional booking page with your clients. They can see your availability and book appointments directly without back-and-forth emails.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Branded with your logo and colors",
                  "Real-time availability updates",
                  "Automated confirmation emails",
                  "Calendar sync with your schedule",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6">
                    Preview Booking Page
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Client Booking Page Preview</DialogTitle>
                    <DialogDescription>This is what your clients will see when booking</DialogDescription>
                  </DialogHeader>
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-foreground mb-2">Book an Appointment</h3>
                      <p className="text-foreground/60">Select a time that works for you</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label className="text-foreground/70">Select Service</Label>
                        <Select>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Choose a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {appointmentTypes.map((type) => (
                              <SelectItem key={type.id} value={type.id}>
                                {type.name} ({type.duration} min)
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-foreground/70">Select Date</Label>
                        <Select>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Choose a date" />
                          </SelectTrigger>
                          <SelectContent>
                            {DAYS_OF_WEEK.map((day) => (
                              <SelectItem key={day} value={day}>
                                {day}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-foreground/70">Select Time</Label>
                        <Select>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Choose a time" />
                          </SelectTrigger>
                          <SelectContent>
                            {TIME_SLOTS.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6">Confirm Booking</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663629184452/HoemehFdZ8WA8ooao2k2ok/calsync-calendar-illustration-eZpBW55A32LFK2aPauPACo.webp"
                alt="Calendar illustration"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Calendar Integrations</h2>
            <p className="text-lg text-foreground/60">Sync with your favorite calendar and communication tools</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Calendar, name: "Google Calendar", description: "Sync appointments automatically" },
              { icon: Mail, name: "Microsoft Outlook", description: "Two-way calendar synchronization" },
              { icon: MessageCircle, name: "Slack", description: "Get appointment reminders in Slack" },
            ].map((integration, idx) => (
              <Card key={idx} className="border border-border hover:border-primary/30 transition-colors text-center">
                <CardHeader>
                  <integration.icon className="w-12 h-12 text-primary mx-auto mb-4" strokeWidth={1.5} />
                  <CardTitle>{integration.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/60 mb-6">{integration.description}</p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 w-full">
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to streamline your scheduling?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses using CalSync to manage their appointments more efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white hover:bg-white/90 text-primary px-8 py-6 text-lg font-medium">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-6 h-6 text-primary" strokeWidth={1.5} />
                <span className="font-bold text-lg text-primary">CalSync</span>
              </div>
              <p className="text-sm text-foreground/60">Scheduling made simple for modern businesses.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
            <p>&copy; 2026 CalSync. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
