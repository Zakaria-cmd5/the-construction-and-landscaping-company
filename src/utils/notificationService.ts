// notificationService.ts

export const sendNotification = async (
  token: string | null,
  title: string,
  message: string,
  link: string = "/"
) => {
  try {
    const response = await fetch("/api/send-notification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        title,
        message,
        link,
      }),
    });

    const data = await response.json();
    console.log(data);
    return data; // return the response data for further use if needed
  } catch (error) {
    console.error("Error sending notification:", error);
    throw error; // throw error so that it can be handled in the component
  }
};
