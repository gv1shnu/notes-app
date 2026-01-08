'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Note } from '@/lib/types';

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/notes');
      if (!response.ok) {
        throw new Error('Failed to fetch notes');
      }
      const data = await response.json();
      setNotes(data);
      setError('');
    } catch (err) {
      setError('Error loading notes');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteNote = async (id: string) => {
    if (!confirm('Are you sure you want to delete this note?')) {
      return;
    }

    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete note');
      }
      setNotes(notes.filter((note) => note._id !== id));
    } catch (err) {
      alert('Error deleting note');
      console.error(err);
    }
  };

  const formatDate = (date: string | Date) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">My Notes</h1>
          <Link
            href="/notes/create"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200"
          >
            + New Note
          </Link>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search notes by title or content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-gray-900 placeholder-gray-400"
          />
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading notes...</p>
          </div>
        ) : notes.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500 mb-4">No notes yet!</p>
            <Link
              href="/notes/create"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200"
            >
              Create your first note
            </Link>
          </div>
        ) : filteredNotes.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500">No notes match your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note) => (
              <div
                key={note._id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-1">
                  <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                    {note.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-4">
                    {note.content}
                  </p>
                  <p className="text-sm text-gray-400">
                    {formatDate(note.createdAt)}
                  </p>
                </div>
                <div className="bg-gray-50 px-6 py-4 flex gap-3">
                  <Link
                    href={`/notes/edit/${note._id}`}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center transition duration-200"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteNote(note._id)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
