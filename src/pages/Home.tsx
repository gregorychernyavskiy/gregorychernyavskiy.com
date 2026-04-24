import ProfileImage from "../components/ProfileImage";
import InfoPanel from "../components/InfoPanel";

export default function Home() {
    return (
        <main className="min-h-screen px-4 py-8 sm:px-6 md:px-8 md:py-12">
            <div className="mx-auto grid w-full max-w-6xl items-start gap-8 lg:grid-cols-[minmax(280px,0.95fr)_minmax(320px,1fr)] lg:gap-12">
                <div className="w-full max-w-[540px] justify-self-center lg:sticky lg:top-8">
                    <ProfileImage />
                </div>
                <div className="w-full">
                    <InfoPanel />
                </div>
            </div>
        </main>
    );
}