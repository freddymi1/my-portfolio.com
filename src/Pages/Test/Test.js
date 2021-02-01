import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Toggle from "react-toggle";
import {FiSun} from 'react-icons/fi';
import {IoMdMoon} from 'react-icons/io'
const DARK_CLASS = "dark";

export default function DarkToggle () {
    const systemPrefersDark = useMediaQuery(
    {
        query: "(prefers-color-scheme: dark)"
    },
    undefined,
    prefersDark => {
        setIsDark(prefersDark);
    }
    );

    const [isDark, setIsDark] = useState(systemPrefersDark);

    useEffect(() => {
    if (isDark) {
        document.documentElement.classList.add(DARK_CLASS)
    } else {
        document.documentElement.classList.remove(DARK_CLASS)
    }
    }, [isDark]);

    return (
    <Toggle
        className="DarkToggle"
        checked={isDark}
        onChange={event => setIsDark(event.target.checked)}
        icons={{ checked: "ok", unchecked: "ko" }}
        aria-label="Dark mode"
    />
    );
};