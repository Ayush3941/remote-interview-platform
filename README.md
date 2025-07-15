<h1 align="center">✨ Video Calling Interview Platform ✨</h1>

![Demo App](/public/screenshot-for-readme.png)

---

## Highlights

- 🚀 Tech stack: Next.js & TypeScript, Stream, Convex, Clerk
- 🎥 Video Calls
- 🖥️ Screen Sharing
- 🎬 Screen Recording
- 🔒 Authentication & Authorization
- 💻 Server Components, Layouts, Server Actions
- 🎭 Client & Server Components
- 🛣️ Dynamic & Static Routes
- 🎨 Styling with Tailwind & Shadcn
- ✨ Server Actions

---

## Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file at the root with the following:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key

CONVEX_DEPLOYMENT=your-convex-deployment-id
NEXT_PUBLIC_CONVEX_URL=your-convex-url

NEXT_PUBLIC_STREAM_API_KEY=your-stream-api-key
STREAM_SECRET_KEY=your-stream-secret-key
```

---

## Where to get these keys:

### 🔑 Clerk (Authentication)
1. Go to [https://clerk.dev/](https://clerk.dev/)
2. Create a new application.
3. Under API Keys, get your `Publishable Key` and `Secret Key`.

### 🔑 Convex (Database / Backend Functions)
1. Go to [https://dashboard.convex.dev/](https://dashboard.convex.dev/)
2. Create a new deployment.
3. Get your `deployment id` and `public URL`.

### 🔑 Stream (Video / Chat)
1. Go to [https://getstream.io/](https://getstream.io/)
2. Create a new app (enable Video & Chat).
3. Get your `API Key` and `Secret Key`.

---

## Run the app

```bash
npm run dev
```

---

Your app should now be running at [http://localhost:3000](http://localhost:3000)

---

For any issues, please open an issue or PR. 🎉
