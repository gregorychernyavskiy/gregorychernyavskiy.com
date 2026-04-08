import ProfileImage from "../components/ProfileImage";
import InfoPanel from "../components/InfoPanel";

export default function Home() {
    return (
        <main className="flex gap-12 justify-center py-12 items-start">
            <ProfileImage />
            <InfoPanel />
        </main>
    );
}