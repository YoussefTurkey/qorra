"use client"
import React from 'react'
import { useTheme } from "next-themes";
import Image from 'next/image';

const ThemeBtn = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            // className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg absolute bottom-32'>
            className='fixed bottom-10 right-5 w-[3%] transition-all'>
            {theme == "dark"? <Image src={'/assets/images/dark.png'} alt='dark-theme' loading='lazy' width={200} height={200} />
            : <Image src={'/assets/images/light.png'} alt='light-theme' loading='lazy' width={200} height={200} />}
        </button>
    )
}

export default ThemeBtn