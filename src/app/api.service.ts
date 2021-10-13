import { Injectable } from '@angular/core';
//import { Post } from './post';
//import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})

/*export class ApiService {
PHP_API_SERVER = "http://localhost/angpro/api";
constructor(private httpClient: HttpClient) {}
readPosts(): Observable<Post[]>{
return this.httpClient.get<Post[]>(`${this.PHP_API_SERVER}/blog.php`);
}
}*/

export class ApiService {
    url = "http://localhost/angpro/api/blog.php";
    constructor( private http: HttpClient){}
    readPosts(){
        return this.http.get(this.url);
    }

}
