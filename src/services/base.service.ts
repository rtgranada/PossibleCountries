import Axios, { AxiosInstance, AxiosError } from 'axios';
import { Output, EventEmitter } from '@angular/core';

export class BaseService {
    protected country: AxiosInstance;
    @Output() static errorEvent: EventEmitter<any> = new EventEmitter();
    @Output() error: EventEmitter<any> = new EventEmitter();

    constructor() {
        this.country = Axios.create({
            baseURL: 'https://restcountries.eu/rest/v2/',
            headers: { 'Content-Type': 'application/json' },
        });
    }

    emitError(error){
        BaseService.errorEvent.emit(error)
    }
}
