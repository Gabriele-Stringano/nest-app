import { CanActivate, ExecutionContext, HttpStatus, Injectable } from "@nestjs/common";

// Un tools comodissimo che mi permette di proteggere le api da utenti non autorizzati
@Injectable()
// CanActivate permette la creazione della funzione canActivate che restituisce un booleano per permettere di procedere o no
export class AuthGuard implements CanActivate {
    canActivate(
        // ExecutionContext serve per la pipeline
        context: ExecutionContext,
    ): boolean {
        // una semplice operazione per verificare il funzionamento
        const request = context.switchToHttp().getRequest();
        const apiKey = request.headers['api-key'];
        return validateRequest(apiKey);
    }
}

function validateRequest(apiKey): boolean {
    if (!apiKey || Array.isArray(apiKey)) return false;
    return true;
}