import {useEffect} from "react";

export function registerListener() {
    useEffect(() => {
        const targetElement = document.documentElement;

        const observer = new MutationObserver(function (mutationsList) {
            for (let mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                    const newTheme = targetElement.getAttribute('data-theme');

                    if (newTheme) {
                        targetElement.setAttribute('data-bs-theme', newTheme);
                    } else {
                        targetElement.removeAttribute('data-bs-theme');
                    }
                }
            }
        });

        const currentTheme = targetElement.getAttribute('data-theme');

        if (currentTheme) {
            targetElement.setAttribute('data-bs-theme', currentTheme);
        }

        observer.observe(targetElement, {
                attributes: true,
                attributeFilter: ['data-theme']
            }
        );

        return () => {
            observer.disconnect();
        };
    }, [])
}