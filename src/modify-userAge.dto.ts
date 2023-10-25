import { ApiProperty } from "@nestjs/swagger";

export class ModifyUserAgeDto {

    @ApiProperty({
        description: 'the age of the use defined in years',
        format: 'int32'
    })
    age: number

}