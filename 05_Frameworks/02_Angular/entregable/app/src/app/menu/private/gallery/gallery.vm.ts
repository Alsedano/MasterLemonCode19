export interface GalleryVm {
    id: number; // id de la foto
    src: string; // nombre o path de la imagen
    title: string; // title de la imagen
}

export function createImageGallery(): GalleryVm[] {
    return [
        { id: 1, src: 'assets/nature1.jpg', title: 'nature1' },
        { id: 2, src: 'assets/nature2.jpg', title: 'nature2' },
        { id: 3, src: 'assets/nature3.jpg', title: 'nature3' },
        { id: 4, src: 'assets/nature4.jpg', title: 'nature4' },
        { id: 5, src: 'assets/nature5.jpg', title: 'nature5' },
        { id: 6, src: 'assets/nature6.jpg', title: 'nature6' },
        { id: 7, src: 'assets/nature7.jpg', title: 'nature7' },
        { id: 8, src: 'assets/nature8.jpg', title: 'nature8' }
    ];
}