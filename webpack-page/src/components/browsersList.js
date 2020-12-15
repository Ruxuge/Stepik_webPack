import browser from "./browser";
import { browsers } from "../content/browserListContent";

export default function browsersList() {
    return (
        `<section>
           <h1>Popular web browsers</h1>
           ${rendBrowsers()}
        </section>`
    );
}

function rendBrowsers() {
    const data = [];

    if (typeof browsers === 'object') {
        for (const key in browsers) {
            data.push(
                browser(browsers[key].name, browsers[key].img, browsers[key].description)
            )
        }
    }

    return data.join('');
}
