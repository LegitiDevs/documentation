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

        const themeApi = useTheme({
            operation: {
                defaultBaseUrl: 'http://127.0.0.1:3000'
            }
        })

        console.log('defaultBaseUrl now:', themeApi.getOperationDefaultBaseUrl())
    }
} satisfies Theme