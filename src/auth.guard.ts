import { CanActivate, ExecutionContext, HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean {
        const request = context.switchToHttp().getRequest();
        const apiKey = request.headers['api-key'];
        return validateRequest(apiKey);
    }
}

function validateRequest(apiKey): boolean {
    if (!apiKey || Array.isArray(apiKey)) return false;
    return true;
}