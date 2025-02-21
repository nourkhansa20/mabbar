'use client'
import React, { useState } from 'react';

interface HoverCardProps {
    mediaUrl: string;
    metadata?: {
        date?: string;
        title?: string;
        description?: string;
    };
    hoverEffect?: {
        expandWidth?: string;
        overlayGradient?: string;
    };
}

const HoverCard = ({
    mediaUrl,
    metadata = {},
    hoverEffect = {}
}: HoverCardProps) => {
    const { date, title, description } = metadata;

    return (
        <div
            className="relative overflow-hidden transition-all duration-700 group"
        >
            <div className={`relative transition-all duration-700 w-full lg:w-[15ex] group-hover:lg:w-[50ex] `}>
                <img
                    src={mediaUrl}
                    alt={title || 'Hover card content'}
                    className="w-full h-[60ex] object-cover"
                />


                <div className={`hidden sm:block absolute inset-0 bg-gradient-to-t group-hover:from-green-700/70 to-transparent`} />
            </div>

            {
                (date || title || description) && (
                    <div className="hidden sm:block absolute bottom-0 left-0 p-4 text-white space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-700">
                        {date && <p className="text-sm font-medium">{date}</p>}
                        {title && <h3 className="text-xl font-bold leading-tight">{title}</h3>}
                        {description && <p className="text-sm opacity-90">{description}</p>}
                    </div>
                )
            }
        </div >
    );
};

export default HoverCard;