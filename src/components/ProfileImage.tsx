import profilePic from "../assets/profile.jpg";

export default function ProfileImage() {
    return (
        <div className="relative overflow-hidden bg-[#e5dccd] dark:bg-[#252118] shadow-[0_24px_60px_rgba(17,17,17,0.12)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.5)] [clip-path:polygon(0_0,100%_0,100%_82%,82%_100%,0_100%)]">
            <div className="pointer-events-none absolute inset-0 border border-black/10 dark:border-white/10 [clip-path:polygon(0_0,100%_0,100%_82%,82%_100%,0_100%)]" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 border-l border-t border-black/10 dark:border-white/10 bg-[#d9cfbd]/80 dark:bg-[#1a1710]/80" />
            <img
                src={profilePic}
                alt="Gregory Chernyavskiy"
                className="block aspect-[4/5] max-h-[72vh] w-full object-cover object-top sm:aspect-[5/6] lg:max-h-[780px] [clip-path:polygon(0_0,100%_0,100%_82%,82%_100%,0_100%)]"
            />
        </div>
    );
}
