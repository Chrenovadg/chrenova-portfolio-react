import React from 'react'
import jsIcon from '../assets/img/js.svg'
import reactIcon from '../assets/img/react.svg'
import bootstrapIcon from '../assets/img/bootstrap.svg'
import css3Icon from '../assets/img/css3.svg'
import html5Icon from '../assets/img/html5.svg'
import sassIcon from '../assets/img/sass.svg'
import figmaIcon from '../assets/img/figma.svg'
import photoshopIcon from '../assets/img/photoshop.svg'
import illustratorIcon from '../assets/img/illustrator.svg'

export const TechStack = () => {
    return (
        <>
        <div className="mx-auto max-w-2xl sm:max-w-4xl flex justify-center h-screen-96 items-center">

            <div className="mb-6 grid grid-cols-3 sm:grid-cols-9 md:grid-cols-9 xl:grid-cols-9 sm:mx-2">
                <div className="p-4">
                    <img
                        src={jsIcon}
                        className=".icon__tech h-12 w-auto mx-auto"
                        loading="lazy"
                        alt="JS Logo"
                    />
                </div>
                <div className="p-4">
                    <img
                        src={reactIcon}
                        className=".icon__tech h-12 w-auto mx-auto"
                        loading="lazy"
                        alt="React Logo"
                    />
                </div>
                <div className="p-4">
                    <img
                        src={bootstrapIcon}
                        className=".icon__tech h-12 w-auto mx-auto"
                        loading="lazy"
                        alt="React Logo"
                    />
                </div>
                <div className="p-4">
                    <img
                        src={css3Icon}
                        className=".icon__tech h-12 w-auto mx-auto"
                        loading="lazy"
                        alt="React Logo"
                    />
                </div>
                <div className="p-4">
                    <img
                        src={html5Icon}
                        className=".icon__tech h-12 w-auto mx-auto"
                        loading="lazy"
                        alt="React Logo"
                    />
                </div>
                <div className="p-4">
                    <img
                        src={sassIcon}
                        className=".icon__tech h-12 w-auto mx-auto"
                        loading="lazy"
                        alt="React Logo"
                    />
                </div>
                <div className="p-4">
                    <img
                        src={figmaIcon}
                        className=".icon__tech h-12 w-auto mx-auto"
                        loading="lazy"
                        alt="React Logo"
                    />
                </div>
                <div className="p-4">
                    <img
                        src={photoshopIcon}
                        className=".icon__tech h-12 w-auto mx-auto"
                        loading="lazy"
                        alt="React Logo"
                    />
                </div>
                <div className="p-4">
                    <img
                        src={illustratorIcon}
                        className=".icon__tech h-12 w-auto mx-auto"
                        loading="lazy"
                        alt="React Logo"
                    />
                </div>

            </div>
        </div>
        </>
    )
}
