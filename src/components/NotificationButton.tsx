import useFcmToken from "@/hooks/useFcmToken";
import { sendNotification } from "@/utils/notificationService";
import Spinner from "./Spinner";

interface Props {
  heading: string;
  title: string;
  pending: boolean;
  buttonType: "submit" | "reset" | "button" | undefined;
  buttonLabel: string;
}

const NotificationButton = ({
  heading,
  title,
  buttonType,
  pending,
  buttonLabel,
}: Props) => {
  const { token } = useFcmToken();

  const handleTestNotification = async () => {
    try {
      const data = await sendNotification(token, heading, title, "/");
      console.log("Notification sent:", data);
    } catch (error) {
      console.error("Failed to send test notification:", error);
    }
  };

  return (
    <button
      type={buttonType}
      disabled={pending}
      className="bg-[#2BE784] hover:bg-[#121C17] text-[#121C17] hover:text-[#2BE784] font-medium rounded-lg w-full max-w-[204px] h-[49px] mx-auto flex justify-center items-center hover:scale-110"
      onClick={handleTestNotification}
    >
      {pending ? <Spinner /> : buttonLabel}
    </button>
  );
};

export default NotificationButton;
