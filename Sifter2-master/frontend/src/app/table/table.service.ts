import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/Observable';
import {ConfigService} from '../config/config.service';
import {Apiservice} from '../config/api.service';
import {TableComponent} from './table.component';

@Injectable()
export class Zipcodeservice {

    constructor(private apiservice:Apiservice,private config:ConfigService,){

    }
    private value:TableComponent
    getAllzipcode(city : any): Observable <any>{
       
        return this.apiservice.get(this.config.api_url+'ReaProperty_Default_Activity/get_postal_city?city='+city+'&id=1')
    }
    getAlltablevalue(cities : any,code : any): Observable <any>{

        return this.apiservice.get(this.config.api_url+'ReaProperty_Default_Activity/get_properties_by_city_and_zip_code/?city='+cities+'&zipcode='+code+'')
    }


    getAllCity(): Observable <any>{

        return this.apiservice.get(this.config.api_url+'ReaProperty_Default_Activity/get_assigned_user?id=1')
    }

    getState(): Observable <any>{

        return this.apiservice.get(this.config.api_url+'ReaProperty_Default_Activity/get_states')
    }



}