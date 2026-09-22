---
aside: false
outline: false
title: vitepress-openapi
---

<script setup lang="ts">
import { useRoute } from 'vitepress'
import { onBeforeMount, onBeforeUnmount } from 'vue'
import { useTheme, generateCodeSample } from 'vitepress-openapi/client'

const route = useRoute()

const operationId = route.data.params.operationId

onBeforeMount(() => {
    useTheme({
        codeSamples: {
            availableLanguages: [
                ...useTheme().getCodeSamplesAvailableLanguages(),
                {
                    lang: 'mcfunction',
                    label: 'legitimoose.com /http',
                    highlighter: 'shellscript',
                },
            ],
            defaultLang: 'js',
            generator: async (langConfig, request) => {
                if (langConfig.lang === 'mcfunction') {
                    return generateMcfunctionRequest(request)
                }

                return generateCodeSample(langConfig, request)
            },
        },
    })
})

onBeforeUnmount(() => {
    useTheme().reset()
})

function generateMcfunctionRequest(request) {
    const { url, method, headers, body, query } = request;

    let httpCommand = 'http ';

    const queryString = query && Object.keys(query).length
        ? `${url}?${new URLSearchParams(query).toString()}`
        : url;

    if (body) {
        httpCommand += `body value '${JSON.stringify(body)}' `
    }

    if (Object.keys(headers).length > 0) {
        httpCommand += `headers value ${JSON.stringify(headers)} `
    }

    httpCommand += `send '${queryString}' ${method}`

    return httpCommand
}

</script>

<OAOperation :operationId="operationId" />