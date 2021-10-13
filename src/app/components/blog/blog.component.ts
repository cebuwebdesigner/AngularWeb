import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
@Component({
selector: 'app-blog',
templateUrl: './blog.component.html',
styleUrls: ['./blog.component.css']
})

/*export class BlogComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}*/

export class BlogComponent {
title = 'API Call in Angular';
readPosts:any;
constructor(private readData:ApiService)
{



 this.readData.readPosts().subscribe((data)=>{
console.warn("data",data);
this.readPosts=data;
 })





}


}