import profilePic from "../assets/profile.png";

export default function ProfileImage() {
    return (
        <img
            src={profilePic}
            alt="Gregory Chernyavskiy"
            className="w-full md:w-[500px] h-[300px] md:h-[500px] object-cover object-top flex-shrink-0"
        />
    );
}
