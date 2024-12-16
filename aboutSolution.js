```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export default function About({ session }) {
  // Session data is now directly accessible in component props
  if (session) {
    return (
      <div>
        <h1>About Page</h1>
        <p>Logged in as {session.user.email}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>About Page</h1>
        <p>Please log in to view this content.</p>
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);
  return {
    props: { session }, // Pass the session data as a prop
  };
}
```