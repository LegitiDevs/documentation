import DefaultTheme from "vitepress/theme";
import { theme, useTheme, useOpenapi } from 'vitepress-openapi/client'
import 'vitepress-openapi/dist/style.css';
import './global.css'

import spec from '../../src/openapi.json' with { type: "json" }
import { Theme } from "vitepress";

export default {
    extends: DefaultTheme,
    async enhanceApp(ctx) {
        // Set the OpenAPI specification.
        useOpenapi({ spec }) 

        // Use the theme.
        theme.enhanceApp(ctx)

        useTheme({
            operation: {
                defaultBaseUrl: 'https://api.legiti.dev'
            }
        })
    }
} satisfies Theme