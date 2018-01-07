import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;//means any type can be assigned
  posts:Post[];
  isEdit:boolean=false;

  constructor(private dataService:DataService) {
    console.log('Constructor ran...');
    }

  ngOnInit() {
    console.log('ngOnInıt ran...');
    this.name='John Doe';
    this.age=30;
    this.email='some@thing.com';
    this.address= {
      street:'50 main st',
      city:'New York',
      state:'NY'
    }
    this.hobbies=['Code','Maths','Cars','Flying'];
    this.hello='hello';//or this.hello=1; etc

    //Data Service call
    this.dataService.getPosts().subscribe((postsFromService)=>{
      console.log('DataService call successed...');
      this.posts=postsFromService;
    });
  }

  onClick(){
    console.log('onClick worked...');
    this.name='Dağıstan Karadeniz';
    this.hobbies.push('new hobby from onClick')
  }

  addHobby(newHobby){
    console.log(newHobby);
    //this.hobbies.push(newHobby); //add to the end
    this.hobbies.unshift(newHobby); //add to beginning
    return false; //for not to refresh whole page
  }

  deleteHobby(selectedHobby){
    console.log(selectedHobby);
    for(let i=0;i<this.hobbies.length;i++){
      if(this.hobbies[i]==selectedHobby){
        this.hobbies.splice(i,1);
      }
    }
  }

  toggleEdit(){
    this.isEdit=!this.isEdit;
  }

}

interface Address{
  street:string;
  city:string;
  state:string;
}

interface Post{
  id:number;
  title:string;
  body:string;
  eserId:number;
}