#🗓️ Calsync
Calsync is a robust, open-source scheduling infrastructure that enables users to
manage their availability and book meetings without the email back-and-forth. It
synchronizes across multiple calendar providers to ensure you are never
double-booked.

Calsync Cover

🌐 Live Demo

View Live Demo | Documentation

✨ Features

  - 🔄 Multi-Calendar Sync: Integration with Google Calendar and Outlook to
    detect conflicts in real-time.
  - 🕒 Dynamic Timezone Handling: Automatically detects and converts meeting
    times for both host and attendee.
  - 🛠️ Custom Availability: Define specific working hours, break buffers, and
    lead-time requirements.
  - 📧 Automated Notifications: Instant email confirmations and calendar invites
    (.ics) sent to all participants.
  - 🔗 Personalized Booking Links: Create custom slugs (e.g.,
    calsync.com/johndoe/15min) for different meeting types.
  - 📱 Responsive Dashboard: Manage upcoming, past, and cancelled bookings from
    any device.

🛠️ Tech Stack

  - Frontend: Next.js 14+ (App Router), Tailwind CSS, Shadcn/UI
  - Backend: Next.js Server Actions, Node.js
  - Database: PostgreSQL with Prisma ORM
  - Auth: NextAuth.js (Google & GitHub OAuth)
  - Email: Resend or Nodemailer
  - Infrastructure: Vercel (Hosting), Supabase (Database)

🚀 Getting Started

Prerequisites

  - Node.js 18.x or higher
  - A PostgreSQL database (Supabase, Railway, or Local)
  - Google Developer Console credentials (for Google Calendar sync)

Installation

1.  Clone the repository

    git clone https://github.com/yourusername/calsync.git
    cd calsync

2.  Install dependencies

    npm install

3.  Environment Setup Create a .env file in the root directory and add:

    NEXTAUTH_SECRET="your-secret"
    GOOGLE_CLIENT_ID="your-google-id"
    GOOGLE_CLIENT_SECRET="your-google-secret"

    RESEND_API_KEY="re_your_api_key"

4.  Database Migration

    npx prisma db push

5.  Run the development server

    npm run dev

    Open http://localhost:3000 to see the result.

📐 Architecture Overview

Calsync uses a Cron-less availability check logic. Instead of constantly
syncing, it fetches real-time "Busy" slots from the Google Calendar API only
when a user visits a booking page, ensuring 100% accuracy without heavy database
overhead.

🛣️ Roadmap

- [ ] Video Conferencing: Auto-generate Zoom and Google Meet links.
- [ ] Payments: Integration with Stripe for paid consultations.
- [ ] Team Scheduling: Round-robin distribution for sales/support teams.

🤝 Contributing

1.  Fork the Project
2.  Create your Feature Branch (git checkout -b feature/AmazingFeature)
3.  Commit your Changes (git commit -m 'Add some AmazingFeature')
4.  Push to the Branch (git push origin feature/AmazingFeature)
5.  Open a Pull Request

📄 License

Distributed under the MIT License. See LICENSE for more information.

Developed by [Mohammed Abdul Ghaffar]
Let's connect! LinkedIn | Twitter

