import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

import { Coach } from '@app/_models/coach'
import { CoachService } from '@app/_services/coach.service'

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.css'],
})
export class CoachDetailComponent implements OnInit {
  coach: any

  constructor(
    private route: ActivatedRoute,
    private coachService: CoachService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getCoach()
  }

  getCoach() {
    let id = this.route.snapshot.paramMap.get('id')
    return this.coachService.getCoach(id).subscribe(coach => {
      this.coach = coach
    })
  }

  goBack(): void {
    this.location.back()
  }

  /* UPLOAD IMAGE */

  /* selectedFile = null;

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
  }

  onUpload(){
    this.http.post('')
  }*/
}
