/* eslint-disable react/prop-types */
export default function Notification({ notification }) {
  return (
    <div className="absolute top-5 left-5 flex flex-col gap-1 bg-green-200 p-5 rounded-md">
      <h2>{notification}</h2>
    </div>
  );
}
