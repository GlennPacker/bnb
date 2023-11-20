import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent {
  photoData = [
    'Bessines sur Gartempe',
    'Étang de Sagnat',
    'Gartempe near Bersac Sur Ravailier',
    'gartempe the viaduct',
    'Haute Vienne Lakes and Rivers',
    'kayaking',
    'La Jonchere Saint Maurice - fishing lake',
    'Lac de Chambon',
    'Lac De Saint Pardoux - sky line',
    'Lac de Vassivière',
    `Lac du pont à l’Age`,
    `le Marcheix le Taurion river`,
    `Le Taurion Saint-Laurent-les-Églises`,
    `paragliding`,
    'Saint Sulpice Laurière - fishing lake',
    `Saint Sulpice Laurière – Bois des Echelles`,
    `Saint-Léger-la-Montagne`,
    `sup - stand up paddleboard`,
    `Vienne at Confolens`,
    `vue de vallon bersac limoges`,
    `vue de vallon bersac`,
    `windsup`,
    `windsurfing`,
    `wing surfing and foil`,
    `Étang de la Brousse`,
  ];

  public photos = this.photoData.map(p => ({ src: `/assets/${p}.jpg`, alt: p }));
}
