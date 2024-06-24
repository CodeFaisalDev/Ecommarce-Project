import { NextResponse } from 'next/server';
import { client } from '../../../../sanity/lib/client';

export async function POST(request) {
  try {
    const { userId, firstName, lastName, email } = await request.json();

  
    const existingUser = await client.fetch(`*[_type == "user" && _id == "${userId}"][0]`);

    if (existingUser) {

      const updatedUser = {
        ...existingUser,
        firstName,
        lastName,
        email,
      };

      const result = await client.patch(userId).set(updatedUser).commit();
      return NextResponse.json({ userId: result._id });
    } else {

      const newUser = {
        _type: 'user',
        _id: userId,
        firstName,
        lastName,
        email,
        orders: [],
      };

      const result = await client.create(newUser);
      return NextResponse.json({ userId: result._id });
    }
  } catch (err) {
    console.error('Error creating/updating user:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
