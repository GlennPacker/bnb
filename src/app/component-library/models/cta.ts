import Facility from 'src/app/accomodation/models/Facility';

export default class Cta {
  title: string;
  src: string;
  alt: string;
  paras: string[];
  facilities?: Facility[];
}