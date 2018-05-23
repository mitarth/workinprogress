import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

 doctors :any[] = [
                                {
                                                "id": "1235",
                                                "age": "23",
                                                "name": "Dr. Danielle, M.D.",
                                                "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"

                                },
                                {
                                                "id": "1236",
                                                "age": "23",
                                                "name": "Dr. Caitlin, M.D.",
                                                "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"

                                }
                ];
  
  constructor() {
  

  }
  
  ngOnInit() {
  }

}
