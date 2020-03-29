import { Global, css } from '@emotion/core'

const GlobalStyles = () => (
    <>
        <Global styles={css`
            html {
                line-height: 1.15; /* 1 */
                -ms-text-size-adjust: 100%; /* 2 */
                -webkit-text-size-adjust: 100%; /* 2 */
            }

            body {
                margin: 0;
            }

            article,
            aside,
            footer,
            header,
            nav,
            section {
                display: block;
            }

            h1 {
                font-size: 2em;
                margin: .67em 0;
            }

            figcaption,
            figure,
            main {
                /* 1 */
                display: block;
            }

            figure {
                margin: 1em 40px;
            }

            hr {
                box-sizing: content-box; /* 1 */
                height: 0; /* 1 */
                overflow: visible; /* 2 */
            }

            pre {
                font-family: monospace, monospace; /* 1 */
                font-size: 1em; /* 2 */
            }

            a {
                background-color: transparent; /* 1 */
                -webkit-text-decoration-skip: objects; /* 2 */
            }

            abbr[title] {
                border-bottom: none; /* 1 */
                text-decoration: underline; /* 2 */
                -webkit-text-decoration: underline dotted;
                text-decoration: underline dotted; /* 2 */
            }

            b,
            strong {
                font-weight: inherit;
            }

            b,
            strong {
                font-weight: bolder;
            }

            code,
            kbd,
            samp {
                font-family: monospace, monospace; /* 1 */
                font-size: 1em; /* 2 */
            }

            dfn {
                font-style: italic;
            }

            mark {
                background-color: #ff0;
                color: #000;
            }

            small {
                font-size: 80%;
            }

            sub,
            sup {
                font-size: 75%;
                line-height: 0;
                position: relative;
                vertical-align: baseline;
            }
            
            sub {
                bottom: -0.25em;
            }
            
            sup {
                top: -0.5em;
            }

            
            audio,
            video {
                display: inline-block;
            }

            audio:not([controls]) {
                display: none;
                height: 0;
            }

            img {
                border-style: none;
            }

            svg:not(:root) {
                overflow: hidden;
            }

            button,
            input,
            optgroup,
            select,
            textarea {
                font-family: sans-serif; /* 1 */
                font-size: 100%; /* 1 */
                line-height: 1.15; /* 1 */
                margin: 0; /* 2 */
            }

            button,
            input {
                /* 1 */
                overflow: visible;
            }

            button,
            select {
                /* 1 */
                text-transform: none;
            }

            button,
            html [type="button"],
                /* 1 */
            [type="reset"],
            [type="submit"] {
                -webkit-appearance: button; /* 2 */
            }

            button::-moz-focus-inner,
            [type="button"]::-moz-focus-inner,
            [type="reset"]::-moz-focus-inner,
            [type="submit"]::-moz-focus-inner {
                border-style: none;
                padding: 0;
            }

            button:-moz-focusring,
            [type="button"]:-moz-focusring,
            [type="reset"]:-moz-focusring,
            [type="submit"]:-moz-focusring {
                outline: 1px dotted ButtonText;
            }

            fieldset {
                padding: .35em .75em .625em;
            }

            legend {
                box-sizing: border-box; /* 1 */
                color: inherit; /* 2 */
                display: table; /* 1 */
                max-width: 100%; /* 1 */
                padding: 0; /* 3 */
                white-space: normal; /* 1 */
            }

            progress {
                display: inline-block; /* 1 */
                vertical-align: baseline; /* 2 */
            }

            textarea {
                overflow: auto;
            }

            [type="checkbox"],
            [type="radio"] {
                box-sizing: border-box; /* 1 */
                padding: 0; /* 2 */
            }

            [type="number"]::-webkit-inner-spin-button,
            [type="number"]::-webkit-outer-spin-button {
                height: auto;
            }

            [type="search"] {
                -webkit-appearance: textfield; /* 1 */
                outline-offset: -2px; /* 2 */
            }

            [type="search"]::-webkit-search-cancel-button,
            [type="search"]::-webkit-search-decoration {
                -webkit-appearance: none;
            }

            ::-webkit-file-upload-button {
                -webkit-appearance: button; /* 1 */
                font: inherit; /* 2 */
            }

            details,
                /* 1 */
            menu {
                display: block;
            }

            summary {
                display: list-item;
            }

            canvas {
                display: inline-block;
            }

            template {
                display: none;
            }

            [hidden] {
                display: none;
            }

            html {
                box-sizing: border-box; /* 1 */
                font-family: sans-serif; /* 2 */
            }
            
            *,
            *::before,
            *::after {
                box-sizing: inherit;
            }

            blockquote,
            dl,
            dd,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            figure,
            p,
            pre {
                margin: 0;
            }
            
            button {
                background: transparent;
                padding: 0;
            }

            button:focus {
                outline: 1px dotted;
                outline: 5px auto -webkit-focus-ring-color;
            }
            
            fieldset {
                margin: 0;
                padding: 0;
            }
            
            ol,
            ul {
                margin: 0;
            }

            [tabindex="-1"]:focus {
                outline: none !important;
            }


            *,
            *::before,
            *::after {
                border-width: 0;
                border-style: solid;
                border-color: currentColor;
            }

            img {
                border-style: solid;
            }

            button,
            [type="button"],
            [type="reset"],
            [type="submit"] {
                border-radius: 0;
            }
            
            textarea {
                resize: vertical;
            }
            
            img {
                max-width: 100%;
            }
            
            button,
            input,
            optgroup,
            select,
            textarea {
                font-family: inherit;
            }
            
            input::-webkit-input-placeholder,
            textarea::-webkit-input-placeholder {
                color: inherit;
                opacity: .5;
            }
            
            input::-moz-placeholder,
            textarea::-moz-placeholder {
                color: inherit;
                opacity: .5;
            }
            
            input::-ms-input-placeholder,
            textarea::-ms-input-placeholder {
                color: inherit;
                opacity: .5;
            }
            
            input::placeholder,
            textarea::placeholder {
                color: inherit;
                opacity: .5;
            }
            
            button,
            [role=button] {
                cursor: pointer;
            }

            .container {
                max-width: 960px;
                width: 100%;
                margin: 0 auto;
                padding: 30px;
            }
        `}/>
    </>
)

export default GlobalStyles