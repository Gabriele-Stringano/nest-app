import { Body, Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./create-user.dto";
import { Response } from "express";
import { ApiOperation, ApiParam, ApiResponse } from "@nestjs/swagger";

@Controller()
export class UserController {
  constructor(private readonly UserService: UserService) { }

  @Get()
  sayHello(): string {
    return this.UserService.sayHello();
  }

  @Get(':firstName')
  // Il comando @ApiResponse serve per indicare ad openapi quali risposte posso avere specificando stato e tipo ritornato
  @ApiOperation({
    summary: 'Prendi utente per nome',
    description: 'Richiede come parametro il nome dell utente'
  })
  // apiParam mi permette di specificare i parametri passabili, con nome, tipo, required, 
  // enum to specify possible values of a request parameter or a model property.
  @ApiParam({ name: 'firstName', type: String, required: true })
  // con ApiResponse ho la lista di tutte le risposte che posso avere chiamando l'api
  @ApiResponse({ status: 404, description: 'Il nome passato come parametro non è valido' })
  @ApiResponse({
    status: 200,
    type: Object,
    description: 'getEsitoNotifica',
  })
  //Uso res perchè voglio personalizzare i codici di ritorno dalle api
  async userByName(@Param('firstName') firstName: string, @Res({ passthrough: true }) response: Response) {
    const userFoud = this.UserService.userByName(firstName);
    if (userFoud) {
      return userFoud;
    } else {
      response.status(HttpStatus.NOT_FOUND).send('User not found!');
      return;
    }
  }

  @Post()
  // Iniziamo con il definire la funzione che deve essere lo stesso metodo dell'user.service
  // I valori che passiamo nel body devono rispettare la struttura dell'oggetto CreateUserDto cresto nel file dto
  // Essendo tipizzato il parametro createUserDto sarà proprio di tipo CreateUserDto
  // A questo punto posso richiamare effettivamente il metodo che mi interessa dell'oggetto nel service e passargli il parametro di tipo CreateUserDto
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.UserService.createUser(createUserDto);
  }
}