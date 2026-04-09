import ProfileImage from "../components/ProfileImage";
import InfoPanel from "../components/InfoPanel";

export default function Home() {
    return (
        <main className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center py-8 md:py-12 items-center md:items-start px-4">
            <ProfileImage />
            <InfoPanel />
        </main>
    );
}