"use client"
import TeamCard from "@/components/Team/TeamCard";

const TeamPage: React.FC = () => {
    return(
        <>
        <title>Team</title>
        <h1 className="text-6xl font-extrabold text-center p-4 pt-20 font-sans text-red-500">Meet The Team</h1>
        <h2 className="text-3xl font-medium text-pretty text-center text-background">Tap on the cards</h2>
        <TeamCard /></>
    );
}

export default TeamPage;