import Facility from 'src/app/room/models/Facility';

export default class Cta {
  title: string;
  src: string;
  alt: string;
  paras: string[];
  facilities?: Facility[];
}