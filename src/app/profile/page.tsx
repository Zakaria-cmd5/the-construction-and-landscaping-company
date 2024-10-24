import { getCurrentUser } from "@/queries/getCurrentUser";
import Profile from "./_components/Profile";

const ProfilePage = async () => {
  const user = await getCurrentUser();

  return <Profile user={user} />;
};

export default ProfilePage;
