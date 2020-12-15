import nav from "./components/nav";
import footer from "./components/footer";
import browsersList from "./components/browsersList";

// DOM composition of App function
export default function composition() {

    // Us own composition
    const composition = [
        nav(),
        browsersList(),
        footer()
    ];

    // .join('') is used cause we ain't want
    // comas in tha render
    return composition.join('');
}
