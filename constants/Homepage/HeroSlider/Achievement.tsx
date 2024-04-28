
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
    () => {
        return import("react-animated-numbers");
    },
    { ssr: false }
);

const achievementsList = [
    {
        metric: "Members",
        value: "70",
        postfix: "+",
    },
    {
        postfix: "+",
        metric: "Men",
        value: "20",
    },
    {
        postfix: "+",
        metric: "Women",
        value: "30",
    },
    {
        postfix: "+",
        metric: "Children",
        value: "25",
    },
];

const AchievementsSection = () => {
    return (
        <div className=" relative top-2  padd max-containe ">
            <div className="sm:border-ecwaorange sm:border-4 rounded-md bg-ecwadarkblu py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
                {achievementsList.map((achievement, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
                        >
                            <h2 className="flex flex-row">
                                
                                {//@ts-ignore
                                achievement.prefix}
                                <AnimatedNumbers
                                    includeComma
                                    animateToNumber={parseInt(achievement.value)}
                                    locale="en-US"
                                    
                                    configs={(_, index) => {
                                        return {
                                            mass: 1,
                                            friction: 100,
                                            tensions: 140 * (index + 1),
                                        };
                                    }}
                                />
                                {achievement.postfix}
                            </h2>
                            <p>{achievement.metric}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AchievementsSection;