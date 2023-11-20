import { useState } from 'react';

/* eslint-disable react/prop-types */
export default function Notification({ message, duration, type }) {
  const [hidden, setHidden] = useState(false);

  // timer to hide the notification
  setTimeout(() => {
    setHidden(true);
  }, duration);

  if (!hidden) {
    return (
      <div
        className={`${
          type == 'normal' ? 'text-green-300' : 'text-red-300'
        } absolute right-0 top-5 bg-slate-500 p-2 rounded-md transition-all`}
      >
        {message}
      </div>
    );
  } else {
    return null;
  }
}
