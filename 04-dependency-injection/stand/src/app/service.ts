import { Inject, Injectable, inject } from "@angular/core";
import { token } from "./app.component";

@Injectable()
export class Service {
    constructor(@Inject(token) token: number) {
        // console.log('Service', inject(token));
        console.log('Service', token);
    }
}