export interface Pet {
  name: string;
  species: 'Perro' | 'Gato' | 'Ave' | 'Otro';
  sex: 'Macho' | 'Hembra';
  breed: string;
  age: number;
  weight: number;
  microchip: string;
}
