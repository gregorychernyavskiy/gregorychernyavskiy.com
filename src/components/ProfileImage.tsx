import profilePic from "../assets/profile.png";

export default function ProfileImage() {
    return (
        <img
            src={profilePic}
            alt="Gregory Chernyavskiy"
            className="w-[500px] h-[500px] object-cover object-top flex-shrink-0"
        />
    );
}
