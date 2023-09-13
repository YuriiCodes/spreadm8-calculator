<svelte:options tag="spreadm8-calc"/>
<script lang="ts">
    const BACKEND_URL="http://localhost:8000";

    // a polyfill for the input[type="date"]
    // element to work in all browsers - that
    // solution is still smaller than including
    // a whole library like lightpick or flatpickr
    import 'date-input-polyfill';

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }
        data["prospect"] = "";
        data["input_spread"] = "5";
        data["prospect_annual_flow"] = "";
        data["email_user"] = false;
        data["user"] = "yuriypidlisnyi2020@gmail.com";
        console.log(data)

        const response = await fetch(`${BACKEND_URL}/calculate`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer whatever",
            },
            body: JSON.stringify(data),
        })
        const json = await response.json();

        console.log(json)
    }

    let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Function to handle changes in dark mode preference
    const handleDarkModeChange = (event) => {
        isDarkMode = event.matches;
    };

    // Add a listener for changes in dark mode preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);

    export let light_mode_background = '#d2d0d0';
    export let dark_mode_background = "#1f2937";
    export let light_mode_text_color = '#1f2937';
    export let dark_mode_text_color = '#f9fafb';

    export let dark_mode_input_background = '#374151';
    export let light_mode_input_background = '#f9fafb';

    export let dark_mode_button_color = '#374151';
    export let light_mode_button_color = '#f9fafb';
    export let border_radius = '0.5rem';

    export let shadow: "none" | "sm" | "md"  | "lg" | "xl" | "2xl" = "none"

    let background: string, text_color: string, input_background: string, button_color: string;
    $: background = isDarkMode ? dark_mode_background : light_mode_background;
    $: text_color = isDarkMode ? dark_mode_text_color : light_mode_text_color;
    $: input_background = isDarkMode ? dark_mode_input_background : light_mode_input_background;
    $: button_color = isDarkMode ? dark_mode_button_color : light_mode_button_color;
    $: input_style = `
    background-color: ${input_background};
    color: ${text_color};
    border-radius: ${border_radius};
    `
</script>


<div class={`w-full p-4 shadow-${shadow}}`} style={`
        background-color: ${background};
        border-radius: ${border_radius};
        color: ${text_color};
`}>
    <form on:submit={handleFormSubmit}>
        <div class="flex flex-col sm:gap-4">
            <div class="flex flex-col sm:flex-row sm:justify-around sm:gap-12">
                <div class="w-full">
                    <label for="date">Select Date</label>
                    <input id="date" type="date" class="w-full rounded-md px-3 py-2" name="date"
                           placeholder="Select date" required style={input_style}/>
                </div>
                <div class="w-full">
                    <label for="time">Select Time</label>
                    <input id="time" type="time" class="w-full rounded-md px-3 py-2" name="time"
                           placeholder="Select Time" required style={input_style}/>
                </div>
            </div>
            <div class="flex flex-col sm:flex-row sm:justify-between sm:gap-12">
                <div class="w-full">
                    <label for="sold_notional">I Paid</label>
                    <input id="sold_notional" type="number" step=".01"
                           class="w-full rounded-md px-3 py-2" name="sold_notional" placeholder="10000"
                           required style={input_style}/>
                </div>
                <div class="w-full">
                    <label for="sold_ccy" style="color: {text_color}">Currency</label>
                    <select name="sold_ccy" id="sold_ccy" class="w-full rounded-md px-3 py-2" required
                            style={input_style}>
                        <option selected>GBP</option>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>JPY</option>
                        <option>CHF</option>
                        <option>CNY</option>
                        <option>NZD</option>
                        <option>SGD</option>
                        <option>INR</option>
                        <option>AUD</option>
                        <option>CAD</option>
                        <option>HKD</option>
                        <option>MYR</option>
                        <option>NOK</option>
                        <option>ZAR</option>
                        <option>RUB</option>
                        <option>SEK</option>
                    </select>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row sm:justify-between sm:gap-12">
                <div class="w-full">
                    <label for="bought_notional">I Received</label>
                    <input id="bought_notional" type="number" step=".01"
                           class="w-full rounded-md px-3 py-2" name="bought_notional" placeholder="10000"
                           required style={input_style}/>
                </div>
                <div class="w-full">
                    <label for="bought_ccy" style="color: {text_color}">Currency</label>
                    <select name="bought_ccy" id="bought_ccy"  class="w-full rounded-md px-3 py-2"
                            required style={input_style}>
                        <option selected>USD</option>
                        <option>GBP</option>
                        <option>EUR</option>
                        <option>JPY</option>
                        <option>CHF</option>
                        <option>CNY</option>
                        <option>NZD</option>
                        <option>SGD</option>
                        <option>INR</option>
                        <option>AUD</option>
                        <option>CAD</option>
                        <option>HKD</option>
                        <option>MYR</option>
                        <option>NOK</option>
                        <option>ZAR</option>
                        <option>RUB</option>
                        <option>SEK</option>
                    </select>
                </div>
            </div>
            <div>
                <button type="submit" class="rounded-lg bg-black px-6 py-3"
                        style="background-color: {button_color}; color: {text_color}">See your
                    charges
                </button>
            </div>
        </div>
    </form>
</div>


<style>
    /*
! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com
*/

    /*
    1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
    2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
    */

    *,
    ::before,
    ::after {
        box-sizing: border-box;
        /* 1 */
        border-width: 0;
        /* 2 */
        border-style: solid;
        /* 2 */
        border-color: #e5e7eb;
        /* 2 */
    }

    ::before,
    ::after {
        --tw-content: '';
    }

    /*
    1. Use a consistent sensible line-height in all browsers.
    2. Prevent adjustments of font size after orientation changes in iOS.
    3. Use a more readable tab size.
    4. Use the user's configured `sans` font-family by default.
    5. Use the user's configured `sans` font-feature-settings by default.
    6. Use the user's configured `sans` font-variation-settings by default.
    */

    html {
        line-height: 1.5;
        /* 1 */
        -webkit-text-size-adjust: 100%;
        /* 2 */
        -moz-tab-size: 4;
        /* 3 */
        tab-size: 4;
        /* 3 */
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        /* 4 */
        font-feature-settings: normal;
        /* 5 */
        font-variation-settings: normal;
        /* 6 */
    }

    /*
    1. Remove the margin in all browsers.
    2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
    */

    body {
        margin: 0;
        /* 1 */
        line-height: inherit;
        /* 2 */
    }

    /*
    1. Add the correct height in Firefox.
    2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
    3. Ensure horizontal rules are visible by default.
    */

    hr {
        height: 0;
        /* 1 */
        color: inherit;
        /* 2 */
        border-top-width: 1px;
        /* 3 */
    }

    /*
    Add the correct text decoration in Chrome, Edge, and Safari.
    */

    abbr:where([title]) {
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
    }

    /*
    Remove the default font size and weight for headings.
    */

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: inherit;
        font-weight: inherit;
    }

    /*
    Reset links to optimize for opt-in styling instead of opt-out.
    */

    a {
        color: inherit;
        text-decoration: inherit;
    }

    /*
    Add the correct font weight in Edge and Safari.
    */

    b,
    strong {
        font-weight: bolder;
    }

    /*
    1. Use the user's configured `mono` font family by default.
    2. Correct the odd `em` font sizing in all browsers.
    */

    code,
    kbd,
    samp,
    pre {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        /* 1 */
        font-size: 1em;
        /* 2 */
    }

    /*
    Add the correct font size in all browsers.
    */

    small {
        font-size: 80%;
    }

    /*
    Prevent `sub` and `sup` elements from affecting the line height in all browsers.
    */

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

    /*
    1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
    2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
    3. Remove gaps between table borders by default.
    */

    table {
        text-indent: 0;
        /* 1 */
        border-color: inherit;
        /* 2 */
        border-collapse: collapse;
        /* 3 */
    }

    /*
    1. Change the font styles in all browsers.
    2. Remove the margin in Firefox and Safari.
    3. Remove default padding in all browsers.
    */

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
        /* 1 */
        font-feature-settings: inherit;
        /* 1 */
        font-variation-settings: inherit;
        /* 1 */
        font-size: 100%;
        /* 1 */
        font-weight: inherit;
        /* 1 */
        line-height: inherit;
        /* 1 */
        color: inherit;
        /* 1 */
        margin: 0;
        /* 2 */
        padding: 0;
        /* 3 */
    }

    /*
    Remove the inheritance of text transform in Edge and Firefox.
    */

    button,
    select {
        text-transform: none;
    }

    /*
    1. Correct the inability to style clickable types in iOS and Safari.
    2. Remove default button styles.
    */

    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
        -webkit-appearance: button;
        /* 1 */
        background-color: transparent;
        /* 2 */
        background-image: none;
        /* 2 */
    }

    /*
    Use the modern Firefox focus style for all focusable elements.
    */

    :-moz-focusring {
        outline: auto;
    }

    /*
    Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
    */

    :-moz-ui-invalid {
        box-shadow: none;
    }

    /*
    Add the correct vertical alignment in Chrome and Firefox.
    */

    progress {
        vertical-align: baseline;
    }

    /*
    Correct the cursor style of increment and decrement buttons in Safari.
    */

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        height: auto;
    }

    /*
    1. Correct the odd appearance in Chrome and Safari.
    2. Correct the outline style in Safari.
    */

    [type='search'] {
        -webkit-appearance: textfield;
        /* 1 */
        outline-offset: -2px;
        /* 2 */
    }

    /*
    Remove the inner padding in Chrome and Safari on macOS.
    */

    ::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    /*
    1. Correct the inability to style clickable types in iOS and Safari.
    2. Change font properties to `inherit` in Safari.
    */

    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        /* 1 */
        font: inherit;
        /* 2 */
    }

    /*
    Add the correct display in Chrome and Safari.
    */

    summary {
        display: list-item;
    }

    /*
    Removes the default spacing and border for appropriate elements.
    */

    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre {
        margin: 0;
    }

    fieldset {
        margin: 0;
        padding: 0;
    }

    legend {
        padding: 0;
    }

    ol,
    ul,
    menu {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    /*
    Reset default styling for dialogs.
    */

    dialog {
        padding: 0;
    }

    /*
    Prevent resizing textareas horizontally by default.
    */

    textarea {
        resize: vertical;
    }

    /*
    1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
    2. Set the default placeholder color to the user's configured gray 400 color.
    */

    input::placeholder,
    textarea::placeholder {
        opacity: 1;
        /* 1 */
        color: #9ca3af;
        /* 2 */
    }

    /*
    Set the default cursor for buttons.
    */

    button,
    [role="button"] {
        cursor: pointer;
    }

    /*
    Make sure disabled buttons don't get the pointer cursor.
    */

    :disabled {
        cursor: default;
    }

    /*
    1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
    2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
       This can trigger a poorly considered lint error in some tools but is included by design.
    */

    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
        display: block;
        /* 1 */
        vertical-align: middle;
        /* 2 */
    }

    /*
    Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
    */

    img,
    video {
        max-width: 100%;
        height: auto;
    }

    /* Make elements with the HTML hidden attribute stay hidden by default */

    [hidden] {
        display: none;
    }

    *, ::before, ::after{
        --tw-border-spacing-x: 0;
        --tw-border-spacing-y: 0;
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-pan-x:  ;
        --tw-pan-y:  ;
        --tw-pinch-zoom:  ;
        --tw-scroll-snap-strictness: proximity;
        --tw-gradient-from-position:  ;
        --tw-gradient-via-position:  ;
        --tw-gradient-to-position:  ;
        --tw-ordinal:  ;
        --tw-slashed-zero:  ;
        --tw-numeric-figure:  ;
        --tw-numeric-spacing:  ;
        --tw-numeric-fraction:  ;
        --tw-ring-inset:  ;
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgb(59 130 246 / 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        --tw-blur:  ;
        --tw-brightness:  ;
        --tw-contrast:  ;
        --tw-grayscale:  ;
        --tw-hue-rotate:  ;
        --tw-invert:  ;
        --tw-saturate:  ;
        --tw-sepia:  ;
        --tw-drop-shadow:  ;
        --tw-backdrop-blur:  ;
        --tw-backdrop-brightness:  ;
        --tw-backdrop-contrast:  ;
        --tw-backdrop-grayscale:  ;
        --tw-backdrop-hue-rotate:  ;
        --tw-backdrop-invert:  ;
        --tw-backdrop-opacity:  ;
        --tw-backdrop-saturate:  ;
        --tw-backdrop-sepia:
    }

    ::backdrop{
        --tw-border-spacing-x: 0;
        --tw-border-spacing-y: 0;
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-pan-x:  ;
        --tw-pan-y:  ;
        --tw-pinch-zoom:  ;
        --tw-scroll-snap-strictness: proximity;
        --tw-gradient-from-position:  ;
        --tw-gradient-via-position:  ;
        --tw-gradient-to-position:  ;
        --tw-ordinal:  ;
        --tw-slashed-zero:  ;
        --tw-numeric-figure:  ;
        --tw-numeric-spacing:  ;
        --tw-numeric-fraction:  ;
        --tw-ring-inset:  ;
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgb(59 130 246 / 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        --tw-blur:  ;
        --tw-brightness:  ;
        --tw-contrast:  ;
        --tw-grayscale:  ;
        --tw-hue-rotate:  ;
        --tw-invert:  ;
        --tw-saturate:  ;
        --tw-sepia:  ;
        --tw-drop-shadow:  ;
        --tw-backdrop-blur:  ;
        --tw-backdrop-brightness:  ;
        --tw-backdrop-contrast:  ;
        --tw-backdrop-grayscale:  ;
        --tw-backdrop-hue-rotate:  ;
        --tw-backdrop-invert:  ;
        --tw-backdrop-opacity:  ;
        --tw-backdrop-saturate:  ;
        --tw-backdrop-sepia:
    }

    .flex{
        display: flex
    }

    .w-full{
        width: 100%
    }

    .flex-col{
        flex-direction: column
    }

    .rounded-lg{
        border-radius: 0.5rem
    }

    .rounded-md{
        border-radius: 0.375rem
    }

    .bg-black{
        --tw-bg-opacity: 1;
        background-color: rgb(0 0 0 / var(--tw-bg-opacity))
    }

    .p-4{
        padding: 1rem
    }

    .px-3{
        padding-left: 0.75rem;
        padding-right: 0.75rem
    }

    .px-6{
        padding-left: 1.5rem;
        padding-right: 1.5rem
    }

    .py-2{
        padding-top: 0.5rem;
        padding-bottom: 0.5rem
    }

    .py-3{
        padding-top: 0.75rem;
        padding-bottom: 0.75rem
    }

    .shadow-2xl{
        --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
        --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }

    .shadow-lg{
        --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }

    .shadow-none{
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }

    .shadow-sm{
        --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }

    .shadow-xl{
        --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }

    @media (min-width: 640px){
        .sm\:flex-row{
            flex-direction: row
        }

        .sm\:justify-between{
            justify-content: space-between
        }

        .sm\:justify-around{
            justify-content: space-around
        }

        .sm\:gap-12{
            gap: 3rem
        }

        .sm\:gap-4{
            gap: 1rem
        }
    }
</style>