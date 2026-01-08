# Notes App

A full-stack web application for creating, reading, updating, and deleting notes.

## Features

- Create, view, update, and delete notes
- Search notes by title and content
- Responsive design (mobile, tablet, desktop)
- Real-time timestamps
- Modern user interface

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **Styling**: Tailwind CSS

## Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)

## Installation & Setup

1. **Install dependencies**:
```bash
npm install
```

2. **Configure environment variables** (`.env.local`):
```
MONGODB_URI=mongodb://localhost:27017/notes-db
```

For MongoDB Atlas:
```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/notes-db
```

3. **Start the application**:
```bash
npm run dev
```

Access the app at `http://localhost:3000`

## Build for Production

```bash
npm run build
npm start
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Fetch all notes |
| POST | `/api/notes` | Create a new note |
| GET | `/api/notes/[id]` | Fetch a single note |
| PUT | `/api/notes/[id]` | Update a note |
| DELETE | `/api/notes/[id]` | Delete a note |

## Project Structure

```
app/
├── api/notes/           # API endpoints
├── notes/               # Frontend pages
│   ├── page.tsx         # Notes list
│   ├── create/page.tsx  # Create note
│   └── edit/[id]/page.tsx  # Edit note
lib/
├── mongodb.ts           # Database connection
└── types.ts             # TypeScript definitions
```

## Database Schema

```javascript
{
  _id: ObjectId,
  title: String,
  content: String,
  createdAt: Date,
  updatedAt: Date
}
```



## Features in Detail


### Create Note
- Navigate to the "New Note" button on the home page
- Fill in the title and content
- Click "Create Note" to save

### View Notes
- All notes are displayed in a responsive grid on the main page
- Notes show title, preview of content, and creation date
- Notes are sorted by creation date (newest first)

### Edit Note
- Click the "Edit" button on any note card
- Update the title and/or content
- Click "Update Note" to save changes

### Delete Note
- Click the "Delete" button on any note card
- Confirm the deletion when prompted
- The note will be permanently removed

## Future Additions

- [ ] User authentication
- [ ] Note categories/tags
- [x] Search functionality
- [ ] Dark mode
- [ ] Rich text editor
- [ ] Export notes
- [ ] Collaborative editing



