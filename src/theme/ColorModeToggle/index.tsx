import React, {useEffect} from 'react';
import ColorModeToggle from '@theme-original/ColorModeToggle';
import type ColorModeToggleType from '@theme/ColorModeToggle';
import type {WrapperProps} from '@docusaurus/types';
import {useColorMode} from "@chakra-ui/react";

type Props = WrapperProps<typeof ColorModeToggleType>;

export default function ColorModeToggleWrapper(props: Props): JSX.Element {
    const { value } = props;
    const { colorMode } = useColorMode();
    const chakraUiColorMode = "chakra-ui-color-mode";

    useEffect(() => {
        if (value === undefined) {
            return;
        }

        console.log("Docusaurus theme changed to: " + value);

        console.log("Syncing theme change with Chakra UI...");
        localStorage.setItem(chakraUiColorMode, value);
        console.log("Chakra UI theme synced to: " + value);
    }, [value]);

    useEffect(() => {
        if (colorMode === undefined) {
            return;
        }

        console.log("Chakra UI theme changed to: " + colorMode);

        console.log("Syncing theme change with Docusaurus...");
        localStorage.setItem("theme", colorMode);
        console.log("Docusaurus theme synced to: " + colorMode);
    }, [colorMode]);

    return (
        <>
            <ColorModeToggle {...props} />
        </>
    );
}
