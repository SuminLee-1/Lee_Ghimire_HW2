export class Destination {
   constructor(name, description, images = []) {
     this.name = name;
     this.description = description;
     this.images = images;
   }
 
   addImage(imageUrl) {
     this.images.push(imageUrl);
   }
 
   render(container) {
     container.innerHTML = `<h2>${this.name}</h2><p>${this.description}</p><div class="gallery"></div>`;
     const gallery = container.querySelector('.gallery');
 
     this.images.forEach((url, index) => {
         const imgElement = document.createElement('img');
         imgElement.src = url;
         imgElement.alt = `Image ${index + 1} of ${this.name}`;
         imgElement.classList.add('gallery-img');
 
         imgElement.addEventListener('click', () => {
             const lightbox = document.createElement('div');
             lightbox.id = 'lightbox';
             lightbox.innerHTML = `<img src="${url}" style="max-width: 90%; max-height: 80%;">`;
             document.body.appendChild(lightbox);
 
             lightbox.addEventListener('click', () => {
                 lightbox.remove();
             });
         });
 
         gallery.appendChild(imgElement);
     });
   }
 }
 