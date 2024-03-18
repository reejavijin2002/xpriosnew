import React, { useState } from "react";
import notif from "../images/notif.jpg";

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (type, message) => {
    const newNotification = {
      id: Date.now(),
      type,
      message,
    };

    setNotifications((prevNotifications) => [
      newNotification,
      ...prevNotifications,
    ]);
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="">
      <div className=" w-1/2">
        <img src={notif} alt="" height="320px" width="400px" />
      </div>
      <div className="bg-white min-h-screen ">
        <div className="bg-white p-8 rounded font-[poppins] w-full md:w-full lg:w-full xl:w-full">
          <h2 className="text-2xl font-extrabold font-[poppins] mb-4">
            Notifications
          </h2>

          {notifications.length > 0 && (
            <div className="mb-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 mb-2 border rounded ${
                    notification.type === "success"
                      ? "border-green-500 bg-green-100"
                      : "border-red-500 bg-red-100"
                  }`}
                >
                  {notification.message}
                </div>
              ))}
            </div>
          )}

          <div className="sm:flex  md:space-x-4">
            <button
              className="bg-green-500 text-white sm:py-2 sm:px-4 xs:w-[250px] xs:pl-0 mt-2 w-auto rounded hover:bg-green-600"
              onClick={() => addNotification("success", "Success notification")}
            >
              Add Success Notification
            </button>
            <button
              className="bg-red-500 text-white sm:py-2 w-[250px] sm:px-4 xs:pl-0 mt-2 rounded hover:bg-red-600"
              onClick={() => addNotification("error", "Error notification")}
            >
              Add Error Notification
            </button>
            <button
              className="bg-gray-500 text-white sm:py-2 w-[250px] xs:pl-0 mt-2  sm:px-4 rounded hover:bg-gray-600"
              onClick={clearNotifications}
            >
              Clear Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
