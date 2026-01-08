# Notes App

A full-stack web application for creating, reading, updating, and deleting notes.

## Features

- Create, view, update, and delete notes
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

## Troubleshooting

**MongoDB Connection Error**: Ensure MongoDB is running or connection string is valid.

**Port 3000 in use**: `npm run dev -- -p 3001`

## Support

For technical documentation, refer to official resources:
- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://www.mongodb.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
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

## Styling

The app uses Tailwind CSS with a modern gradient design:
- Blue gradient background (`from-blue-50 to-indigo-100`)
- Card-based layout with shadows and hover effects
- Responsive grid (1 column on mobile, 2 on tablet, 3 on desktop)
- Consistent color scheme with indigo accents

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running locally or you have valid Atlas credentials
- Check that `MONGODB_URI` in `.env.local` is correct

### Port 3000 Already in Use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Module Not Found Errors
```bash
# Clean install dependencies
rm -rf node_modules package-lock.json
npm install
```

## Future Enhancements

- [ ] User authentication
- [ ] Note categories/tags
- [ ] Search functionality
- [ ] Dark mode
- [ ] Rich text editor
- [ ] Export notes
- [ ] Collaborative editing

## License

This project is open source and available under the MIT License.

