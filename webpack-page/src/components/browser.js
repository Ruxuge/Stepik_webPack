export default function browser(browser_name, img_url, img_description) {
    return (
        `<article>
           <h3>${browser_name}</h3>
           <figure>
             <img 
                src="${img_url}" 
                width="100px"
                height="100px"
                alt="${browser_name}" />
           </figure>
           <p>${img_description}</p>
        </article>`
    );
}
