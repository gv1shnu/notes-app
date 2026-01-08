import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const notes = await db
      .collection('notes')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(notes);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch notes' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, content } = await request.json();

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const result = await db.collection('notes').insertOne({
      title,
      content,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json(
      { _id: result.insertedId, title, content },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create note' },
      { status: 500 }
    );
  }
}
