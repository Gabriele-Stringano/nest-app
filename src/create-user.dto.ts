import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    // ApiProperty mi permette di definire le proprietà della classe dentro swagger!
    // ApiPropertyOptional ATTENZIONE, se voglio un valore opzionale.
    @ApiProperty({
        description: 'the first name of the user',
        maximum: 20,
        minimum: 2,
    })
    firstName: string;
    @ApiProperty({
        description: 'the age of the use defined in years',
        format: 'int32'
    })
    age: number

    /* constructor(
         firstName: string,
         age: number,
     ) {
         this.firstName = firstName;
         this.age = age;
     }*/

    // creare una funzie che faccia da controllore per i dati che vengono passati per la creazine dell'oggetto!

}