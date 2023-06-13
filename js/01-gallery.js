import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const cardsMarkup = createGalleryItemsMarkup(galleryItems);
galleryList.insertAdjacentHTML("beforeend", cardsMarkup);
galleryList.addEventListener("click", onImgClick);

function createGalleryItemsMarkup(items) {
    return items
        .map(({ preview, original, description }) => {
            return `
      <li class="gallery__item">
       <a class="gallery__link" href="${original}">
        <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
         />
       </a>
      </li>`;
        })
        .join("");
}

const instance = basicLightbox.create(
    `<img width="1280" height="auto" src="">`, {
        onShow: (instance) => {
            window.addEventListener("keydown", onEscKeyPress);
        },
        onClose: (instance) => {
            window.removeEventListener("keydown", onEscKeyPress);
        },
    }
);

function onImgClick(event) {
    event.preventDefault();
    const datasetSource = event.target.dataset.source;
    if (!datasetSource) return;
    instance.element().querySelector("img").src = datasetSource;
    instance.show();
}

function onEscKeyPress(event) {
    if (event.code !== "Escape") return;
    instance.close();
}

console.log(createImegCardMarcup(galleryItems));